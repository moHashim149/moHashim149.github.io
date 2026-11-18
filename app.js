/* ---------------------------------------------------------
   Mohamed Hashim — portfolio
   Edit the data below; the page builds itself from it.
---------------------------------------------------------- */

const PROJECTS = [
  {
    short: "SS", name: "SahlaShop", kind: "Multi-vendor marketplace",
    grad: "linear-gradient(135deg,#7c6cf5,#4e3fd6)",
    desc: "Flagship multi-vendor shopping app: products, restaurants, pharmacies, classifieds, gift cards and vouchers, with loyalty points, a digital wallet, an AI chat assistant and VIP subscriptions. Sellers run their shop, products, orders and payments from a dedicated dashboard. Order updates arrive live over Pusher.",
    role: "Features, bug fixing, performance, <b>Pusher real-time updates</b> and store releases across a <b>200K+ line</b> codebase.",
    tags: ["BLoC", "Clean Architecture", "Freezed", "Drift", "Hive", "Pusher", "Socket.IO", "Firebase"],
    android: "https://play.google.com/store/apps/details?id=ua.suliit.com",
    ios: "https://apps.apple.com/us/app/sahlashop/id6473451976"
  },
  {
    short: "SP", name: "SahlaShop Picker", kind: "Warehouse operations",
    grad: "linear-gradient(135deg,#38d9c4,#1f9e8e)",
    desc: "Operations app for store and warehouse staff to pick, pack and manage customer orders. Real-time order status updates and streamlined workflows improve fulfilment speed and accuracy. Orders are kept in local storage (Hive) and synced with remote data, so pickers keep working on a weak connection.",
    role: "Picking and packing flows with <b>real-time status sync</b> and a <b>local-storage-to-remote sync layer</b> built on Hive.",
    tags: ["Flutter", "Hive", "Local storage sync", "REST APIs", "Real-time", "Barcode"],
    android: "https://play.google.com/store/apps/details?id=ua.suliitpicker.com",
    ios: "https://apps.apple.com/us/app/amcoop-picker/id6754638042"
  },
  {
    short: "WD", name: "WeDeliver Driver", kind: "Delivery & logistics",
    grad: "linear-gradient(135deg,#f0943e,#d96f1c)",
    desc: "Delivery app for drivers to receive orders, navigate to drop-off points and manage delivery tasks, with live status updates and order tracking throughout the run. Real-time order and location updates run over Pusher.",
    role: "Navigation, task flow, <b>live location tracking</b> and <b>Pusher real-time updates</b> on the driver side.",
    tags: ["Google Maps", "Geolocation", "Live tracking", "Pusher", "Push notifications"],
    android: "https://play.google.com/store/apps/details?id=ua.suliitdriver.com",
    ios: "https://apps.apple.com/us/app/weideliver/id6753266053"
  },
  {
    short: "WS", name: "WeDeliver Store", kind: "Vendor management",
    grad: "linear-gradient(135deg,#ef5f82,#c93a5f)",
    desc: "Store-side app letting vendors receive, manage and track customer orders, with product management and delivery coordination. New orders and driver status arrive in real time over Pusher.",
    role: "Order intake, product management, <b>delivery coordination</b> and <b>Pusher real-time updates</b>.",
    tags: ["Flutter", "Pusher", "REST APIs", "Notifications"],
    android: "https://play.google.com/store/apps/details?id=ua.suliitstore.app.com",
    ios: "https://apps.apple.com/us/app/weideliver-store/id6753308367"
  },
  {
    short: "OT", name: "Otantik", kind: "E-commerce",
    grad: "linear-gradient(135deg,#4ea8f5,#2470d1)",
    desc: "Shopping app for browsing products and categories, managing cart, addresses and payments, and placing orders. Includes a loyalty-points rewards programme, order tracking and in-app force-update prompts.",
    role: "Rewards redemption, checkout and the <b>force-update</b> flow.",
    tags: ["Flutter", "Payments", "Loyalty points", "Flavors"],
    android: "https://play.google.com/store/apps/details?id=com.otantick",
    ios: "https://apps.apple.com/us/app/otantik-app/id6763939875"
  },
  {
    short: "AZ", name: "andk-zood", kind: "Classifieds & auctions",
    grad: "linear-gradient(135deg,#34c77b,#1f8f57)",
    desc: "Classifieds marketplace for posting, browsing and managing ads, with live auctions, in-app chat, favourites and wallet-based payments. Built for the Saudi market.",
    role: "Ads, auctions, <b>Agora voice &amp; chat</b> and wallet payments.",
    tags: ["Agora RTC/RTM", "Pusher", "Moyasar", "Google Maps"],
    android: "https://play.google.com/store/apps/details?id=com.linkdevelopment.andkzood",
    ios: "https://apps.apple.com/us/app/andk-zood/id6780944602"
  },
  {
    short: "SA", name: "saudi-auction", kind: "Live auctions",
    grad: "linear-gradient(135deg,#b06cf5,#7d3fd6)",
    desc: "Online auction app for listing items and bidding in live auctions, with wallet management, commission payments and in-app notifications.",
    role: "Live bidding, <b>anti-sniping timers</b> and socket status updates.",
    tags: ["Socket.IO", "Pusher", "Moyasar", "Wallet"],
    android: "https://play.google.com/store/apps/details?id=com.linkdevelopment.mazad",
    ios: "https://apps.apple.com/us/app/saudi-auction/id6770861278"
  },
  {
    short: "BZ", name: "BidZone Auctions", kind: "Electronics auctions",
    grad: "linear-gradient(135deg,#f5c542,#d99a12)",
    desc: "Live electronics auctions from your phone, covering the whole cycle in one app: pay a deposit to join, bid in real time, then pay for the win and get the item shipped through the built-in shipping service. No payment or delivery arranged outside the app.",
    tags: ["Flutter", "Real-time bidding", "Deposits", "Payments", "Shipping"],
    android: "https://play.google.com/store/apps/details?id=com.linkdevelopment.bidzone",
    ios: "https://apps.apple.com/us/app/bidzone-auctions/id6798772923"
  }
];

