/**
 * Ascend Enterprise UI
 * --------------------
 * Grid Types
 *
 * Grid is a specialized Box component that renders
 * with `display="grid"` by default.
 */

import type {
  As,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "../../lib";

import type { BoxOwnProps } from "../Box";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Default HTML element rendered by Grid.
 */
export type GridDefaultElement = "div";

/* -------------------------------------------------------------------------- */
/* Grid Props                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * Number of grid columns.
 *
 * Examples:
 *
 * columns={2}
 * columns={12}
 */
export type GridColumns = number;

/**
 * Number of grid rows.
 */
export type GridRows = number;

/**
 * Grid-specific props.
 */
export interface GridOwnProps extends BoxOwnProps {
  /**
   * Number of template columns.
   */
  columns?: GridColumns;

  /**
   * Number of template rows.
   */
  rows?: GridRows;
}

/**
 * Public Grid props.
 */
export type GridProps<
  T extends As = GridDefaultElement,
> = PolymorphicComponentProps<
  T,
  GridOwnProps
>;

/**
 * Forwarded ref type.
 */
export type GridRef<
  T extends As = GridDefaultElement,
> = PolymorphicRef<T>;
