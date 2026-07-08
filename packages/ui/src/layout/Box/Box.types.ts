/**
 * Ascend Enterprise UI
 * --------------------
 * Box Types
 *
 * Box is the foundational layout primitive.
 */

import type {
  As,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "../../lib";

import type { LayoutProps } from "../shared";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Default HTML element rendered by Box.
 */
export type BoxDefaultElement = "div";

/* -------------------------------------------------------------------------- */
/* Box Props                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Box-specific props.
 *
 * Extends the shared layout props used across all layout primitives.
 */
export interface BoxOwnProps extends LayoutProps {
  /**
   * Optional children.
   */
  children?: React.ReactNode;
}

/**
 * Public Box props.
 */
export type BoxProps<
  T extends As = BoxDefaultElement,
> = PolymorphicComponentProps<T, BoxOwnProps>;

/**
 * Forwarded ref type.
 */
export type BoxRef<
  T extends As = BoxDefaultElement,
> = PolymorphicRef<T>;
