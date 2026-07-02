import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";

import { ThemeManager } from "../ThemeManager";
import { DEFAULT_THEME } from "../defaults";
import type { ThemeState } from "../types";
import type { ThemeStorageAdapter } from "../storage/ThemeStorageAdapter";

describe("ThemeManager", () => {
  let storage: ThemeStorageAdapter;
  let manager: ThemeManager;

  const mockTheme: ThemeState = {
    mode: "dark",
    accent: "blue",
    accessibility: {
      reducedMotion: false,
      highContrast: false,
    },
  };

  beforeEach(() => {
    storage = {
      load: vi.fn(),
      save: vi.fn(),
      reset: vi.fn(),
    };

    manager = new ThemeManager(storage);

    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("load()", () => {
    it("loads the persisted theme", () => {
      vi.mocked(storage.load).mockReturnValue(mockTheme);

      expect(manager.load()).toEqual(mockTheme);

      expect(storage.load).toHaveBeenCalledTimes(1);
    });

    it("returns DEFAULT_THEME when storage throws", () => {
      vi.mocked(storage.load).mockImplementation(() => {
        throw new Error("Storage failure");
      });

      const warn = vi
        .spyOn(console, "warn")
        .mockImplementation(() => {});

      expect(manager.load()).toEqual(DEFAULT_THEME);

      expect(warn).toHaveBeenCalledOnce();

      expect(storage.load).toHaveBeenCalledTimes(1);
    });

    it("returns a fresh theme from storage every call", () => {
      vi.mocked(storage.load).mockReturnValue(mockTheme);

      manager.load();
      manager.load();
      manager.load();

      expect(storage.load).toHaveBeenCalledTimes(3);
    });

    it("does not mutate the loaded theme", () => {
      vi.mocked(storage.load).mockReturnValue(mockTheme);

      const theme = manager.load();

      expect(theme).toEqual(mockTheme);
      expect(theme).toBe(mockTheme);
    });
  });

  describe("save()", () => {
    it("persists the theme", () => {
      manager.save(mockTheme);

      expect(storage.save).toHaveBeenCalledTimes(1);

      expect(storage.save).toHaveBeenCalledWith(mockTheme);
    });

    it("swallows storage errors", () => {
      vi.mocked(storage.save).mockImplementation(() => {
        throw new Error("Save failed");
      });

      const warn = vi
        .spyOn(console, "warn")
        .mockImplementation(() => {});

      expect(() => manager.save(mockTheme)).not.toThrow();

      expect(warn).toHaveBeenCalledOnce();

      expect(storage.save).toHaveBeenCalledWith(mockTheme);
    });

    it("allows multiple saves", () => {
      manager.save(mockTheme);
      manager.save(mockTheme);
      manager.save(mockTheme);

      expect(storage.save).toHaveBeenCalledTimes(3);
    });

    it("passes the exact ThemeState instance to storage", () => {
      manager.save(mockTheme);

      expect(storage.save).toHaveBeenLastCalledWith(mockTheme);
    });
  });
});

  describe("apply()", () => {
    beforeEach(() => {
      document.documentElement.className = "";
      document.documentElement.removeAttribute("data-accent");
      document.documentElement.removeAttribute("data-reduced-motion");
      document.documentElement.removeAttribute("data-high-contrast");
    });

    it("applies a light theme", () => {
      const theme: ThemeState = {
        ...mockTheme,
        mode: "light",
      };

      manager.apply(theme);

      const root = document.documentElement;

      expect(root.classList.contains("light")).toBe(true);
      expect(root.classList.contains("dark")).toBe(false);
    });

    it("applies a dark theme", () => {
      manager.apply(mockTheme);

      const root = document.documentElement;

      expect(root.classList.contains("dark")).toBe(true);
      expect(root.classList.contains("light")).toBe(false);
    });

    it("applies the accent color", () => {
      manager.apply(mockTheme);

      expect(document.documentElement.dataset.accent).toBe("blue");
    });

    it("enables accessibility attributes", () => {
      const theme: ThemeState = {
        ...mockTheme,
        accessibility: {
          reducedMotion: true,
          highContrast: true,
        },
      };

      manager.apply(theme);

      const root = document.documentElement;

      expect(root.hasAttribute("data-reduced-motion")).toBe(true);
      expect(root.hasAttribute("data-high-contrast")).toBe(true);
    });

    it("removes accessibility attributes when disabled", () => {
      const theme: ThemeState = {
        ...mockTheme,
        accessibility: {
          reducedMotion: false,
          highContrast: false,
        },
      };

      manager.apply(theme);

      const root = document.documentElement;

      expect(root.hasAttribute("data-reduced-motion")).toBe(false);
      expect(root.hasAttribute("data-high-contrast")).toBe(false);
    });

    it("replaces the previous theme class", () => {
      const root = document.documentElement;

      root.classList.add("light");

      manager.apply(mockTheme);

      expect(root.classList.contains("light")).toBe(false);
      expect(root.classList.contains("dark")).toBe(true);
    });

    it("does not throw when document is unavailable", () => {
      const originalDocument = globalThis.document;

      // Simulate SSR
      vi.stubGlobal("document", undefined);

      expect(() => manager.apply(mockTheme)).not.toThrow();

      vi.stubGlobal("document", originalDocument);
    });

    it("logs DOM errors without throwing", () => {
      const warn = vi
        .spyOn(console, "warn")
        .mockImplementation(() => {});

      const original = document.documentElement.classList.add;

      document.documentElement.classList.add = vi.fn(() => {
        throw new Error("DOM failure");
      });

      expect(() => manager.apply(mockTheme)).not.toThrow();

      expect(warn).toHaveBeenCalledOnce();

      document.documentElement.classList.add = original;
    });
  });

  describe("initialize()", () => {
    it("loads the persisted theme", () => {
      vi.mocked(storage.load).mockReturnValue(mockTheme);

      const applySpy = vi.spyOn(manager, "apply");

      const theme = manager.initialize();

      expect(theme).toEqual(mockTheme);

      expect(storage.load).toHaveBeenCalledOnce();

      expect(applySpy).toHaveBeenCalledWith(mockTheme);
    });

    it("returns DEFAULT_THEME when storage fails", () => {
      vi.mocked(storage.load).mockImplementation(() => {
        throw new Error("Storage failed");
      });

      const applySpy = vi.spyOn(manager, "apply");

      const theme = manager.initialize();

      expect(theme).toEqual(DEFAULT_THEME);

      expect(applySpy).toHaveBeenCalledWith(DEFAULT_THEME);
    });

    it("stores the current theme", () => {
      vi.mocked(storage.load).mockReturnValue(mockTheme);

      manager.initialize();

      expect((manager as any).currentTheme).toEqual(mockTheme);
    });

    it("always applies the loaded theme", () => {
      vi.mocked(storage.load).mockReturnValue(mockTheme);

      const applySpy = vi.spyOn(manager, "apply");

      manager.initialize();

      expect(applySpy).toHaveBeenCalledTimes(1);
    });
  });
describe("update()", () => {
  beforeEach(() => {
    vi.mocked(storage.load).mockReturnValue(mockTheme);
    manager.initialize();
  });

  it("persists the theme", () => {
    const saveSpy = vi.spyOn(manager, "save");

    manager.update(mockTheme);

    expect(saveSpy).toHaveBeenCalledOnce();
    expect(saveSpy).toHaveBeenCalledWith(mockTheme);
  });

  it("applies the theme", () => {
    const applySpy = vi.spyOn(manager, "apply");

    manager.update(mockTheme);

    expect(applySpy).toHaveBeenCalledOnce();
    expect(applySpy).toHaveBeenCalledWith(mockTheme);
  });

  it("emits a theme:changed event", () => {
    const listener = vi.fn();

    manager.events.on("theme:changed", listener);

    const updatedTheme: ThemeState = {
      ...mockTheme,
      accent: "purple",
    };

    manager.update(updatedTheme);

    expect(listener).toHaveBeenCalledTimes(1);

    expect(listener).toHaveBeenCalledWith({
      previous: mockTheme,
      current: updatedTheme,
    });
  });

  it("does not emit theme:changed when the same object instance is reused", () => {
    const listener = vi.fn();

    manager.events.on("theme:changed", listener);

    manager.update(mockTheme);

    expect(listener).not.toHaveBeenCalled();
  });

  it("continues even when save() throws", () => {
    vi.spyOn(manager, "save").mockImplementation(() => {
      throw new Error("save failed");
    });

    expect(() => manager.update(mockTheme)).not.toThrow();
  });

  it("continues even when apply() throws", () => {
    vi.spyOn(manager, "apply").mockImplementation(() => {
      throw new Error("apply failed");
    });

    expect(() => manager.update(mockTheme)).not.toThrow();
  });
});

describe("reset()", () => {
  it("resets the storage", () => {
    vi.mocked(storage.reset).mockReturnValue(DEFAULT_THEME);

    const theme = manager.reset();

    expect(storage.reset).toHaveBeenCalledOnce();

    expect(theme).toEqual(DEFAULT_THEME);
  });

  it("emits a theme:reset event", () => {
    vi.mocked(storage.reset).mockReturnValue(DEFAULT_THEME);

    const listener = vi.fn();

    manager.events.on("theme:reset", listener);

    manager.reset();

    expect(listener).toHaveBeenCalledOnce();

    expect(listener).toHaveBeenCalledWith({
      theme: DEFAULT_THEME,
    });
  });

  it("returns DEFAULT_THEME when reset throws", () => {
    vi.mocked(storage.reset).mockImplementation(() => {
      throw new Error("reset failed");
    });

    const warn = vi
      .spyOn(console, "warn")
      .mockImplementation(() => {});

    expect(manager.reset()).toEqual(DEFAULT_THEME);

    expect(warn).toHaveBeenCalledOnce();
  });

  it("allows multiple resets", () => {
    vi.mocked(storage.reset).mockReturnValue(DEFAULT_THEME);

    manager.reset();
    manager.reset();
    manager.reset();

    expect(storage.reset).toHaveBeenCalledTimes(3);
  });

  it("updates correctly after a reset", () => {
    vi.mocked(storage.reset).mockReturnValue(DEFAULT_THEME);

    manager.reset();

    const listener = vi.fn();

    manager.events.on("theme:changed", listener);

    const nextTheme: ThemeState = {
      ...DEFAULT_THEME,
      mode: "dark",
    };

    manager.update(nextTheme);

    expect(listener).toHaveBeenCalledOnce();
  });
});

describe("subscribeToSystemTheme()", () => {
  const originalMatchMedia = window.matchMedia;

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  it("subscribes to system theme changes", () => {
    const addEventListener = vi.fn();
    const removeEventListener = vi.fn();

    window.matchMedia = vi.fn().mockReturnValue({
      matches: false,
      media: "(prefers-color-scheme: dark)",
      onchange: null,
      addEventListener,
      removeEventListener,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });

    const callback = vi.fn();

    manager.subscribeToSystemTheme(callback);

    expect(window.matchMedia).toHaveBeenCalledWith(
      "(prefers-color-scheme: dark)",
    );

    expect(addEventListener).toHaveBeenCalledTimes(1);
    expect(addEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function),
    );
  });

  it("returns an unsubscribe function", () => {
    const addEventListener = vi.fn();
    const removeEventListener = vi.fn();

    window.matchMedia = vi.fn().mockReturnValue({
      matches: false,
      media: "(prefers-color-scheme: dark)",
      onchange: null,
      addEventListener,
      removeEventListener,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });

    const unsubscribe = manager.subscribeToSystemTheme(vi.fn());

    unsubscribe();

    expect(removeEventListener).toHaveBeenCalledTimes(1);

    expect(removeEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function),
    );
  });

  it("invokes the callback when the media query changes", () => {
    let listener: (() => void) | undefined;

    window.matchMedia = vi.fn().mockReturnValue({
      matches: false,
      media: "(prefers-color-scheme: dark)",
      onchange: null,
      addEventListener: (_: string, fn: () => void) => {
        listener = fn;
      },
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });

    const callback = vi.fn();

    manager.subscribeToSystemTheme(callback);

    listener?.();

    expect(callback).toHaveBeenCalledOnce();
  });

  it("does not throw when matchMedia is unavailable", () => {
    // @ts-expect-error test environment
    window.matchMedia = undefined;

    expect(() =>
      manager.subscribeToSystemTheme(vi.fn()),
    ).not.toThrow();
  });

  it("returns a no-op unsubscribe when matchMedia is unavailable", () => {
    // @ts-expect-error test environment
    window.matchMedia = undefined;

    const unsubscribe = manager.subscribeToSystemTheme(vi.fn());

    expect(() => unsubscribe()).not.toThrow();
  });

  it("returns a no-op unsubscribe when addEventListener throws", () => {
    window.matchMedia = vi.fn().mockReturnValue({
      matches: false,
      media: "(prefers-color-scheme: dark)",
      onchange: null,
      addEventListener: () => {
        throw new Error("matchMedia failed");
      },
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });

    const warn = vi
      .spyOn(console, "warn")
      .mockImplementation(() => {});

    const unsubscribe = manager.subscribeToSystemTheme(
      vi.fn(),
    );

    expect(warn).toHaveBeenCalledOnce();

    expect(() => unsubscribe()).not.toThrow();
  });
});

describe("cleanup", () => {
  it("supports multiple subscriptions", () => {
    const addEventListener = vi.fn();
    const removeEventListener = vi.fn();

    window.matchMedia = vi.fn().mockReturnValue({
      matches: false,
      media: "(prefers-color-scheme: dark)",
      onchange: null,
      addEventListener,
      removeEventListener,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });

    const unsub1 = manager.subscribeToSystemTheme(vi.fn());
    const unsub2 = manager.subscribeToSystemTheme(vi.fn());

    unsub1();
    unsub2();

    expect(removeEventListener).toHaveBeenCalledTimes(2);
  });

  it("does not leak listeners after unsubscribe", () => {
    const addEventListener = vi.fn();
    const removeEventListener = vi.fn();

    window.matchMedia = vi.fn().mockReturnValue({
      matches: false,
      media: "(prefers-color-scheme: dark)",
      onchange: null,
      addEventListener,
      removeEventListener,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });

    const unsubscribe = manager.subscribeToSystemTheme(
      vi.fn(),
    );

    unsubscribe();

    expect(removeEventListener).toHaveBeenCalledOnce();
  });
});
