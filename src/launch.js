// Go Private Quickly — open a private window
//
// The one thing the toolbar click does. Kept in its own module so the unit
// tests can drive it with a mocked `chrome` without loading the service
// worker's event listeners.
//
// Try the window first: if the browser opens it, the user is done. Only when
// the browser refuses does the caller send them to onboarding, so nobody is
// walked through a setup step their browser didn't need.

export async function openPrivateWindow() {
  try {
    const win = await chrome.windows.create({ incognito: true });
    return { ok: true, windowId: win ? win.id : null };
  } catch {
    return { ok: false };
  }
}
