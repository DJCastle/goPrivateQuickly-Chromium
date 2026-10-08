# Go Private Quickly (GPQ) — Chromium

> One-click private/incognito windows for Chromium browsers (Chrome, Brave,
> Edge, Arc, Vivaldi).
> No tracking. No analytics. No network requests. Open source under MIT.
>
> Firefox build:
> [goPrivateQuickly-Firefox](https://github.com/DJCastle/goPrivateQuickly-Firefox).

![Version](https://img.shields.io/badge/version-1.3.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Manifest](https://img.shields.io/badge/manifest-v3-orange)
![Privacy](https://img.shields.io/badge/data%20collection-zero-brightgreen)

## What it does

Click the toolbar icon and a new private/incognito window opens right
away. One click, straight from your toolbar, with no popup in between.
That's the whole idea — and it works the same way as the Firefox build.

The toolbar icon also reflects whether the currently focused window is
private — a vivid purple-and-gold mask when you're in a normal window, a
muted silver mask when you're in a private (secure) one.

GPQ changes no browser settings. Earlier versions offered an optional
Hardened Private Mode; it was removed in 1.3.0 (see the
[changelog](CHANGELOG.md)), along with the popup, the settings page and
the `privacy` permission.

## What it does NOT do

GPQ is a convenience tool, not a privacy product. It does not:

- Act as a VPN. Your ISP, employer, school, and any network observer
  can still see the sites you visit.
- Hide your IP address.
- Block trackers, ads, or fingerprinting.
- Clear cookies or history from your normal windows.
- Sync settings to a "GPQ account" — there is no such thing. The only
  syncing is your browser's own (Chrome sync, Brave Sync, etc.).
- Connect to the internet for any reason. There are no `fetch` or
  `XMLHttpRequest` calls anywhere in the source.

For genuine privacy beyond what private mode itself gives you, look
at uBlock Origin (tracker blocking), a reputable VPN (network-level
privacy), HTTPS-Only mode in your browser (transport encryption), and
DNS-over-HTTPS (DNS-query encryption). GPQ doesn't replace any of
those.

## Install

- **Chromium browsers** (Chrome, Brave, Edge, Arc, Vivaldi):
  the [Chrome Web Store](https://chromewebstore.google.com/detail/binihpnpginmnaodjalkhakakdhhjkkl).
- **Microsoft Edge**: also listed on
  [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/hkkldegnjfeijmpekiklijglmfkaniop).

1.3.0 is live on both stores.

Using Firefox? It's a separate package —
[goPrivateQuickly-Firefox](https://github.com/DJCastle/goPrivateQuickly-Firefox).

Prefer to build and load it from source? See
[docs/build-instructions.md](docs/build-instructions.md).

### One quick post-install step

By browser security policy, extensions can't enable themselves in
private/incognito mode. The first time you install GPQ it opens a
welcome page that walks you through the one-time toggle:

- Chrome, Brave, Arc, Vivaldi: `chrome://extensions` → Go Private Quickly →
  Details → switch on **Allow in Incognito**.
- Edge: `edge://extensions` → Go Private Quickly → Details → switch on
  **Allow in InPrivate**. (The welcome page detects Edge and uses its wording.)

If you click the icon before flipping that switch, the browser refuses
to open the window and GPQ opens the welcome page instead.

Without that toggle, GPQ can technically run from a normal window but
can't open private ones on your behalf.

## Permissions

Only `"storage"` — used solely to remember that you've already seen the
one-time welcome page (a single `onboardingShown` flag in
`chrome.storage.local`). GPQ changes no browser settings and does not
request `privacy`.

GPQ does not request and does not have access to your tabs, history,
cookies, bookmarks, downloads, any specific websites, or any VPN/other
installed software. Full justification lives in
[`docs/permissions.md`](docs/permissions.md) and the
[Privacy Policy](https://codecraftedapps.com/extensions/go-private-quickly/privacy.html).

## Settings

None. GPQ has no popup and no settings page — it does one thing, one
click, with nothing to configure.

## Browser support

| Browser | Minimum version |
| --- | --- |
| Chrome / Brave / Edge / Arc / Vivaldi | Chromium 109+ |

Firefox (115+, incl. ESR) ships from the
[goPrivateQuickly-Firefox](https://github.com/DJCastle/goPrivateQuickly-Firefox)
repo.

Tested on macOS as of 1.1.5. Should work on Windows and Linux equally
— the extension uses only standard, cross-platform `chrome.*` APIs.
If you find an OS-specific bug, please email support.

## License

Released under the MIT License. See [LICENSE](LICENSE) at the
repo root or [codecraftedapps.com/extensions/license.html](https://codecraftedapps.com/extensions/license.html).

## Author and support

Built by CodeCrafted Apps.

- Website: [codecraftedapps.com/extensions](https://codecraftedapps.com/extensions)
- Email: [support@codecraftedapps.com](mailto:support@codecraftedapps.com)
- Privacy Policy: [codecraftedapps.com/extensions/go-private-quickly/privacy](https://codecraftedapps.com/extensions/go-private-quickly/privacy.html)
- Terms of Use: [codecraftedapps.com/extensions/go-private-quickly/terms](https://codecraftedapps.com/extensions/go-private-quickly/terms.html)

GPQ is a side project. I plan to keep it working as browsers evolve,
but there's no service-level commitment — see the
[Terms of Use](TERMS.md) for the formal version of that disclaimer.
