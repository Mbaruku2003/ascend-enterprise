import {
  beforeEach,
  afterEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import { ThemeStorage } from "../ThemeStorage";
import { DEFAULT_THEME } from "../defaults";
import { STORAGE_KEYS } from "../constants";
import type { ThemeState } from "../types";

describe("ThemeStorage", () => {
  const mockTheme: ThemeState = {
    mode: "dark",
    accent: "blue",
    accessibility: {
      reducedMotion: true,
      highContrast: false,
    },
  };

  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe("load()", () => {
    it("returns DEFAULT_THEME when storage is empty", () => {
      expect(ThemeStorage.load()).toEqual(DEFAULT_THEME);
    });

    it("loads a persisted theme", () => {
      localStorage.setItem(
        STORAGE_KEYS.theme,
        mockTheme.mode,
      );

      localStorage.setItem(
        STORAGE_KEYS.accent,
        mockTheme.accent,
      );

      localStorage.setItem(
        STORAGE_KEYS.reducedMotion,
        "true",
      );

      localStorage.setItem(
        STORAGE_KEYS.highContrast,
        "false",
      );

      expect(ThemeStorage.load()).toEqual(mockTheme);
    });

    it("falls back to the default mode when invalid", () => {
      localStorage.setItem(
        STORAGE_KEYS.theme,
        "invalid-theme",
      );

      const theme = ThemeStorage.load();

      expect(theme.mode).toBe(DEFAULT_THEME.mode);
    });

    it("falls back to the default accent when invalid", () => {
      localStorage.setItem(
        STORAGE_KEYS.accent,
        "pink-neon",
      );

      const theme = ThemeStorage.load();

      expect(theme.accent).toBe(DEFAULT_THEME.accent);
    });

    it("defaults accessibility flags when missing", () => {
      const theme = ThemeStorage.load();

      expect(theme.accessibility).toEqual({
        reducedMotion: false,
        highContrast: false,
      });
    });

    it("loads accessibility flags", () => {
      localStorage.setItem(
        STORAGE_KEYS.reducedMotion,
        "true",
      );

      localStorage.setItem(
        STORAGE_KEYS.highContrast,
        "true",
      );

      const theme = ThemeStorage.load();

      expect(theme.accessibility).toEqual({
        reducedMotion: true,
        highContrast: true,
      });
    });

    it("does not throw when localStorage throws", () => {
      vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
        throw new Error("Storage failed");
      });

      expect(() => ThemeStorage.load()).not.toThrow();

      expect(ThemeStorage.load()).toEqual(DEFAULT_THEME);
    });

    it("returns defaults during SSR", () => {
      const originalWindow = globalThis.window;

      // @ts-expect-error
      vi.stubGlobal("window", undefined);

      expect(ThemeStorage.load()).toEqual(DEFAULT_THEME);

      vi.stubGlobal("window", originalWindow);
    });
  });
});


describe("save()", () => {
  it("persists every theme property", () => {
    ThemeStorage.save(mockTheme);

    expect(localStorage.getItem(STORAGE_KEYS.theme)).toBe("dark");

    expect(localStorage.getItem(STORAGE_KEYS.accent)).toBe("blue");

    expect(
      localStorage.getItem(STORAGE_KEYS.reducedMotion),
    ).toBe("true");

    expect(
      localStorage.getItem(STORAGE_KEYS.highContrast),
    ).toBe("false");
  });

  it("overwrites previously stored values", () => {
    ThemeStorage.save(mockTheme);

    const updatedTheme: ThemeState = {
      mode: "light",
      accent: "green",
      accessibility: {
        reducedMotion: false,
        highContrast: true,
      },
    };

    ThemeStorage.save(updatedTheme);

    expect(localStorage.getItem(STORAGE_KEYS.theme)).toBe("light");

    expect(localStorage.getItem(STORAGE_KEYS.accent)).toBe("green");

    expect(
      localStorage.getItem(STORAGE_KEYS.reducedMotion),
    ).toBe("false");

    expect(
      localStorage.getItem(STORAGE_KEYS.highContrast),
    ).toBe("true");
  });

  it("does not throw when storage is unavailable", () => {
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("Storage unavailable");
    });

    expect(() => ThemeStorage.save(mockTheme)).not.toThrow();
  });

  it("does nothing during SSR", () => {
    const originalWindow = globalThis.window;

    // @ts-expect-error
    vi.stubGlobal("window", undefined);

    expect(() => ThemeStorage.save(mockTheme)).not.toThrow();

    vi.stubGlobal("window", originalWindow);
  });
});

describe("reset()", () => {
  it("clears all persisted theme values", () => {
    ThemeStorage.save(mockTheme);

    const theme = ThemeStorage.reset();

    expect(theme).toEqual(DEFAULT_THEME);

    expect(localStorage.getItem(STORAGE_KEYS.theme)).toBeNull();

    expect(localStorage.getItem(STORAGE_KEYS.accent)).toBeNull();

    expect(
      localStorage.getItem(STORAGE_KEYS.reducedMotion),
    ).toBeNull();

    expect(
      localStorage.getItem(STORAGE_KEYS.highContrast),
    ).toBeNull();
  });

  it("returns DEFAULT_THEME", () => {
    expect(ThemeStorage.reset()).toEqual(DEFAULT_THEME);
  });

  it("does not throw when removeItem fails", () => {
    vi.spyOn(Storage.prototype, "removeItem").mockImplementation(() => {
      throw new Error("Remove failed");
    });

    expect(() => ThemeStorage.reset()).not.toThrow();

    expect(ThemeStorage.reset()).toEqual(DEFAULT_THEME);
  });

  it("does not throw during SSR", () => {
    const originalWindow = globalThis.window;

    // @ts-expect-error
    vi.stubGlobal("window", undefined);

    expect(() => ThemeStorage.reset()).not.toThrow();

    expect(ThemeStorage.reset()).toEqual(DEFAULT_THEME);

    vi.stubGlobal("window", originalWindow);
  });

  it("can be called multiple times", () => {
    ThemeStorage.save(mockTheme);

    ThemeStorage.reset();
    ThemeStorage.reset();
    ThemeStorage.reset();

    expect(localStorage.getItem(STORAGE_KEYS.theme)).toBeNull();

    expect(localStorage.getItem(STORAGE_KEYS.accent)).toBeNull();
  });
});
