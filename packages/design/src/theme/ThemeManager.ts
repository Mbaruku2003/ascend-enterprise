import { resolveTheme } from "./utils";
import { DEFAULT_THEME } from "./defaults";
import type { ThemeState } from "./types";
import type { ThemeStorageAdapter } from "./storage/ThemeStorageAdapter";

export class ThemeManager {
  constructor(private readonly storage: ThemeStorageAdapter) {}

  load(): ThemeState {
    try {
      return this.storage.load();
    } catch (error) {
      console.warn(
        "[ThemeManager] Failed to load theme from storage, falling back to defaults.",
        error,
      );
      return DEFAULT_THEME;
    }
  }

  save(theme: ThemeState): void {
    try {
      this.storage.save(theme);
    } catch (error) {
      console.warn("[ThemeManager] Failed to save theme to storage.", error);
    }
  }

  reset(): ThemeState {
    try {
      return this.storage.reset();
    } catch (error) {
      console.warn(
        "[ThemeManager] Failed to reset theme storage, falling back to defaults.",
        error,
      );
      return DEFAULT_THEME;
    }
  }

  apply(theme: ThemeState): void {
    if (typeof document === "undefined") {
      return;
    }

    try {
      const resolved = resolveTheme(theme.mode);
      const root = document.documentElement;

      root.classList.remove("light", "dark");
      root.classList.add(resolved);

      root.dataset.accent = theme.accent;

      root.toggleAttribute(
        "data-reduced-motion",
        theme.accessibility.reducedMotion,
      );

      root.toggleAttribute(
        "data-high-contrast",
        theme.accessibility.highContrast,
      );
    } catch (error) {
      console.warn("[ThemeManager] Failed to apply theme to the document.", error);
    }
  }

  initialize(): ThemeState {
    const theme = this.load();
    this.apply(theme);
    return theme;
  }

  update(theme: ThemeState): void {
    this.save(theme);
    this.apply(theme);
  }

  subscribeToSystemTheme(callback: () => void): () => void {
    if (typeof window === "undefined" || !window.matchMedia) {
      return () => {};
    }

    try {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const listener = () => callback();

      media.addEventListener("change", listener);

      return () => {
        media.removeEventListener("change", listener);
      };
    } catch (error) {
      console.warn(
        "[ThemeManager] Failed to subscribe to system theme changes.",
        error,
      );
      return () => {};
    }
  }
}
