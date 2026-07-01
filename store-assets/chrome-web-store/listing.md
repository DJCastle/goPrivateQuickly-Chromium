# Chrome Web Store — Listing Copy

This document is structured so you can copy-paste each field straight
into the Chrome Web Store developer dashboard. The CWS listing also
serves users of **Brave, Microsoft Edge, Arc, and Vivaldi** —
all of those browsers install Chromium extensions directly from this
store. Edge has its own store too, but it's not a v1 target; Edge
users will be told to install from the CWS in support docs.

---

## Item name

> Go Private Quickly

_Max 45 chars. Currently: 22._

## Short description (summary)

> Open a private/incognito window in one click, plus an optional Hardened Mode that tightens privacy for that session only.

_Max 132 chars. Currently: 119._

## Category

> **Productivity**

(Alternatives: "Workflow & Planning". The CWS doesn't have a
dedicated Privacy category; Productivity is the closest fit.)

## Language

> English (United States)

## Detailed description

```
Go Private Quickly does one small thing and tries to do it well: it puts a button in your toolbar that opens a new incognito window. Click the icon, click the button, you're private. That's the whole idea.

I built it because I open incognito windows all day and wanted it to be one click instead of a trip through a menu — and because I wanted something that stayed out of the way and didn't quietly phone home. This one never connects to the internet at all.

WHAT YOU GET
- One click to a new incognito window, straight from the toolbar.
- A toolbar icon that quietly shows whether the window you're in is private.
- An optional "Hardened" mode that opens an incognito window and tightens a set of privacy settings for that session only: WebRTC IP protection, network prediction, search suggestions, hyperlink auditing, the Topics / ad-measurement / FLEDGE advertising APIs, third-party cookies, and more. Your browser puts them all back automatically when the last incognito window closes, so your normal browsing is never changed — and security protections (Safe Browsing, your password manager, certificate/HTTPS checks, updates) are never touched.
- A few optional Advanced toggles for power users (stricter WebRTC routing, disabling referrer headers) — off by default, each clearly labeled with its trade-off.

WHAT IT HONESTLY DOES NOT DO (I'd rather set expectations than oversell)
- It's not a VPN. Your network, ISP, employer, or school can still see the sites you visit.
- It doesn't hide your IP, block ads or trackers, or make you anonymous.
- It doesn't touch your normal browsing or clear anything.

If you want real anonymity, use Tor. For network privacy, a reputable VPN. For tracker blocking, uBlock Origin. GPQ plays nicely alongside all of them — it just gets you into a private window faster, and optionally tightens the browser's own privacy settings while you're there.

PRIVACY, FOR REAL
- No data collection. None.
- No analytics, no telemetry, no error reporting.
- Zero network requests — the extension never connects to the internet, period.
- Two permissions, both minimal: "storage" (remembers your own settings) and "privacy" (used only to apply the hardening to the incognito session you open — never to your normal browsing).
- No third-party code, no CDNs, no remote scripts. It's open source, so you can read every line.

ONE-TIME SETUP
By browser security policy, an extension can't switch itself on in incognito windows. The first time you install, a short welcome page walks you through flipping "Allow in Incognito." You only do it once.

Works on Chrome and every Chromium browser — Brave, Microsoft Edge, Arc, and Vivaldi all install it from here.

Open source under the MIT License: https://github.com/DJCastle/goPrivateQuickly-Chromium
Questions or problems: support@codecraftedapps.com
Source: https://github.com/DJCastle/goPrivateQuickly-Chromium
Privacy Policy: https://codecraftedapps.com/extensions/go-private-quickly/privacy.html
Terms of Use: https://codecraftedapps.com/extensions/go-private-quickly/terms.html
```

_CWS allows up to 16,000 characters here. Above is well under the limit._

## Single purpose description

CWS requires extensions to declare a single, narrow purpose. Use this:

> Go Private Quickly's single purpose is to open a private/incognito browser window from the toolbar, with an optional Hardened Private Mode that applies privacy-hardening settings to that private session only. The extension does not perform any other function.

## Permission justifications

For each permission CWS asks you to justify, paste this:

### `storage`

> Used solely to persist the user's own settings (the three advanced Hardened Mode privacy toggles) so they survive browser restarts and sync across the user's own devices via the browser's built-in sync. No personal data or browsing data is stored. Storage is `chrome.storage.sync` with a `chrome.storage.local` fallback if sync is unavailable.

### `privacy`

> Used only by the optional Hardened Private Mode, and only when the user explicitly opens a hardened private window. The extension applies a fixed, documented set of privacy settings (WebRTC IP handling, network prediction, search suggestions, hyperlink auditing, alternate error pages, online spelling service, the Topics/Ad-measurement/Related-Website-Sets/FLEDGE advertising APIs, and third-party cookies) using the `incognito_session_only` scope, so the changes apply to the private session only and the browser clears them automatically when the last private window closes. The user's normal-browsing settings are never changed. Security-related settings (Safe Browsing, password manager, certificate/HTTPS/update/download protections, autofill) are never read or modified. The permission also lets the extension read each setting's `levelOfControl` so it can accurately report when a setting is locked by enterprise policy or another extension.

## Host permission justifications

> None — Go Private Quickly does not request host permissions for any website. The extension does not read, modify, or inject anything into web pages.

## Remote code justification

> None — Go Private Quickly does not load or execute remote code. All JavaScript ships in the extension package and runs under the default Manifest V3 Content Security Policy. There is no `eval`, no remote script loading, and no network requests of any kind.

## Data usage / data privacy disclosures

In the "Privacy practices" section of the CWS dashboard, check:

- [x] **None of these "I collect or transfer X" boxes** — GPQ collects nothing.
- [x] **I do not sell or transfer user data to third parties.** (true)
- [x] **I do not use or transfer user data for purposes unrelated to the item's single purpose.** (true)
- [x] **I do not use or transfer user data to determine creditworthiness or for lending purposes.** (true)

Privacy Policy URL (required field):

> https://codecraftedapps.com/extensions/go-private-quickly/privacy.html

## Screenshots — 1280×800 PNG (exactly)

Three are prepared in this folder (`chrome-1.png`, `chrome-2.png`,
`chrome-3.png`), already sized to 1280×800. Suggested upload order and
captions:

1. **chrome-2.png — private window + popup** — Chrome's "You've gone Incognito" tab with the GPQ popup open. Caption: "Click → instant private window. Hardened or Standard, your choice."
2. **chrome-1.png — Options / Allow in Incognito** — the extension's details/options panel showing Hardened Private Mode and the Allow-in-Incognito step. Caption: "Optional Hardened Mode, plus a one-time setup to allow private windows."
3. **chrome-3.png — the website + popup** — the popup over the CodeCraftedApps Browser Extensions site. Caption: "Open source, zero tracking, zero network requests."

_You can also include a single 440×280 "promotional tile" PNG._

## Promo video (optional, recommended)

A 30-second silent screen recording showing: install → onboarding →
toolbar click → private window opens → focus swap shows icon change.
YouTube link goes in the promo video field.

## Search terms / keywords (CWS allows up to 5)

> private window, incognito, private browsing, one click incognito, privacy

Other strong candidates if you want to swap:
`new private window`, `incognito shortcut`, `private mode`, `quick incognito`,
`open incognito`, `start in incognito`, `auto incognito`, `private startup`.

## Pricing & distribution

- **Visibility:** Public
- **Pricing:** Free
- **Distribution regions:** All regions
- **Mature content:** No
