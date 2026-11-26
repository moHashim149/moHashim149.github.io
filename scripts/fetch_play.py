#!/usr/bin/env python3
"""Fetch Google Play icons + screenshots for every app listed in app.js
and write them to data/play.json. Run weekly by .github/workflows/play-assets.yml.
Google Play has no public API and blocks browser requests, so this runs server-side."""
import json, re, sys, urllib.request, urllib.parse
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "data" / "play.json"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"

def packages():
    src = (ROOT / "app.js").read_text(encoding="utf-8")
    return list(dict.fromkeys(re.findall(r"play\.google\.com/store/apps/details\?id=([\w.]+)", src)))

def fetch(pkg):
    url = "https://play.google.com/store/apps/details?" + urllib.parse.urlencode({"id": pkg, "hl": "en", "gl": "us"})
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "en-US,en;q=0.9"})
    html = urllib.request.urlopen(req, timeout=30).read().decode("utf-8", "replace")
    icon = re.search(r'property="og:image" content="(https://play-lh\.googleusercontent\.com/[^"=]+)', html)
    shots = []
    for tag in re.findall(r'<img[^>]*alt="Screenshot image"[^>]*>', html):
        m = re.search(r'src="(https://play-lh\.googleusercontent\.com/[^"=]+)', tag)
        if m and m.group(1) not in shots:
            shots.append(m.group(1))
    if not icon:
        raise ValueError("icon not found")
    return {"icon": icon.group(1) + "=s256", "shots": [s + "=w360" for s in shots[:8]]}

def main():
    data = json.loads(OUT.read_text()) if OUT.exists() else {}
    failed = []
    for pkg in packages():
        try:
            data[pkg] = fetch(pkg)
            print("ok  ", pkg, len(data[pkg]["shots"]), "shots")
        except Exception as e:  # keep the previous entry if Play is unreachable
            failed.append(pkg)
            print("FAIL", pkg, e, file=sys.stderr)
    OUT.write_text(json.dumps(data, indent=2, sort_keys=True) + "\n")
    if failed and len(failed) == len(packages()):
        sys.exit(1)

if __name__ == "__main__":
    main()
