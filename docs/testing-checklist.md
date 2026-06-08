# Testing Checklist — Go Private Quickly (Hardened Private Mode)

Manual checklist plus the automated suite. Run before every store submission.

## Automated tests

```
# from the repo root
node --test
```

Covers the declarative setting builder and the Chromium adapter decision logic
(applied / already-protected / blocked / unavailable / failed) with a mocked
`chrome.privacy`. Browser-integration behavior is manual.

## Build

```
node build.mjs
# load dist/chromium/ unpacked in a Chromium browser
```

## Browsers to cover

- [ ] Chrome (current stable)
- [ ] Edge (current stable)
- [ ] Brave (current stable)
- [ ] Vivaldi (if available)

## Functional tests

- [ ] Standard **Open Private Window** still opens a normal private/incognito
      window with no settings changed.
- [ ] Toolbar click opens the popup; **Open Private Window** is focused so
      Enter opens a private window immediately.
- [ ] **Open Hardened Private Window** opens a private window and shows the
      status panel.
- [ ] The hardened window opens unfocused and the popup stays open to show the
      status panel; **Switch to private window** brings it to the front.
- [ ] Multiple private windows can be opened safely; opening a second hardened
      window does not error.
- [ ] (Chromium) Hardened settings remain active while any private window is
      open. Verify e.g. `chrome://settings` / a WebRTC leak test page reflects
      the hardened value inside the private session.
- [ ] (Chromium) Settings restore automatically when the **last** private
      window closes — normal windows show the original values.
- [ ] (Chromium) After closing all private windows and restarting the browser,
      no hardened value persists (fresh session starts at browser defaults).
- [ ] (Chromium) Force-quit the browser mid-hardened-session, relaunch: no
      hardened value persists in normal browsing (incognito-session-only is
      memory-only).
- [ ] Normal (non-private) browsing settings remain unchanged throughout.
- [ ] A setting controlled by **enterprise policy** reports "Not controllable
      because of browser policy or another extension" (test on a managed
      profile or with a policy set), not a crash.
- [ ] A setting controlled by **another extension** reports the same and the
      rest still apply.
- [ ] Unsupported settings (e.g. on a browser missing an API) report
      "Unavailable in this browser" without crashing.
- [ ] **Privacy Sandbox** toggles (Topics, Ad measurement, Related Website
      Sets, FLEDGE) report "Already protected by browser" in Chromium incognito.
- [ ] **Third-party cookies** report "Already protected by browser" when the
      browser already blocks them in private mode; existing cookie exceptions
      are not overridden.

## Advanced options

- [ ] All three advanced toggles are **off** by default.
- [ ] Each advanced toggle shows its warning text.
- [ ] Strict WebRTC routing applies `proxy_only` (Chromium) when enabled.
- [ ] "Disable WebRTC entirely" shows the not-available note on Chromium.
- [ ] Disable referrer headers applies (Chromium) when enabled.
- [ ] Advanced preferences persist across browser restarts.

## VPN reminder

- [ ] Off by default; no dialog appears.
- [ ] When enabled, the dialog appears **before** the hardened window opens.
- [ ] Shows "VPN status: Not verified" and the required warning text.
- [ ] **Continue** proceeds; **Cancel** aborts; **Do not remind me again**
      disables the reminder and proceeds.
- [ ] Esc cancels the dialog.
- [ ] No network request is made at any point (verify in DevTools Network tab).

## Privacy & data hygiene

- [ ] No external network requests anywhere (DevTools → Network, popup +
      background + options).
- [ ] No private-window URLs are stored in sync/local/session storage.
- [ ] No private-window URLs appear in console logs.
- [ ] No remote resources (scripts, fonts, images) are loaded.
- [ ] Storage contains only the documented preference keys.

## Accessibility

- [ ] Full keyboard navigation of the popup (Tab order, Enter, Esc).
- [ ] Status rows convey state by symbol + text, not color alone.
- [ ] Screen reader announces each status row's `aria-label`
      (e.g. "WebRTC IP protection: Applied for this private session").
- [ ] Advanced `<details>` summary and all controls are reachable and labeled.
- [ ] Focus moves to the status panel after a hardened launch.
