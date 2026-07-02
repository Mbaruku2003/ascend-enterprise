import { describe, expect, it } from "vitest";

import { ThemeStorage } from "./ThemeStorage";

describe("ThemeStorage", () => {
  it("loads a valid theme", () => {
    const theme = ThemeStorage.load();

    expect(theme).toBeDefined();

    expect(theme.mode).toBeDefined();
  });

  it("can reset defaults", () => {
    const defaults = ThemeStorage.reset();

    expect(defaults.mode).toBe("system");
  });
});
