# Testing Checklist — Go Private Quickly (Chromium)

Manual checklist plus the automated suite. Run before every store submission.

## Automated tests

```
# from the repo root
node --test
```

Covers the toolbar-click path in `src/launch.js` with a mocked `chrome`:
exactly one incognito window is requested, and a refused window reports
failure instead of throwing. Browser-integration behavior is manual.

## Build

```
node build.mjs
# load dist/chromium/ unpacked in a Chromium browser
```

- [ ] `dist/chromium/` contains no `.DS_Store` files.

## Browsers to cover

- [ ] Chrome (current stable)
- [ ] Edge (current stable)
- [ ] Brave (current stable)
- [ ] Vivaldi (if available)

## Functional tests

- [ ] Clicking the toolbar icon opens a new private (incognito / InPrivate)
      window immediately — there is no popup.
- [ ] The toolbar icon reflects window state: muted silver mask while a private
      window is focused, full-color mask otherwise; it updates as focus moves
      between windows.
- [ ] If GPQ is **not yet allowed in incognito**, clicking the icon opens the
      onboarding page instead of failing silently, and no window is opened.
- [ ] After enabling "Allow in Incognito" (Edge: "Allow in InPrivate"),
      clicking the icon opens a private window.
- [ ] Multiple private windows can be opened safely; repeated clicks don't error.
- [ ] No browser settings change: normal and private browsing settings are
      the same before and after using GPQ.

## Onboarding

- [ ] On first install the welcome page opens automatically (once).
- [ ] Chrome/Brave/Vivaldi: the button reads "Open Allow in Incognito setting"
      and opens `chrome://extensions/?id=…` (or reveals the copy-paste
      fallback if the browser refuses).
- [ ] Edge: the button reads "Open Allow in InPrivate setting" and opens
      `edge://extensions/?id=…` with the Edge Add-ons id.
- [ ] After enabling the toggle, **Re-check** flips the page to the
      "You're all set" state.

## Privacy & data hygiene

- [ ] No external network requests anywhere (DevTools → Network, background
      service worker + onboarding).
- [ ] No private-window URLs are stored in sync/local/session storage.
- [ ] No private-window URLs appear in console logs.
- [ ] No remote resources (scripts, fonts, images) are loaded.
- [ ] Storage contains only the `onboardingShown` flag.

## Accessibility

- [ ] Onboarding controls are reachable by keyboard and labeled for screen
      readers.
