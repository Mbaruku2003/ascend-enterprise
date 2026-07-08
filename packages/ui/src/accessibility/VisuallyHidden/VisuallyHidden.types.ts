/**
 * Ascend Enterprise UI
 * --------------------
 * VisuallyHidden Types
 */

import type {
  As,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "../../lib";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Default HTML element.
 */
export type VisuallyHiddenDefaultElement = "span";

/**
 * Component props.
 */
export interface VisuallyHiddenOwnProps {
  /**
   * Children available to assistive technologies.
   */
  children?: React.ReactNode;
}

/**
 * Public props.
 */
export type VisuallyHiddenProps<
  T extends As = VisuallyHiddenDefaultElement,
> = PolymorphicComponentProps<
  T,
  VisuallyHiddenOwnProps
>;

/**
 * Ref type.
 */
export type VisuallyHiddenRef<
  T extends As = VisuallyHiddenDefaultElement,
> = PolymorphicRef<T>;
