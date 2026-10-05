// Automated tests for hardened-session orchestration (sessionManager.js).
//
//   node --test
//
// Zero dependencies. Mocks the few chrome.* calls openHardenedSession makes, to
// pin down the order that matters: access is checked before any window opens.

import { test } from "node:test";
import assert from "node:assert/strict";

import { openHardenedSession } from "../src/shared/sessionManager.js";

function mockChrome({ allowed, createThrows = false }) {
  const calls = { create: [], set: [] };
  globalThis.chrome = {
    extension: {
      async isAllowedIncognitoAccess() {
        return allowed;
      },
    },
    windows: {
      async create(arg) {
        if (createThrows) throw new Error("no window");
        calls.create.push(arg);
        return { id: 42 };
      },
    },
    privacy: {
      network: {
        networkPredictionEnabled: {
          async get() {
            return { value: true, levelOfControl: "controllable_by_this_extension" };
          },
          async set(arg) {
            calls.set.push(arg);
          },
        },
      },
    },
  };
  return calls;
}

const ONE_ENTRY = [
  {
    id: "networkPrediction",
    path: ["network", "networkPredictionEnabled"],
    applyValue: false,
    met: (v) => v === false,
  },
];

test("without private-mode access, no window opens and nothing is set", async () => {
  const calls = mockChrome({ allowed: false });
  const result = await openHardenedSession(ONE_ENTRY);
  assert.deepEqual(result, { ok: false, reason: "not-allowed", windowId: null });
  assert.equal(calls.create.length, 0);
  assert.equal(calls.set.length, 0);
});

test("with access, opens an unfocused private window and applies session-only", async () => {
  const calls = mockChrome({ allowed: true });
  const result = await openHardenedSession(ONE_ENTRY);
  assert.deepEqual(result, { ok: true, windowId: 42 });
  assert.deepEqual(calls.create, [{ incognito: true, focused: false }]);
  assert.deepEqual(calls.set, [{ value: false, scope: "incognito_session_only" }]);
});

test("a failed window create reports window-failed and sets nothing", async () => {
  const calls = mockChrome({ allowed: true, createThrows: true });
  const result = await openHardenedSession(ONE_ENTRY);
  assert.deepEqual(result, { ok: false, reason: "window-failed", windowId: null });
  assert.equal(calls.set.length, 0);
});
