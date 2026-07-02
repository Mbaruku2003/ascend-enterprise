/**
 * Ascend Enterprise UI
 * --------------------
 * UI Provider Types
 *
 * Shared types for the UI provider and its context.
 */

import type { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/* Direction                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Text direction.
 */
export type Direction = "ltr" | "rtl";

/* -------------------------------------------------------------------------- */
/* Density                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Global component density.
 *
 * Controls the default spacing and sizing used by components.
 */
export type Density = "comfortable" | "compact";

/* -------------------------------------------------------------------------- */
/* UI Configuration                                                           */
/* -------------------------------------------------------------------------- */

export interface UIConfig {
  /**
   * Current locale.
   *
   * Example:
   *  - en
   *  - en-US
   *  - fr
   *  - ar
   */
  locale: string;

  /**
   * Layout direction.
   */
  direction: Direction;

  /**
   * Global component density.
   */
  density: Density;

  /**
   * Disable animations throughout the UI.
   */
  disableAnimations: boolean;

  /**
   * Respect reduced-motion preferences.
   */
  reducedMotion: boolean;
}

/* -------------------------------------------------------------------------- */
/* Provider Props                                                             */
/* -------------------------------------------------------------------------- */

export interface UIProviderProps {
  /**
   * Components rendered within the provider.
   */
  children: ReactNode;

  /**
   * Optional configuration overrides.
   *
   * Only the specified properties are overridden;
   * the remaining values fall back to the defaults.
   */
  config?: Partial<UIConfig>;
}

/* -------------------------------------------------------------------------- */
/* Context Value                                                              */
/* -------------------------------------------------------------------------- */

export interface UIContextValue {
  /**
   * Fully resolved UI configuration.
   */
  config: UIConfig;
}