const NDA = [
  {
    name: "Coffee & café ordering app", kind: "F&B ordering",
    desc: "Drink customisation (size, flavour, add-ons) with live pricing, delivery with distance-based fees or prepaid branch pickup, gift orders, and a car-pickup check-in that alerts the branch in real time. Wallet with auto-refunds, loyalty points and ratings.",
    tags: ["Moyasar", "Apple Pay", "Mada", "Google Maps"]
  },
  {
    name: "Beauty & medical booking app", kind: "Service marketplace",
    desc: "Marketplace for laser, beauty, dental and dermatology offers. Browse without login, book per provider with date and time selection, pay online, track bookings and rate after service.",
    tags: ["Tabby (BNPL)", "Payments", "Booking flow"]
  },
  {
    name: "Electronics auction app", kind: "Auctions & shipping",
    desc: "Deposit-based entry, live bidding with a 15-second anti-sniping extension, and a payment deadline for the winner. Post-auction checkout covers item price, live courier shipping quotes via API, and tax, with status updates through delivery.",
    tags: ["Pusher", "Courier API", "Wallet"]
  },
  {
    name: "Productive families & events marketplace", kind: "Multi-vendor",
    desc: "One cart across multiple families that splits into per-family orders with a single payment and distance-based delivery. Service requests go to nearby providers, who send quotes; the customer compares portfolios and ratings, accepts a quote, and pays before contact details unlock.",
    tags: ["Split orders", "Quotes", "Geofencing"]
  },
  {
    name: "Ride-hailing app", kind: "Mobility",
    desc: "Map-based pickup and drop-off with fares from opening fee, per-km and per-minute rates. Trips dispatch to the nearest matching drivers within a set radius, with live driver tracking on the map, no-show fees, wallet cashback and ratings.",
    tags: ["Socket.IO", "Go realtime service", "Live tracking"]
  },
  {
    name: "Gold & jewellery e-commerce app", kind: "E-commerce",
    desc: "Category browsing, product details with reviews, search, favourites, address book, checkout, order history, wallet and in-app customer service.",
    tags: ["Flutter", "REST APIs", "Wallet"]
  }
];

