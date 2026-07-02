/**
 * Ascend Enterprise Design System
 * Theme Types
 */

export type ThemeMode =
  | "light"
  | "dark"
  | "system";

export type ResolvedTheme =
    | "light"
    | "dark";

export type AccentColor =
  | "indigo"
  | "purple"
  | "cyan";

export interface AccessibilityPreferences {
  reducedMotion: boolean;
  highContrast: boolean;
}

export interface ThemeState {
  mode: ThemeMode;
  accent: AccentColor;
  accessibility: AccessibilityPreferences;
}
