/**
 * ============================================================================
 * Ascend UI
 * Overlay Types
 * ============================================================================
 */

import type { BoxProps } from "../../layout/Box";

export interface OverlayProps
  extends BoxProps {
  /**
   * Apply backdrop blur.
   *
   * @default false
   */
  blur?: boolean;

  /**
   * Transparent overlay.
   *
   * @default false
   */
  transparent?: boolean;

  /**
   * z-index.
   *
   * @default 40
   */
  zIndex?: number;
}
