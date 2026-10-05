# Privacy Policy — Go Private Quickly (GPQ)

**Last updated:** October 5, 2026

## The short version

Go Private Quickly does not collect, store, transmit, sell, share, or
otherwise process any personal data. No analytics. No tracking. No
telemetry. No network requests at all. The only things it remembers are
your own settings and a welcome-page flag, kept in your browser's own
extension storage.

If you're the kind of person who only reads the short version, you're
done. Thanks for caring about privacy.

## The slightly longer version

I built Go Private Quickly because I wanted a single-click way to open
a new private/incognito window. That is the entire purpose of the
extension. The only thing GPQ needs to remember between sessions is your
own on/off preferences for the three optional Hardened Mode advanced
toggles — nothing about what you browse.

Those preferences are stored using `chrome.storage.sync` (with a
fallback to `chrome.storage.local` if your browser sync is unavailable).
GPQ itself never sends them anywhere and they never reach me or anyone
else; if you use your browser's sync, your browser carries them between
your own devices (see below).

## What we collect

Nothing.

## What we store on your device

A handful of small settings, totalling well under one kilobyte:

| Setting | Values | Default |
| --- | --- | --- |
| `advStrictWebrtc` | `true` / `false` | `false` |
| `advDisableWebrtc` | `true` / `false` | `false` |
| `advDisableReferrers` | `true` / `false` | `false` |

These three are the **Hardened Private Mode** advanced toggles. They record
only your own on/off preferences for the advanced privacy options. They never
describe anything you browse.

If you've signed into your browser's sync (Chrome sync, Brave Sync,
Edge sync, etc.) these settings travel with you between your own devices. That
sync happens through your browser vendor's infrastructure (Google,
Microsoft, etc.), under their privacy policies, not mine. GPQ doesn't
operate or have access to those servers.

There's also one tiny key in `chrome.storage.local` called
`onboardingShown`, which is just a flag so the one-time welcome page
doesn't re-open.

## What we transmit

Nothing. There are no network requests in the extension's code. No
`fetch`, no `XMLHttpRequest`, no WebSocket, no image beacons, no
third-party SDKs, no remote scripts, no CDN, no Google Fonts.
Nothing.

If you want technical confirmation, the extension's permissions list
in your browser's extension manager will show that GPQ requests only
the `storage` and `privacy` permissions (the `privacy` permission is
used solely by Hardened Private Mode — see below) and no host
permissions at all — your browser itself won't let it read or transmit
page data even if it wanted to.

The only "external" links you'll see are in the options page and
onboarding page footers — links to this website and a `mailto:` link
to the support email. Those links only do anything when *you* click
them. Until then, no requests are made.

## What permissions GPQ requests, and why

On **Firefox**, only one: `"storage"`, to save the settings above.

On **Chromium browsers** (Chrome, Edge, Brave, Vivaldi, etc.), two:

- `"storage"` — to save the settings above.
- `"privacy"` — used **only** by Hardened Private Mode, and **only** to
  apply privacy-hardening to the private session you explicitly open.
  GPQ writes these settings with the browser's *incognito-session-only*
  scope, so they affect the private session alone and the browser clears
  them automatically when the last private window closes. GPQ never
  changes your normal-browsing privacy settings. The `privacy` permission
  also lets GPQ read each setting's level of control, so it skips any
  setting that enterprise policy or another extension controls instead of
  trying to override it.
  Firefox does not offer a private-session scope for these settings, so
  the Firefox build does not request `privacy` and offers no Hardened
  Mode, rather than changing your global configuration.

GPQ does not request, and does not have access to:

- Your browsing history
- Your tabs' URLs or content
- Your cookies, cache, or downloads
- Your bookmarks
- Any specific websites (no host permissions)
- Your location, microphone, camera, or any other sensor
- Any VPN software, installed applications, or other extensions
- Anything else

GPQ never disables your security protections. Safe Browsing, phishing and
malware protection, certificate and HTTPS checks, browser updates, download
scanning, and your password manager are never touched by Hardened Private
Mode.

## Third parties

There are no third parties. No analytics provider, no error-reporting
service, no payment processor, no ad network, no CDN. GPQ is a single
self-contained extension with no external dependencies at runtime.

## Children

GPQ doesn't collect anything from anyone, so there's nothing
child-specific to disclose. It's safe for any age group that's old
enough to use a web browser.

## Changes to this policy

If this policy ever changes, the updated version will live at the same
URL ([codecraftedapps.com/extensions/go-private-quickly/privacy](https://codecraftedapps.com/extensions/go-private-quickly/privacy.html))
with a new "Last updated" date at the top. Material changes will be
called out in the changelog of any release that introduces them.

## Contact

If you have a privacy question or want to verify any of the above,
email me at [support@codecraftedapps.com](mailto:support@codecraftedapps.com).
