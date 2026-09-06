// Stub for pygbag 0.9.3 pythons.js dynamic import
// pythons.js does `await import("../vt.js")` but the real module
// is bundled inline. This stub satisfies the dynamic import so the
// Promise resolves (no unhandled rejection).
export default {};
export const evt = {};