const SKILLS = [
  {
    title: "Architecture & state",
    what: "Clean Architecture with BLoC/Cubit and GetX, dependency injection through get_it and injectable, routing with GoRouter and AutoRoute.",
    used: "SahlaShop, andk-zood, saudi-auction"
  },
  {
    title: "Networking & data",
    what: "Dio with interceptors and caching, generic HTTP wrappers, Freezed and JsonSerializable models, explicit error mapping and retry strategies.",
    used: "Every production app"
  },
  {
    title: "Offline-first storage",
    what: "Local storage with Hive, Drift and SQLite, synced with remote data so the app stays usable without a connection and reconciles when it is back. Plus debounced and hybrid search.",
    used: "SahlaShop, SahlaShop Picker"
  },
  {
    title: "Real-time features",
    what: "Live bidding, anti-sniping timers, order status streams and chat over Socket.IO and Pusher Channels, with Agora RTC/RTM for voice and messaging.",
    used: "SahlaShop, WeDeliver Driver, WeDeliver Store, saudi-auction, andk-zood, ride-hailing"
  },
  {
    title: "Payments",
    what: "Moyasar, Tabby (BNPL), Apple Pay and Mada/Visa/Mastercard, including deposits, commission payments, wallets and refund flows.",
    used: "andk-zood, saudi-auction, café ordering"
  },
  {
    title: "Driving & delivery apps",
    what: "Driver-side and ride/delivery apps with real-time updates and live tracking: dispatch, navigation, location streaming, order status and task flow between driver, store and customer.",
    used: "WeDeliver Driver, WeDeliver Store, ride-hailing"
  },
  {
    title: "Maps & location",
    what: "Google Maps, geolocation, distance-based delivery pricing, radius dispatch to nearby drivers or providers, and live tracking on the map.",
    used: "WeDeliver Driver, ride-hailing"
  },
  {
    title: "Firebase & delivery",
    what: "Auth, Cloud Messaging, Analytics and Crashlytics; flavors for dev, staging and production; managing releases on both stores.",
    used: "Otantik, all production apps"
  },
  {
    title: "Localization & UI",
    what: "Fully localized EN/AR interfaces with RTL support, adaptive themes, ScreenUtil, Shimmer loading and responsive layouts.",
    used: "Every production app"
  }
];

const TOOLS = [
  ["Mobile", ["Flutter", "Dart", "Android", "iOS"]],
  ["Architecture & state", ["Clean Architecture", "BLoC / Cubit", "GetX", "get_it", "injectable", "GoRouter", "AutoRoute"]],
  ["Data", ["Dio", "Freezed", "JsonSerializable", "Drift", "Hive", "SQLite", "Result / Either"]],
  ["Real-time & services", ["Socket.IO", "Pusher Channels", "Live tracking", "Agora RTC/RTM", "Firebase", "Google Maps"]],
  ["Payments", ["Moyasar", "Tabby", "Apple Pay", "Mada", "Visa / Mastercard"]],
  ["Workflow", ["Git & GitHub", "Postman", "ApiDog", "Figma", "AI agents (Claude, Cursor)"]]
];

const TIMELINE = [
  {
    role: "Flutter Developer", co: "Link Development Co.", date: "Mar 2026 – Present", now: true,
    points: [
      "Developed and maintained live production apps for the Saudi market — marketplaces and auctions.",
      "Built listings, bidding, chat, favourites, wallet and payment features.",
      "Integrated Moyasar and Tabby (BNPL) payment gateways.",
      "Integrated Agora RTC/RTM for in-app voice and messaging.",
      "Integrated Pusher Channels and Socket.IO for real-time updates.",
      "Built real-time auction flows: live bidding, anti-sniping timers and socket status updates.",
      "Shipped BidZone Auctions to the App Store and Google Play.",
      "Built delivery and driver apps with real-time updates and live tracking (SahlaShop, WeDeliver Driver and Store) using Pusher.",
      "Built local-storage sync with Hive against remote data in SahlaShop Picker."
    ]
  },
  {
    role: "Flutter Developer", co: "Code Craft (Software House)", date: "Jan 2023 – Mar 2026",
    points: [
      "Developed, maintained and supported 7 live production mobile applications.",
      "Built scalable, maintainable features using Flutter and Clean Architecture.",
      "Diagnosed and fixed critical bugs, improving app performance and reliability.",
      "Integrated backend services and REST APIs.",
      "Managed app releases and updates on the App Store and Google Play.",
      "Mentored developers and ran code reviews."
    ]
  }
];

