/**
 * ============================================================================
 * Ascend UI
 * Spacer Types
 * ============================================================================
 */

import type { BoxProps } from "../Box";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface SpacerProps
  extends Omit<BoxProps, "children"> {
  /**
   * Flex grow value.
   *
   * @default 1
   */
  grow?: number;

  /**
   * Flex shrink value.
   *
   * @default 1
   */
  shrink?: number;

  /**
   * Flex basis.
   *
   * @default "0%"
   */
  basis?: string | number;
}
