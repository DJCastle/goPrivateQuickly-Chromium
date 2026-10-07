# Store Submission Checklist — Go Private Quickly (Chromium)

Chrome Web Store submission for the Chromium build. Brave, Arc and Vivaldi
install from the Chrome Web Store. Edge users can too, and Edge also has its
own Microsoft Edge Add-ons listing built from the same zip — copy-paste fields
in `store-assets/edge-add-ons/listing.md`.
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
- [ ] Permissions = `["storage"]` only. No `privacy`, no host permissions.
- [ ] **Single purpose**: "Open a private/incognito window from the toolbar."
      Exact paste text in `store-assets/chrome-web-store/listing.md`.
- [ ] Permission justifications filled in:
  - `storage` — a single `onboardingShown` flag so the welcome page opens
    once; no settings, no browsing data.
- [ ] Remove the old `privacy` justification if the dashboard still shows it.
- [ ] Host permission justification: none requested.
- [ ] Remote code justification: none; all code is bundled; strict CSP.
- [ ] Data privacy disclosures: collects nothing; sells nothing; no use beyond
      single purpose.
- [ ] Screenshots show a one-click private window, the toolbar icon in a
      normal and a private window, and the onboarding page (no popup, no
      settings page).
- [ ] Upload `dist/chromium.zip`.

## Microsoft Edge Add-ons

- [ ] Upload the same `dist/chromium.zip` in Partner Center.
- [ ] Single purpose, `storage` justification, description and certification
      notes pasted from `store-assets/edge-add-ons/listing.md`; old `privacy`
      justification removed.

## Post-submission

- [ ] Tag pushed; release notes drafted from `CHANGELOG.md`.
- [ ] Update the parent CodeCraftedApps site if the public site changed.