const APPROACH = [
  {
    n: "01", title: "Requirements before design",
    text: "I cross-check the BRD against the Figma designs to surface gaps, then report them to the UI/UX team before any screen gets built."
  },
  {
    n: "02", title: "Audit the API surface",
    text: "I compare the existing endpoints against the BRD to flag what is missing or wrong, so the backend team can fix it before implementation starts, not after."
  },
  {
    n: "03", title: "A checklist per API",
    text: "Each feature module gets a Markdown checklist generated from the BRD. It drives the implementation and doubles as the review list when the feature is done."
  },
  {
    n: "04", title: "Review everything, including AI output",
    text: "I use AI agents to move faster, but I read every generated flow and code path myself and verify the business logic against the spec. Speed is worth nothing if the logic is wrong."
  }
];

/* --------------------------- render --------------------------- */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/&(?!\w+;)/g, "&amp;").replace(/</g, "&lt;");

const PLAY_ICON = '<svg viewBox="0 0 24 24"><path d="M3.6 2.2 13 11.6l-9.4 9.4a1.6 1.6 0 0 1-.6-1.3V3.5c0-.5.2-1 .6-1.3Zm11 8L5.9 1.6l10.5 6-1.8 2.6Zm1.8 4.2L5.9 20.4l8.7-8.7 1.8 2.7Zm1.6-5.2 2.6 1.5c1 .6 1 2 0 2.6l-2.6 1.5L15.9 12l2.1-2.8Z"/></svg>';
const APPLE_ICON = '<svg viewBox="0 0 24 24"><path d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.8-.9-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 3 2.3 1.2 0 1.6-.8 3.1-.8s1.9.8 3.1.7c1.3 0 2.1-1.1 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7 0 0-2.5-.9-2.5-3.6ZM14.2 5.5c.6-.8 1-1.9.9-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-.9 2.9 1 0 2-.5 2.7-1.3Z"/></svg>';

function storeLinks(p, cls = "store") {
  let h = "";
  if (p.android) h += `<a class="${cls}" href="${p.android}" target="_blank" rel="noopener">${PLAY_ICON}Google Play</a>`;
  if (p.ios) h += `<a class="${cls}" href="${p.ios}" target="_blank" rel="noopener">${APPLE_ICON}App Store</a>`;
  return h;
}

/* phone: app grid */
$("#appGrid").innerHTML = PROJECTS.map((p, i) => `
  <button class="app" data-i="${i}" aria-label="Open ${esc(p.name)}">
    <span class="app-icon" style="background:${p.grad}">${esc(p.short)}</span>
    <span class="app-name">${esc(p.name)}</span>
  </button>`).join("");

/* phone: detail view */
const screenHome = $("#screenHome"), screenDetail = $("#screenDetail"), detailBody = $("#detailBody");

function openApp(i) {
  const p = PROJECTS[i];
  detailBody.innerHTML = `
    <div class="d-icon" style="background:${p.grad}">${esc(p.short)}</div>
    <p class="d-name">${esc(p.name)}</p>
    <p class="d-kind">${esc(p.kind)}</p>
    <p class="d-desc">${esc(p.desc)}</p>
    <div class="d-tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>
    <div class="d-links">${storeLinks(p, "")}</div>`;
  screenHome.classList.remove("is-active");
  screenDetail.classList.add("is-active");
}
function closeApp() {
  screenDetail.classList.remove("is-active");
  screenHome.classList.add("is-active");
}
$("#appGrid").addEventListener("click", e => {
  const b = e.target.closest(".app");
  if (b) openApp(+b.dataset.i);
});
$("#backBtn").addEventListener("click", closeApp);

