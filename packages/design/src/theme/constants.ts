/**
 * Theme Constants
 */

import type { AccentColor, ThemeMode } from "./types";

export const STORAGE_KEYS = {

  theme: "ascend-theme",

  accent: "ascend-accent",

  reducedMotion: "ascend-reduced-motion",

  highContrast: "ascend-high-contrast",

} as const;

export const SUPPORTED_THEMES: readonly ThemeMode[] = [

  "light",

  "dark",

  "system",

];

export const SUPPORTED_ACCENTS: readonly AccentColor[] = [

  "indigo",

  "purple",

  "cyan",

];
