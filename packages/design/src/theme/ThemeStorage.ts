/**
 * Ascend Enterprise
 * Theme Storage
 *
 * Responsible for:
 * - Reading theme preferences
 * - Writing theme preferences
 * - Validation
 * - Safe browser access
 * - Resetting preferences
 */

import { STORAGE_KEYS } from "./constants";
import { DEFAULT_THEME } from "./defaults";

import {
  isBrowser,
  isValidAccent,
  isValidTheme,
  safeStorageGet,
  safeStorageSet,
} from "./utils";

import type {
  AccentColor,
  ThemeMode,
  ThemeState,
} from "./types";

export class ThemeStorage {
  static load(): ThemeState {
    if (!isBrowser()) {
      return DEFAULT_THEME;
    }

    const mode = this.loadMode();

    const accent = this.loadAccent();

    const reducedMotion = this.loadReducedMotion();

    const highContrast = this.loadHighContrast();

    return {
      mode,
      accent,
      accessibility: {
        reducedMotion,
        highContrast,
      },
    };
  }

  static save(theme: ThemeState): void {
    this.saveMode(theme.mode);

    this.saveAccent(theme.accent);

    this.saveReducedMotion(
      theme.accessibility.reducedMotion
    );

    this.saveHighContrast(
      theme.accessibility.highContrast
    );
  }

  static loadMode(): ThemeMode {
    const value = safeStorageGet(STORAGE_KEYS.theme);

    return isValidTheme(value)
      ? value
      : DEFAULT_THEME.mode;
  }

  static saveMode(mode: ThemeMode): void {
    safeStorageSet(STORAGE_KEYS.theme, mode);
  }

  static loadAccent(): AccentColor {
    const value = safeStorageGet(STORAGE_KEYS.accent);

    return isValidAccent(value)
      ? value
      : DEFAULT_THEME.accent;
  }

  static saveAccent(accent: AccentColor): void {
    safeStorageSet(STORAGE_KEYS.accent, accent);
  }

  static loadReducedMotion(): boolean {
    return (
      safeStorageGet(
        STORAGE_KEYS.reducedMotion
      ) === "true"
    );
  }

  static saveReducedMotion(
    enabled: boolean
  ): void {
    safeStorageSet(
      STORAGE_KEYS.reducedMotion,
      String(enabled)
    );
  }

  static loadHighContrast(): boolean {
    return (
      safeStorageGet(
        STORAGE_KEYS.highContrast
      ) === "true"
    );
  }

  static saveHighContrast(
    enabled: boolean
  ): void {
    safeStorageSet(
      STORAGE_KEYS.highContrast,
      String(enabled)
    );
  }

  static clear(): void {
    if (!isBrowser()) return;

    Object.values(STORAGE_KEYS).forEach((key) =>
      localStorage.removeItem(key)
    );
  }

  static reset(): ThemeState {
    this.clear();

    this.save(DEFAULT_THEME);

    return DEFAULT_THEME;
  }
}
