import test from "node:test";
import assert from "node:assert/strict";

test("server entrypoint loads without throwing", async () => {
    const module = await import("../src/server.js");
    assert.ok(module);
});
