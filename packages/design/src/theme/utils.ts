/**
 * Theme Utilities
 */

import {
  STORAGE_KEYS,
  SUPPORTED_ACCENTS,
  SUPPORTED_THEMES,
} from "./constants";

import type {
  AccentColor,
  ThemeMode,
} from "./types";

export function isBrowser() {

  return typeof window !== "undefined";

}

export function getSystemTheme(): "light" | "dark" {

  if (!isBrowser()) {

    return "light";

  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

}

export function resolveTheme(

  mode: ThemeMode

): "light" | "dark" {

  if (mode === "system") {

    return getSystemTheme();

  }

  return mode;

}

export function isValidTheme(

  value: unknown

): value is ThemeMode {

  return SUPPORTED_THEMES.includes(value as ThemeMode);

}

export function isValidAccent(

  value: unknown

): value is AccentColor {

  return SUPPORTED_ACCENTS.includes(value as AccentColor);

}

export function applyThemeClass(

  theme: "light" | "dark"

) {

  if (!isBrowser()) return;

  const root = document.documentElement;

  root.classList.remove("light", "dark");

  root.classList.add(theme);

}

export function applyAccent(

  accent: AccentColor

) {

  if (!isBrowser()) return;

  document.documentElement.dataset.accent = accent;

}

export function safeStorageSet(

  key: string,

  value: string

) {

  if (!isBrowser()) return;

  try {

    localStorage.setItem(key, value);

  } catch {}

}

export function safeStorageGet(

  key: string

) {

  if (!isBrowser()) return null;

  try {

    return localStorage.getItem(key);

  } catch {

    return null;

  }

}

export function clearThemeStorage() {

  if (!isBrowser()) return;

  Object.values(STORAGE_KEYS).forEach(localStorage.removeItem);

}
