/**
 * ============================================================================
 * Ascend UI
 * Container Types
 * ============================================================================
 */

import type { BoxProps } from "../Box";

/* -------------------------------------------------------------------------- */
/* Size                                                                       */
/* -------------------------------------------------------------------------- */

export type ContainerSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "full";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface ContainerProps
  extends BoxProps {
  /**
   * Maximum width.
   *
   * @default "xl"
   */
  size?: ContainerSize;

  /**
   * Center horizontally.
   *
   * @default true
   */
  centered?: boolean;

  /**
   * Apply responsive horizontal padding.
   *
   * @default true
   */
  gutters?: boolean;
}
