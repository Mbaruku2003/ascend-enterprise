import {
  createContext,
  useContext,
} from "react";

import type {
  AccentColor,
  ThemeMode,
  ThemeState,
} from "./types";

export interface ThemeContextValue {
  /**
   * Current theme state.
   */
  readonly theme: ThemeState;

  /**
   * Resolved theme after considering "system".
   */
  readonly resolvedTheme: "light" | "dark";

  /**
   * Change theme mode.
   */
  setThemeMode(
    mode: ThemeMode,
  ): void;

  /**
   * Change accent.
   */
  setAccent(
    accent: AccentColor,
  ): void;

  /**
   * Accessibility preferences.
   */
  updateAccessibility(
    preferences: Partial<
      ThemeState["accessibility"]
    >,
  ): void;

  /**
   * Reset everything.
   */
  resetTheme(): void;
}

export const ThemeContext =
  createContext<
    ThemeContextValue | undefined
  >(undefined);

export function useThemeContext(): ThemeContextValue {
  const context =
    useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useThemeContext must be used within ThemeProvider",
    );
  }

  return context;
}
