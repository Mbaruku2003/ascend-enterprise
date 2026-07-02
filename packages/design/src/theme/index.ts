/**
 * ============================================================================
 * Ascend Enterprise v2.0
 * Design System
 * Theme Package Public API
 * ============================================================================
 *
 * This file is the single public entry point for the theme subsystem.
 *
 * Consumers should import from:
 *
 *   @ascend/design/theme
 *
 * rather than importing individual implementation files.
 *
 * This keeps the internal architecture private and allows the
 * implementation to evolve without breaking consumers.
 * ============================================================================
 */

// -----------------------------------------------------------------------------
// React
// -----------------------------------------------------------------------------

export { ThemeProvider } from "./ThemeProvider";
export type { ThemeProviderProps } from "./ThemeProvider";

export { ThemeContext } from "./ThemeContext";
export type { ThemeContextValue } from "./ThemeContext";

export { useTheme } from "./hooks/useTheme";

// -----------------------------------------------------------------------------
// Theme
// -----------------------------------------------------------------------------

export { ThemeManager } from "./ThemeManager";
export { ThemeStorage } from "./ThemeStorage";

export { ThemeScript } from "./ThemeScript";

// -----------------------------------------------------------------------------
// Events
// -----------------------------------------------------------------------------

export { ThemeEventBus, themeEvents } from "./events";

export type {
  ThemeEvents,
  ThemeEventName,
  ThemeEventHandler,
} from "./events";

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

export type {
  ThemeState,
  ThemeMode,
  AccentColor,
  AccessibilityPreferences,
} from "./types";

// -----------------------------------------------------------------------------
// Constants
// -----------------------------------------------------------------------------

export {
  DEFAULT_THEME,
} from "./defaults";

export {
  STORAGE_KEYS,
  SUPPORTED_THEMES,
  SUPPORTED_ACCENTS,
} from "./constants";

// -----------------------------------------------------------------------------
// Utilities
// -----------------------------------------------------------------------------

export {
  resolveTheme,
} from "./utils";