/* project cards */
$("#projectCards").innerHTML = PROJECTS.map(p => `
  <article class="card reveal">
    <div class="card-top">
      <div class="card-icon" style="background:${p.grad}">${esc(p.short)}</div>
      <div>
        <h3 class="card-title">${esc(p.name)}</h3>
        <p class="card-kind">${esc(p.kind)}</p>
      </div>
    </div>
    <p>${esc(p.desc)}</p>
    <div class="tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>
    <div class="store-links">${storeLinks(p)}</div>
  </article>`).join("");

/* NDA cards */
$("#ndaCards").innerHTML = NDA.map(p => `
  <article class="card reveal">
    <div class="card-top">
      <div>
        <h3 class="card-title">${esc(p.name)}</h3>
        <p class="card-kind">${esc(p.kind)}</p>
      </div>
    </div>
    <p>${esc(p.desc)}</p>
    <div class="tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>
  </article>`).join("");

/* skills */
$("#skillGrid").innerHTML = SKILLS.map(s => `
  <article class="skill reveal">
    <h3>${esc(s.title)}</h3>
    <p class="what">${esc(s.what)}</p>
    <p class="used"><b>Used in:</b> ${esc(s.used)}</p>
  </article>`).join("");

$("#toolRows").innerHTML = TOOLS.map(([h, items]) => `
  <div class="tool-row reveal">
    <h4>${esc(h)}</h4>
    <div class="chips">${items.map(i => `<span>${esc(i)}</span>`).join("")}</div>
  </div>`).join("");

/* timeline */
$("#timeline").innerHTML = TIMELINE.map(t => `
  <li class="tl reveal${t.now ? " now" : ""}">
    <div class="tl-head">
      <h3>${esc(t.role)}</h3>
      <span class="tl-date">${esc(t.date)}</span>
    </div>
    <p class="tl-co">${esc(t.co)}</p>
    <ul>${t.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>
  </li>`).join("");

/* approach */
$("#approachGrid").innerHTML = APPROACH.map(a => `
  <article class="approach reveal">
    <div class="num">${esc(a.n)}</div>
    <h3>${esc(a.title)}</h3>
    <p>${esc(a.text)}</p>
  </article>`).join("");

/* --------------------------- behaviour --------------------------- */
$("#year").textContent = new Date().getFullYear();

/* nav: shadow on scroll + active link */
const nav = $("#nav");
const links = [...document.querySelectorAll(".nav-links a")];
const sections = links.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);

addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", scrollY > 10);
  const y = scrollY + 120;
  let current = null;
  sections.forEach(s => { if (s.offsetTop <= y) current = s.id; });
  links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
}, { passive: true });

/* theme toggle */
$("#themeBtn").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch {}
});

/* mobile menu */
const toggle = $("#navToggle");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav-links a").forEach(a =>
  a.addEventListener("click", () => nav.classList.remove("open")));

/* copy email */
const copyBtn = $("#copyBtn");
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText($("#emailText").textContent.trim());
    copyBtn.textContent = "Copied ✓";
  } catch {
    copyBtn.textContent = "Press ⌘C";
  }
  setTimeout(() => (copyBtn.textContent = "Copy"), 1800);
});

/* reveal on scroll */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  });
}, { threshold: .12, rootMargin: "0px 0px -40px" });
const revealEls = [...document.querySelectorAll(".reveal")];
revealEls.forEach((el, i) => {
  el.style.transitionDelay = (i % 3) * 70 + "ms";
  io.observe(el);
});

/* safety net: anything already on screen (e.g. landing straight on #experience)
   is revealed even if the observer callback was missed during the jump */
function sweepReveal() {
  revealEls.forEach(el => {
    if (el.classList.contains("in")) return;
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight && r.bottom > 0) { el.classList.add("in"); io.unobserve(el); }
  });
}
addEventListener("load", () => setTimeout(sweepReveal, 300));
addEventListener("hashchange", () => setTimeout(sweepReveal, 500));
