/**
 * ============================================================================
 * Ascend UI
 * Grid Types
 * ============================================================================
 */

import type { ReactNode } from "react";

import type { BoxProps } from "../Box";

import type {
  LayoutAlign,
  LayoutJustify,
  LayoutSpace,
} from "../types";

/* -------------------------------------------------------------------------- */
/* Responsive                                                                 */
/* -------------------------------------------------------------------------- */

export interface ResponsiveValue<T> {
  base?: T;

  sm?: T;

  md?: T;

  lg?: T;

  xl?: T;

  "2xl"?: T;
}

/* -------------------------------------------------------------------------- */
/* Columns                                                                    */
/* -------------------------------------------------------------------------- */

export type GridColumns =
  | number
  | ResponsiveValue<number>;

/* -------------------------------------------------------------------------- */
/* Gap                                                                        */
/* -------------------------------------------------------------------------- */

export type GridGap =
  | LayoutSpace
  | ResponsiveValue<LayoutSpace>;

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface GridProps
  extends Omit<BoxProps, "children"> {
  /**
   * Grid children.
   */
  children?: ReactNode;

  /**
   * Number of columns.
   *
   * @default 12
   */
  columns?: GridColumns;

  /**
   * Gap between items.
   *
   * @default "md"
   */
  gap?: GridGap;

  /**
   * Minimum width for auto-fit/auto-fill layouts.
   */
  minItemWidth?: string;

  /**
   * Use auto-fill instead of auto-fit.
   *
   * @default false
   */
  autoFill?: boolean;

  /**
   * Align items.
   */
  align?: LayoutAlign;

  /**
   * Justify items.
   */
  justify?: LayoutJustify;
}
