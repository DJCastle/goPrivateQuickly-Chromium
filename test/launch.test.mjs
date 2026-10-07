// Automated tests for the toolbar-click path (launch.js).
//
//   node --test
//
// Zero dependencies. Mocks the one chrome.* call openPrivateWindow makes.

import { test } from "node:test";
import assert from "node:assert/strict";

import { openPrivateWindow } from "../src/launch.js";

function mockChrome({ createThrows = false } = {}) {
  const calls = [];
  globalThis.chrome = {
    windows: {
      async create(arg) {
        calls.push(arg);
        if (createThrows) throw new Error("Incognito mode is not allowed");
        return { id: 7 };
      },
    },
  };
  return calls;
}

test("opens exactly one incognito window and reports it", async () => {
  const calls = mockChrome();
  const result = await openPrivateWindow();
  assert.deepEqual(calls, [{ incognito: true }]);
  assert.deepEqual(result, { ok: true, windowId: 7 });
});

test("a refused window reports failure instead of throwing", async () => {
  mockChrome({ createThrows: true });
  const result = await openPrivateWindow();
  assert.deepEqual(result, { ok: false });
});
