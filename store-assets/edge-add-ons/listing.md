# Microsoft Edge Add-ons — Listing Copy

Copy-paste fields for Partner Center (partner.microsoft.com → Edge).
Upload the same `dist/chromium.zip` as the Chrome Web Store — no Edge-specific
build. Requirements checked against Microsoft's "Publish a Microsoft Edge
extension" doc (updated 2026-09-02).

**Store identity** (Partner Center › Extension overview; 1.2.0 submitted
2026-10-06, unpublished pending the 1.3.0 review):

- Store ID: `0RDCKCF7R29J`
- CRX ID: `hkkldegnjfeijmpekiklijglmfkaniop` — differs from the Chrome Web Store
  ID, so Edge users' `edge://extensions/?id=` link uses this one.
- Listing URL (live once certified):
  `https://microsoftedge.microsoft.com/addons/detail/hkkldegnjfeijmpekiklijglmfkaniop`

Name and short description come from `manifest.json` and are read-only in
Partner Center.

---

## Availability

- **Visibility:** Public
- **Markets:** All markets

## Properties

- **Category:** Productivity
- **Website:** https://codecraftedapps.com/extensions/go-private-quickly/
- **Support contact detail:** support@codecraftedapps.com
- **Mature content:** unchecked

## Privacy

**Single Purpose Description** (259 chars)

> Go Private Quickly's single purpose is to open a new InPrivate browser window when the user clicks its toolbar icon. The toolbar icon also shows whether the focused window is InPrivate. The extension changes no browser settings and performs no other function.

**Permission justification — `storage`** (324 chars)

> Used solely to store a single onboardingShown flag in chrome.storage.local, so the one-time welcome page that explains how to allow the extension in InPrivate opens only once, on first install. No settings, personal data, or browsing data (URLs, history, tabs, page content) are stored, and nothing is synced or transmitted.

The `privacy` permission is no longer requested as of 1.3.0. If Partner Center
still shows a `privacy` justification field from 1.2.0, clear it.

**Are you using remote code?** No, I am not using remote code.

**Data usage:** check none of the "collect" boxes; check every certification box.

**Privacy policy URL:** https://codecraftedapps.com/extensions/go-private-quickly/privacy.html

## Store listing — English (United States)

**Description** (Edge requires 250–10,000 characters; currently 2027)

```
Go Private Quickly does one small thing and tries to do it well: it puts a button in your toolbar that opens a new InPrivate window. Click the icon, you're private. That's the whole idea.

I built it because I open private windows all day and wanted it to be one click instead of a trip through a menu, and because I wanted something that stayed out of the way and didn't quietly phone home. This one never connects to the internet at all.

WHAT YOU GET
- One click to a new InPrivate window, straight from the toolbar. No popup, no menu, nothing to configure.
- A toolbar icon that quietly shows whether the window you're in is private: a muted silver mask in an InPrivate window, full color everywhere else.
- If Edge hasn't allowed GPQ in InPrivate yet, the click opens a short setup page instead of doing nothing.

WHAT IT HONESTLY DOES NOT DO
- It's not a VPN. Your network, ISP, employer, or school can still see the sites you visit.
- It doesn't hide your IP, block ads or trackers, or make you anonymous.
- It doesn't change any browser settings, touch your normal browsing, or clear anything.

PRIVACY, FOR REAL
- No data collection. None.
- No analytics, no telemetry, no error reporting.
- Zero network requests. The extension never connects to the internet.
- One permission: "storage," used only to remember that you've seen the one-time welcome page. There are no settings to store.
- No third-party code, no CDNs, no remote scripts. It's open source, so you can read every line.

ONE-TIME SETUP
By browser security policy, an extension can't switch itself on in InPrivate windows. The first time you install, a short welcome page walks you through turning on "Allow in InPrivate." You only do it once.

Open source under the MIT License: https://github.com/DJCastle/goPrivateQuickly-Chromium
Questions or problems: support@codecraftedapps.com
Privacy Policy: https://codecraftedapps.com/extensions/go-private-quickly/privacy.html
Terms of Use: https://codecraftedapps.com/extensions/go-private-quickly/terms.html
```

**Extension logo** (required; 1:1, 300×300 recommended): `logo-300.png`,
exported from `tools/icon-sources/venetian-mask-inactive.png` (the colour mask).

**Screenshots** (optional, up to 6, 640×480 or 1280×800), submitted with
1.3.0 (2026-10-07): `edge-1.png` (welcome page showing "Allow in InPrivate")
and `edge-2.png` (Edge's InPrivate page). The GPQ icon isn't in edge-2's
toolbar because the capture predates allowing it in InPrivate; recapture with
the silver mask pinned for a stronger second shot.

**Small promotional tile** (optional, 440×280): `promo-small.png`, same as the
Chrome tile. **Large promotional tile** (optional, 1400×560): none.

**Search terms** (max 7 terms, 30 chars each, 21 words total):

> inprivate, private window, private browsing, incognito, one click private, privacy, private mode

## Notes for certification

```
Single-purpose extension: one click on the toolbar icon opens a new InPrivate window. There is no popup and no settings page. The extension changes no browser settings; its only permission is "storage", used for a single onboardingShown flag.

To test: install, then allow the extension in InPrivate when the welcome page asks (edge://extensions > Go Private Quickly > Details > Allow in InPrivate). Click the toolbar icon: a new InPrivate window opens. Before that permission is granted, the click opens the welcome page instead, and no window is opened.

No network requests, no remote code, no host permissions, no content scripts. Unminified source matching this package: https://github.com/DJCastle/goPrivateQuickly-Chromium (built by build.mjs, which copies src/ without transforming it).
```
