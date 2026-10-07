# Microsoft Edge Add-ons — Listing Copy

Copy-paste fields for Partner Center (partner.microsoft.com → Edge).
Upload the same `dist/chromium.zip` as the Chrome Web Store — no Edge-specific
build. Requirements checked against Microsoft's "Publish a Microsoft Edge
extension" doc (updated 2026-09-02).

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

**Single Purpose Description**

> Go Private Quickly's single purpose is to open a private (InPrivate) browser window from the toolbar, with an optional Hardened Private Mode that applies privacy-hardening settings to that private session only. The extension does not perform any other function.

**Permission justification — `storage`**

> Used solely to persist the user's own settings (the advanced Hardened Mode privacy toggles) so they survive browser restarts, plus a single onboardingShown flag so the one-time welcome page doesn't re-open. No personal data or browsing data is stored.

**Permission justification — `privacy`** (890 chars)

> Used only by the optional Hardened Private Mode, and only when the user opens a hardened InPrivate window. It applies a fixed, documented set of privacy settings (WebRTC IP handling, network prediction, search suggestions, hyperlink auditing, alternate error pages, online spelling service, third-party cookies, and advertising APIs where available), plus two opt-in advanced options (strict WebRTC routing, disabling referrer headers), all with the incognito_session_only scope, so they apply to the InPrivate session only and the browser clears them when the last InPrivate window closes. Normal browsing settings are never changed. Security settings (SmartScreen/Safe Browsing, password manager, certificate/HTTPS/update/download protections, autofill) are never read or modified. It also reads each setting's levelOfControl so it skips any setting locked by policy or another extension.

**Are you using remote code?** No, I am not using remote code.

**Data usage:** check none of the "collect" boxes; check every certification box.

**Privacy policy URL:** https://codecraftedapps.com/extensions/go-private-quickly/privacy.html

## Store listing — English (United States)

**Description** (Edge requires 250–10,000 characters)

```
Go Private Quickly does one small thing and tries to do it well: it puts a button in your toolbar that opens a new InPrivate window. Click the icon, click the button, you're private. That's the whole idea.

I built it because I open private windows all day and wanted it to be one click instead of a trip through a menu, and because I wanted something that stayed out of the way and didn't quietly phone home. This one never connects to the internet at all.

WHAT YOU GET
- One click to a new InPrivate window, straight from the toolbar.
- A toolbar icon that quietly shows whether the window you're in is private.
- An optional "Hardened" mode that opens an InPrivate window and tightens a set of privacy settings for that session only: WebRTC IP protection, network prediction, search suggestions, hyperlink auditing, third-party cookies, and more. Edge puts them all back automatically when the last InPrivate window closes, so your normal browsing is never changed, and security protections (SmartScreen, your password manager, certificate/HTTPS checks, updates) are never touched.
- A keyboard shortcut (Alt+Shift+H, or Option+Shift+H on Mac) that opens a Hardened window directly.
- A few optional Advanced toggles for power users (stricter WebRTC routing, disabling referrer headers), off by default, each clearly labeled with its trade-off.

WHAT IT HONESTLY DOES NOT DO
- It's not a VPN. Your network, ISP, employer, or school can still see the sites you visit.
- It doesn't hide your IP, block ads or trackers, or make you anonymous.
- It doesn't touch your normal browsing or clear anything.

PRIVACY, FOR REAL
- No data collection. None.
- No analytics, no telemetry, no error reporting.
- Zero network requests. The extension never connects to the internet.
- Two permissions, both minimal: "storage" (remembers your own settings) and "privacy" (used only to apply the hardening to the InPrivate session you open, never to your normal browsing).
- No third-party code, no CDNs, no remote scripts. It's open source, so you can read every line.

ONE-TIME SETUP
By browser security policy, an extension can't switch itself on in InPrivate windows. The first time you install, a short welcome page walks you through turning on "Allow in InPrivate." You only do it once.

Open source under the MIT License: https://github.com/DJCastle/goPrivateQuickly-Chromium
Questions or problems: support@codecraftedapps.com
Privacy Policy: https://codecraftedapps.com/extensions/go-private-quickly/privacy.html
Terms of Use: https://codecraftedapps.com/extensions/go-private-quickly/terms.html
```

**Extension logo** (required; 1:1, 300×300 recommended, 128×128 minimum):
`src/icons/venetian-mask/icon-128.png` meets the minimum. A 300×300 export
from the original artwork would look sharper.

**Screenshots** (optional, up to 6, 640×480 or 1280×800): the Chrome set in
`../chrome-web-store/` is 1280×800 and accepted, but shows Chrome. Edge
captures would be better.

**Small promotional tile** (optional, 440×280) and **large promotional tile**
(optional, 1400×560): none prepared.

**Search terms** (max 7 terms, 30 chars each, 21 words total):

> inprivate, private window, private browsing, incognito, one click private, privacy, private mode

## Notes for certification

```
Single-purpose extension: one click opens a new InPrivate window. Optional Hardened mode applies documented privacy settings with the incognito_session_only scope, so they affect only the InPrivate session and are cleared by the browser when it closes.

To test Hardened mode: install, allow the extension in InPrivate when the welcome page asks (edge://extensions → Details → Allow in InPrivate), then click the toolbar icon and choose Hardened. Without that permission, Hardened shows the setup page and opens nothing.

No network requests, no remote code, no host permissions, no content scripts. Unminified source matching this package: https://github.com/DJCastle/goPrivateQuickly-Chromium (built by build.mjs, which copies src/ without transforming it).
```
