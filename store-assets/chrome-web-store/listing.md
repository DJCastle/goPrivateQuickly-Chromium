# Chrome Web Store — Listing Copy

This document is structured so you can copy-paste each field straight
into the Chrome Web Store developer dashboard. The CWS listing also
serves users of **Brave, Microsoft Edge, Arc, and Vivaldi** —
all of those browsers install Chromium extensions directly from this
store. Edge also gets its own Microsoft Edge Add-ons listing from the
same zip; its copy is in `../edge-add-ons/listing.md`.

---

## Item name

> Go Private Quickly

_Max 45 chars. Currently: 22._

## Short description (summary)

_CWS shows the manifest `description` as the summary; keep this text and
`manifest.json` `description` identical._

> Open a new private/incognito window with one click, right from your toolbar. Free, open source, and genuinely zero-tracking.

_Max 132 chars. Currently: 124._

## Category

> **Productivity**

(Alternatives: "Workflow & Planning". The CWS doesn't have a
dedicated Privacy category; Productivity is the closest fit.)

## Language

> English (United States)

## Detailed description

```
Go Private Quickly does one small thing and tries to do it well: it puts a button in your toolbar that opens a new incognito window. Click the icon, you're private. That's the whole idea.

I built it because I open incognito windows all day and wanted it to be one click instead of a trip through a menu — and because I wanted something that stayed out of the way and didn't quietly phone home. This one never connects to the internet at all.

WHAT YOU GET
- One click to a new incognito window, straight from the toolbar. No popup, no menu, nothing to configure.
- A toolbar icon that quietly shows whether the window you're in is private: a muted silver mask in a private window, full color everywhere else.
- If your browser hasn't allowed GPQ in incognito yet, the click opens a short setup page instead of doing nothing.

WHAT IT HONESTLY DOES NOT DO (I'd rather set expectations than oversell)
- It's not a VPN. Your network, ISP, employer, or school can still see the sites you visit.
- It doesn't hide your IP, block ads or trackers, or make you anonymous.
- It doesn't change any browser settings, touch your normal browsing, or clear anything.

If you want real anonymity, use Tor. For network privacy, a reputable VPN. For tracker blocking, uBlock Origin. GPQ plays nicely alongside all of them — it just gets you into a private window faster.

PRIVACY, FOR REAL
- No data collection. None.
- No analytics, no telemetry, no error reporting.
- Zero network requests — the extension never connects to the internet, period.
- One permission: "storage," used only to remember that you've seen the one-time welcome page. There are no settings to store.
- No third-party code, no CDNs, no remote scripts. It's open source, so you can read every line.

ONE-TIME SETUP
By browser security policy, an extension can't switch itself on in incognito windows. The first time you install, a short welcome page walks you through flipping "Allow in Incognito" (on Edge, "Allow in InPrivate"). You only do it once.

Works on Chrome and every Chromium browser — Brave, Microsoft Edge, Arc, and Vivaldi all install it from here.

Open source under the MIT License: https://github.com/DJCastle/goPrivateQuickly-Chromium
Questions or problems: support@codecraftedapps.com
Privacy Policy: https://codecraftedapps.com/extensions/go-private-quickly/privacy.html
Terms of Use: https://codecraftedapps.com/extensions/go-private-quickly/terms.html
```

_CWS allows up to 16,000 characters here. Currently: 2431._

## Single purpose description

CWS requires extensions to declare a single, narrow purpose. Use this:

> Go Private Quickly's single purpose is to open a new private/incognito browser window when the user clicks its toolbar icon. The toolbar icon also shows whether the focused window is private. The extension changes no browser settings and performs no other function.

_Max 1,000 chars. Currently: 265._

## Permission justifications

The only permission is `storage`. If the dashboard still lists a `privacy`
justification from 1.2.0, clear it — 1.3.0 no longer requests `privacy`.

### `storage`

> Used solely to store a single onboardingShown flag in chrome.storage.local, so the one-time welcome page that explains how to allow the extension in incognito opens only once, on first install. No settings, personal data, or browsing data (URLs, history, tabs, page content) are stored, and nothing is synced or transmitted.

_Max 1,000 chars. Currently: 324._

## Host permission justifications

> None — Go Private Quickly does not request host permissions for any website. The extension does not read, modify, or inject anything into web pages.

## Remote code justification

> None — Go Private Quickly does not load or execute remote code. All JavaScript ships in the extension package and runs under a strict Content Security Policy (script-src 'self'; object-src 'self'). There is no `eval`, no remote script loading, and no network requests of any kind.

## Data usage / data privacy disclosures

In the "Privacy practices" section of the CWS dashboard, check:

- [x] **None of these "I collect or transfer X" boxes** — GPQ collects nothing.
- [x] **I do not sell or transfer user data to third parties.** (true)
- [x] **I do not use or transfer user data for purposes unrelated to the item's single purpose.** (true)
- [x] **I do not use or transfer user data to determine creditworthiness or for lending purposes.** (true)

Privacy Policy URL (required field):

> https://codecraftedapps.com/extensions/go-private-quickly/privacy.html

## Screenshots — 1280×800 PNG (exactly)

Submitted with 1.3.0 (2026-10-07), in this order:

1. **chrome-1.png — welcome page** — the one-time setup page showing "Allow in Incognito". Leads, because it shows what the extension is.
2. **chrome-2.png — private window** — Chrome's "You've gone Incognito" tab. The GPQ mask is too small to read at store size; a capture with the mask pinned and visible would be stronger.

Screenshots: full-bleed window content, square corners, no padding or
shadow. Capture from the store build (not Developer mode / unpacked).

**Small promo tile (440×280) is required by CWS.** `promo-small.png` — the
colour mask on dark indigo with the name and "One click to a private window".

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
