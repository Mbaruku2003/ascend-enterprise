/**
 * ============================================================================
 * Ascend UI
 * Cluster Types
 * ============================================================================
 */

import type { BoxProps } from "../Box";

import type {
  LayoutAlign,
  LayoutJustify,
  LayoutSpace,
} from "../types";

/* -------------------------------------------------------------------------- */

export interface ClusterProps
  extends Omit<BoxProps, "children"> {
  /**
   * Space between items.
   *
   * @default "md"
   */
  gap?: LayoutSpace;

  /**
   * Cross-axis alignment.
   *
   * @default "center"
   */
  align?: LayoutAlign;

  /**
   * Main-axis alignment.
   *
   * @default "start"
   */
  justify?: LayoutJustify;
}
