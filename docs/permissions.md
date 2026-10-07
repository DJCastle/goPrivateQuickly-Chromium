# Permissions & Reviewer Notes — Go Private Quickly

This document explains every permission the extension requests and why it is
required. It is written for store reviewers and privacy-conscious users. The
canonical privacy policy is [`../PRIVACY.md`](../PRIVACY.md).

## Final permission list

This repository ships the **Chromium** build (Chrome, Edge, Brave, Vivaldi,
Arc).

| Permission | Required for | Notes |
| --- | --- | --- |
| `storage` | Remembering the welcome page was shown | A single `onboardingShown` flag in `chrome.storage.local`. No settings, no browsing data. |

No host permissions. No `tabs`, `activeTab`, `cookies`, `downloads`,
`bookmarks`, `history`, `management`, `privacy`, `proxy`, `webRequest`,
`declarativeNetRequest`, `nativeMessaging`, or clipboard permissions.

The `privacy` permission was removed in 1.2.1 together with Hardened Private
Mode. The extension now changes no browser settings — it only opens private
windows, one click from the toolbar, the same as the
[Firefox build](https://github.com/DJCastle/goPrivateQuickly-Firefox).

APIs used without a permission: `chrome.action` (toolbar click and icon),
`chrome.windows` (open an incognito window; read the focused window's
`incognito` flag to pick the icon), `chrome.tabs.create` (open the extension's
own onboarding page and, on request, the browser's extensions page),
`chrome.runtime`, and `chrome.extension.isAllowedIncognitoAccess()` (onboarding
status). None of these read tab URLs or page content.

## Reviewer note — why `storage` is required

- **`storage`** — The only data stored is a single `onboardingShown` boolean so
  the one-time welcome page doesn't re-open. Total size is a few bytes. No
  settings, browsing history, URLs, queries, page content, cookies, or
  identifiers are ever stored. Nothing is transmitted.

## What this build never changes

The extension changes no browser settings at all — it only opens private
windows. Security protections are never read or written: Safe Browsing,
phishing/malware protection, certificate validation, HTTPS protections,
browser-update checks, download scanning, password-manager protections, and
autofill.

## No remote code, no network

All code ships in the package. There is no `eval`, no `new Function`, no remote
script loading, no `fetch`/`XMLHttpRequest`/WebSocket, no analytics, telemetry,
or crash reporting. Pages run under an explicit strict CSP
(`script-src 'self'; object-src 'self'`).
