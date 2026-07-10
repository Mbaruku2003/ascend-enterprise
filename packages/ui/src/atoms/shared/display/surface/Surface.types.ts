/**
 * ============================================================================
 * Ascend UI
 * Surface Types
 * ============================================================================
 */

import type { BoxProps } from "../../layout/Box";

/* -------------------------------------------------------------------------- */
/* Variants                                                                   */
/* -------------------------------------------------------------------------- */

export type SurfaceVariant =
  | "filled"
  | "outlined"
  | "elevated"
  | "ghost";

/* -------------------------------------------------------------------------- */
/* Elevation                                                                  */
/* -------------------------------------------------------------------------- */

export type SurfaceElevation =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

/* -------------------------------------------------------------------------- */
/* Radius                                                                     */
/* -------------------------------------------------------------------------- */

export type SurfaceRadius =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "full";

/* -------------------------------------------------------------------------- */
/* Padding                                                                    */
/* -------------------------------------------------------------------------- */

export type SurfacePadding =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface SurfaceProps
  extends BoxProps {
  /**
   * Visual appearance.
   *
   * @default "filled"
   */
  variant?: SurfaceVariant;

  /**
   * Shadow depth.
   *
   * @default "none"
   */
  elevation?: SurfaceElevation;

  /**
   * Corner radius.
   *
   * @default "lg"
   */
  radius?: SurfaceRadius;

  /**
   * Internal spacing.
   *
   * @default "md"
   */
  padding?: SurfacePadding;

  /**
   * Interactive surface.
   *
   * @default false
   */
  interactive?: boolean;
}
