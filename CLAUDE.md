# goPrivateQuickly-Chromium — Claude Instructions

## Stack & purpose

Standalone **Chromium** build of Go Private Quickly (GPQ): one-click
private/incognito windows with an optional Hardened Private Mode. Manifest V3,
vanilla JS only — no bundler, no framework, no TypeScript. The Firefox build is
a separate repo (`goPrivateQuickly-Firefox`); the public website lives in
`codeCraftedApps` at `codecraftedapps.com/extensions/`.

- **Repo:** `DJCastle/goPrivateQuickly-Chromium` (public)
- **Local path:** `~/Developer/Projects/goPrivateQuickly-Chromium/`
- **Targets:** Chromium 109+ (Chrome, Brave, Edge, Arc, Vivaldi). One
  Chrome Web Store listing serves them all. (Opera is not advertised as of
  2026-06-29 — Opera is Chromium-based so its users can still install from the
  Chrome Web Store, but Opera is omitted from all listings, README, and site
  copy. Don't reintroduce it to the browser lists.)
- **Distribution:** Chrome Web Store.
- **History:** split out of the `DJCastle/browserExtensions` monorepo on
  2026-06-07. One-repo-per-base-browser is the standard for independent extensions; shared-engine products use a per-product monorepo (workspace decision, amended 2026-07-11).

## Layout (flat, single-browser)

```text
manifest.json          the manifest (no base/overlay split anymore)
src/                   all source (Chromium adapter only)
build.mjs              zero-dep Node build → dist/chromium/ (+ dist/chromium.zip with --zip)
test/                  node --test unit tests
tools/                 icon generator + sources
store-assets/chrome-web-store/
docs/                  reviewer/dev docs (build, permissions, testing, submission)
README.md PRIVACY.md TERMS.md CHANGELOG.md LICENSE
```

`dist/` is build output — gitignored. Internal docs (`CLAUDE.md`,
`CLAUDE-LOG.md`, `HANDOFF.md`, `ROADMAP.md`) are local-only via
`.git/info/exclude`.

## Commit & history hygiene

- **No `Co-Authored-By: Claude` trailer.** Public repo — keep commits clean and
  professional (non-advertisement, not a denial of AI use). The published
  policy is at codecraftedapps.com/ai-policy.html.
- Per-release git tags `gpq-vX.Y.Z`. Bump version in `manifest.json` + update
  `CHANGELOG.md` in the same commit.
- Standard git hygiene: never force-push main, never amend pushed commits, one
  logical change per commit.

## Hard rules — never violate

1. **No analytics, telemetry, error reporting, or crash reporting.** Ever.
2. **No remote code loading or execution.** All code ships in the package.
3. **No host permissions, no `tabs`, no `activeTab`** unless genuinely needed.
   Current permissions: `["storage", "privacy"]` only.
4. **No `eval()`, no `new Function()`, no inline event handlers.**
5. **No content scripts** — GPQ needs no DOM access on real pages.
6. **No bundler, no TypeScript, no framework.** Vanilla JS, single source tree.
7. **No dependencies in `build.mjs`.** Node built-ins only.

## Conventions

- `manifest.json` is the single source of truth (no more base+overlay merge).
- `chrome.*` namespace throughout; each source file under ~150 lines.
- No state in service-worker module scope (MV3 idles the worker) — re-read from
  `chrome.storage` on every event.
- Don't add `web_accessible_resources` unless a feature truly needs it.

## Known issues / don't reintroduce

- **MV3 service worker idles** — never cache state in worker module scope.
- **`onStartup` does NOT fire on "Continue where you left off"** when an
  instance is already running — only on cold profile launch.
- **Default-disabled in incognito.** Users enable per-extension in
  `chrome://extensions`; onboard via `chrome.extension.isAllowedIncognitoAccess()`.
- **`chrome.storage.sync` quota** (~100KB/8KB per item) — settings are tiny,
  but fall back to `chrome.storage.local` on quota error.

## Cross-repo sync

Part of the CodeCraftedApps ecosystem. If the public site or repo URLs change,
the "View source" links live in `codeCraftedApps/extensions/go-private-quickly/`
(`chrome.html`, `firefox.html`).

## Documentation maintenance

When a gotcha surfaces, add it to **Known issues** the same session. Keep this
file under 150 lines; `CLAUDE-LOG.md` holds time-bound decisions.
