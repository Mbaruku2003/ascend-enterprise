/**
 * Ascend Enterprise UI
 * --------------------
 * Providers
 *
 * Public exports for the UI provider infrastructure.
 *
 * Consumers should import providers from this module rather than
 * individual files whenever possible.
 */

/* -------------------------------------------------------------------------- */
/* Provider Components                                                        */
/* -------------------------------------------------------------------------- */

export { UIProvider } from "./UIProvider";

/* -------------------------------------------------------------------------- */
/* Context Hooks                                                              */
/* -------------------------------------------------------------------------- */

export { useUIContext } from "./UIContext";

/* -------------------------------------------------------------------------- */
/* Context Utilities                                                          */
/* -------------------------------------------------------------------------- */

export { createContext } from "./createContext";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export { DEFAULT_UI_CONFIG } from "./defaults";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type {
  Density,
  Direction,
  UIConfig,
  UIContextValue,
  UIProviderProps,
} from "./UIProvider.types";
