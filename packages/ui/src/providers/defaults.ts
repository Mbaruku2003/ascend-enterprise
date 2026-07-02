/**
 * Ascend Enterprise UI
 * --------------------
 * Default UI Configuration
 *
 * Defines the default configuration used by UIProvider.
 *
 * Components should never hardcode default values; instead they should
 * consume the resolved configuration from UIContext.
 */

import type { UIConfig } from "./UIProvider.types";

/**
 * Canonical default UI configuration.
 *
 * These values are merged with any configuration overrides supplied to
 * <UIProvider config={...} />.
 */
export const DEFAULT_UI_CONFIG: Readonly<UIConfig> = Object.freeze({
  /**
   * Default locale.
   */
  locale: "en",

  /**
   * Default document direction.
   */
  direction: "ltr",

  /**
   * Default component density.
   */
  density: "comfortable",

  /**
   * Animations are enabled by default.
   */
  disableAnimations: false,

  /**
   * Components respect the browser's reduced-motion preference when
   * possible, but this flag defaults to false until explicitly
   * configured.
   */
  reducedMotion: false,
});

export default DEFAULT_UI_CONFIG;
