# Store Submission Checklist — Go Private Quickly (Chromium)

Chrome Web Store submission for the Chromium build. Brave, Edge, Arc,
and Vivaldi all install from the Chrome Web Store — no separate listings.
Firefox (AMO) is handled in the
[goPrivateQuickly-Firefox](https://github.com/DJCastle/goPrivateQuickly-Firefox)
repo. Run the [testing checklist](testing-checklist.md) first.

## Pre-flight

- [ ] `node --test` passes.
- [ ] `node build.mjs --zip` produces a clean `dist/chromium/` and
      `dist/chromium.zip`.
- [ ] Version bumped in `manifest.json`; `CHANGELOG.md` updated; git tag
      `gpq-vX.Y.Z` created.
- [ ] Privacy policy reachable at its public URL.
- [ ] No `console.log` of any browsing data; no remote resources; no network
      calls.

## Chrome Web Store

- [ ] Developer account active ($5 fee paid).
- [ ] Manifest V3, `minimum_chrome_version` set.
- [ ] Permissions = `["storage", "privacy"]` only. No host permissions.
- [ ] **Single purpose**: "Open a private/incognito window from the toolbar,
      with an optional Hardened Private Mode that applies session-scoped
      privacy settings to that private window only."
- [ ] Permission justifications filled in:
  - `storage` — persists the user's own settings; no browsing data.
  - `privacy` — applies the documented hardened settings to the private
    session only (`incognito_session_only` scope); never changes normal
    browsing; never disables security protections; used only when the user
    opens a hardened window.
- [ ] Host permission justification: none requested.
- [ ] Remote code justification: none; all code is bundled; strict CSP.
- [ ] Data privacy disclosures: collects nothing; sells nothing; no use beyond
      single purpose.
- [ ] Screenshots updated to show the popup, a hardened private window, and the
      advanced settings.
- [ ] Upload `dist/chromium.zip`.

## Post-submission

- [ ] Tag pushed; release notes drafted from `CHANGELOG.md`.
- [ ] Update the parent CodeCraftedApps site if the public site changed.
