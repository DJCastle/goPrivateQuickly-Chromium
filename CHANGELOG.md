# Changelog — Go Private Quickly (GPQ)

All notable changes to this extension are documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Version scheme: [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] — 2026-10-07

### Removed

- **Hardened Private Mode, the popup and the settings page.** Hardened mode
  could fail silently: for some users clicking it did nothing visible, with no
  window and no explanation. Rather than keep a feature that looked like it
  worked when it didn't, the Chromium build now does one thing, the same way
  the Firefox build does. Gone with it: the Alt+Shift+H shortcut, the three
  advanced toggles, and every use of `chrome.privacy`.
- **The `privacy` permission.** GPQ now requests `storage` only, used for a
  single `onboardingShown` flag in `chrome.storage.local`. The old
  advanced-toggle preferences are no longer read or written.

### Changed

- **One click opens a private window directly.** Clicking the toolbar icon
  opens a new incognito window right away, with no popup in between. If the
  browser refuses (GPQ not yet allowed in incognito), the click opens the
  welcome page instead of failing silently.
- **The welcome page speaks Edge.** On Microsoft Edge it says "Allow in
  InPrivate" and opens `edge://extensions`; on other Chromium browsers it says
  "Allow in Incognito" and opens `chrome://extensions`.

### Fixed

- The build no longer copies Finder's `.DS_Store` files into the package.

## [1.2.0] — 2026-10-05

### Added

- **Keyboard shortcut for a Hardened window.** Alt+Shift+H (Option+Shift+H
  on Mac) opens a Hardened Private Window without the popup. Change it in the
  browser's extension shortcuts settings.

### Fixed

- **Hardened no longer leaves an unhardened window behind.** If GPQ wasn't
  yet allowed in incognito, clicking Hardened used to open a plain private
  window in the background before showing the setup page. Now it shows the
  setup page and opens nothing until access is granted.
- The settings page showed a hard-coded version number; it now reads the
  installed version.
- "Disable WebRTC entirely" is now greyed out on Chromium, where no API exists
  for it, instead of being a checkbox that did nothing.

### Changed

- Descriptions of Hardened mode now say the advertising-API protections
  (Topics, Ad measurement, Protected Audience) apply only where the browser
  still has those APIs. Google is retiring them, and GPQ already skipped any
  that are missing.

## [1.1.5] — 2026-06-11

### Changed

- Refreshed the toolbar mask artwork. A muted silver "secure" mask now marks
  private / Hardened windows; the vivid purple-and-gold mask marks normal
  windows (and is the store listing icon).

### Fixed

- Corrected documentation that described the toolbar icon's colors in reverse
  (it previously said the colorful mask appeared in private windows).

## [1.0.0] — 2026-05-31

First public release.

### Added

- **Open Private Window** — one click opens a new private/incognito window
  on Chromium browsers and Firefox. The toolbar icon reflects whether the
  focused window is private.
- **Open Hardened Private Window** (optional) — opens a private window and
  tightens supported privacy settings for that private session only:
  WebRTC IP protection, network prediction, address-bar search suggestions,
  hyperlink auditing, alternate error pages, the online spelling service,
  the Topics / Ad-measurement / Related Website Sets / Protected Audience
  advertising APIs, and third-party cookies.
  - On Chromium these are applied with the browser's `incognito_session_only`
    scope, so they affect the private session only and the browser restores
    them automatically when the last private window closes — even after a
    crash. Normal browsing settings are never changed, and security
    protections (Safe Browsing, password manager, certificate/HTTPS checks,
    updates, download scanning) are never touched.
  - On Firefox, where these settings cannot be confined to a private session,
    each protection is reported as "Unavailable" rather than changed.
- **Advanced settings** (off by default, each with a warning): strict WebRTC
  routing (`proxy_only`), disable WebRTC entirely, and disable referrer
  headers.
- **First-run onboarding** that walks through enabling the extension in
  private/incognito windows.
- Light and dark theme support; keyboard navigation and screen-reader labels.

### Privacy

- No data collection, no analytics, no telemetry, no network requests, and
  no remote code. Chromium requests `storage` and `privacy`; Firefox requests
  only `storage`. Strict Content Security Policy.

[1.3.0]: https://github.com/DJCastle/goPrivateQuickly-Chromium/releases/tag/gpq-v1.3.0
[1.2.0]: https://github.com/DJCastle/goPrivateQuickly-Chromium/releases/tag/gpq-v1.2.0
[1.1.5]: https://github.com/DJCastle/goPrivateQuickly-Chromium/releases/tag/gpq-v1.1.5
[1.0.0]: https://github.com/DJCastle/goPrivateQuickly-Chromium/releases/tag/gpq-v1.0.0
