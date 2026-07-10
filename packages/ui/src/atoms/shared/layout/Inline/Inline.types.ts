/**
 * ============================================================================
 * Ascend UI
 * Inline Types
 * ============================================================================
 */

import type { BoxProps } from "../Box";

import type {
  LayoutAlign,
  LayoutJustify,
  LayoutSpace,
  LayoutWrap,
} from "../types";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface InlineProps
  extends Omit<BoxProps, "children"> {
  /**
   * Space between children.
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

  /**
   * Wrap items.
   *
   * @default "nowrap"
   */
  wrap?: LayoutWrap;
}
