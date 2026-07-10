/**
 * ============================================================================
 * Ascend UI
 * Grid Item Types
 * ============================================================================
 */

import type { ReactNode } from "react";

import type { BoxProps } from "../Box";

import type {
  ResponsiveValue,
} from "./Grid.types";

/* -------------------------------------------------------------------------- */
/* Span                                                                       */
/* -------------------------------------------------------------------------- */

export type GridSpan =
  | number
  | ResponsiveValue<number>;

/* -------------------------------------------------------------------------- */
/* Start                                                                      */
/* -------------------------------------------------------------------------- */

export type GridStart =
  | number
  | ResponsiveValue<number>;

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface GridItemProps
  extends Omit<BoxProps, "children"> {
  /**
   * Content.
   */
  children?: ReactNode;

  /**
   * Column span.
   *
   * @default 1
   */
  span?: GridSpan;

  /**
   * Row span.
   */
  rowSpan?: GridSpan;

  /**
   * Column start.
   */
  start?: GridStart;
}
