# Mohamed Hashim — Portfolio

Personal portfolio site. Flutter developer, 3+ years, 8 production apps on the App Store and Google Play.

Static site — plain HTML, CSS and JavaScript. No build step, no dependencies.

## Files

| File | What it holds |
|---|---|
| `index.html` | Page structure and section markup |
| `styles.css` | All styling, dark theme, responsive rules |
| `app.js` | Content data + rendering + interactions |
| `assets/Mohamed_Hashim_CV.pdf` | Downloadable CV |

## Editing content

Everything on the page is generated from the data arrays at the top of `app.js`:

- `PROJECTS` — apps live on the stores (shows in the phone mockup and the work cards)
- `NDA` — client projects described by business logic only, no names
- `SKILLS` — skill blocks with the "Used in" evidence line
- `TOOLS` — the tools-at-a-glance rows
- `TIMELINE` — work experience
- `APPROACH` — the workflow cards

Add an app by appending one object to `PROJECTS`:

```js
{
  short: "XX", name: "App name", kind: "Category",
  grad: "linear-gradient(135deg,#7c6cf5,#4e3fd6)",
  desc: "What the app does.",
  role: "What I built, with <b>a highlight</b>.",
  tags: ["Flutter", "BLoC"],
  android: "https://play.google.com/store/apps/details?id=...",
  ios: "https://apps.apple.com/us/app/.../id..."
}
```

It appears in the phone mockup and the work section automatically. Omit `android` or `ios` to hide that store button.

