// Go Private Quickly — background script
//
// Responsibilities:
//   - Toolbar click opens a new private window.
//   - Toolbar icon reflects whether the currently focused window is private
//     (muted silver mask when private, colorful otherwise).
//   - On first install, open the onboarding page once.
//
// The toolbar click opens a private window directly — there is no popup. The
// click runs here in the service worker rather than in a popup, so nothing can
// be cut short by a popup closing as the new window takes focus.
//
// If the browser refuses to open the window, the click opens onboarding (which
// walks the user through allowing GPQ in private windows) rather than failing
// silently.
//
// Notes:
//   - Chromium MV3 idles the service worker — never cache state in module
//     scope. Every event handler re-derives state from the browser.

import { openPrivateWindow } from "./launch.js";

// Ships a single icon style ("venetian-mask"). To add more styles
// later, drop additional <style>/ folders under src/icons/.
const ICON_STYLE = "venetian-mask";

const INACTIVE_ICONS = {
  16: `icons/${ICON_STYLE}/icon-16.png`,
  32: `icons/${ICON_STYLE}/icon-32.png`,
  48: `icons/${ICON_STYLE}/icon-48.png`,
  128: `icons/${ICON_STYLE}/icon-128.png`,
};

const ACTIVE_ICONS = {
  16: `icons/${ICON_STYLE}/icon-active-16.png`,
  32: `icons/${ICON_STYLE}/icon-active-32.png`,
  48: `icons/${ICON_STYLE}/icon-active-48.png`,
  128: `icons/${ICON_STYLE}/icon-active-128.png`,
};

async function refreshIconForFocusedWindow() {
  try {
    const windows = await chrome.windows.getAll();
    const focused = windows.find((w) => w.focused);
    const isPrivate = Boolean(focused && focused.incognito);
    await chrome.action.setIcon({
      path: isPrivate ? ACTIVE_ICONS : INACTIVE_ICONS,
    });
  } catch {
    // getAll/setIcon can throw briefly during shutdown or window-close
    // races. Safe to ignore — the next event will resync the icon.
  }
}

chrome.windows.onFocusChanged.addListener(refreshIconForFocusedWindow);
chrome.windows.onCreated.addListener(refreshIconForFocusedWindow);
chrome.windows.onRemoved.addListener(refreshIconForFocusedWindow);

// Run once at worker startup so the icon is correct as soon as the
// extension wakes up (e.g., after a service-worker idle).
refreshIconForFocusedWindow();

// ---- Toolbar click: open a private window ------------------------------

async function openOnboarding() {
  try {
    await chrome.tabs.create({ url: chrome.runtime.getURL("onboarding.html") });
  } catch (err) {
    console.warn("Go Private Quickly: could not open onboarding —", err);
  }
}

chrome.action.onClicked.addListener(async () => {
  const result = await openPrivateWindow();
  if (!result.ok) await openOnboarding();
});

// ---- First-install onboarding ------------------------------------------

const ONBOARDING_SHOWN_KEY = "onboardingShown";

chrome.runtime.onInstalled.addListener(async (details) => {
  if (details.reason !== "install") return;
  try {
    const res = await chrome.storage.local.get({ [ONBOARDING_SHOWN_KEY]: false });
    if (res[ONBOARDING_SHOWN_KEY]) return;
    await chrome.storage.local.set({ [ONBOARDING_SHOWN_KEY]: true });
  } catch {
    // If storage is unavailable, still show onboarding — the worst
    // case is the user sees it twice on a future reinstall.
  }
  await openOnboarding();
});
