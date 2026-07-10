/**
 * ============================================================================
 * Ascend UI
 * Divider Types
 * ============================================================================
 */

import type { BoxProps } from "../../layout/Box";

/* -------------------------------------------------------------------------- */
/* Orientation                                                                */
/* -------------------------------------------------------------------------- */

export type DividerOrientation =
  | "horizontal"
  | "vertical";

/* -------------------------------------------------------------------------- */
/* Variant                                                                    */
/* -------------------------------------------------------------------------- */

export type DividerVariant =
  | "solid"
  | "dashed"
  | "dotted";

/* -------------------------------------------------------------------------- */
/* Spacing                                                                    */
/* -------------------------------------------------------------------------- */

export type DividerSpacing =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface DividerProps
  extends BoxProps {
  /**
   * Divider orientation.
   *
   * @default "horizontal"
   */
  orientation?: DividerOrientation;

  /**
   * Divider style.
   *
   * @default "solid"
   */
  variant?: DividerVariant;

  /**
   * Margin around divider.
   *
   * @default "md"
   */
  spacing?: DividerSpacing;

  /**
   * Decorative divider.
   *
   * Decorative dividers are hidden from assistive technologies.
   *
   * @default false
   */
  decorative?: boolean;
}
