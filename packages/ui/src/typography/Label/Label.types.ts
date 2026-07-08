/**
 * Ascend Enterprise UI
 * --------------------
 * Label Types
 */

import type {
  As,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "../../lib";

import type { TypographyProps } from "../shared";

/* -------------------------------------------------------------------------- */
/* Label Defaults                                                             */
/* -------------------------------------------------------------------------- */

/**
 * Default element rendered by Label.
 */
export type LabelDefaultElement = "label";

/**
 * Label-specific props.
 */
export interface LabelOwnProps extends TypographyProps {
  /**
   * Associates the label with a form control.
   */
  htmlFor?: string;

  /**
   * Optional disabled state styling.
   */
  disabled?: boolean;
}

/**
 * Public Label props.
 */
export type LabelProps<
  T extends As = LabelDefaultElement,
> = PolymorphicComponentProps<T, LabelOwnProps>;

/**
 * Forwarded ref type.
 */
export type LabelRef<
  T extends As = LabelDefaultElement,
> = PolymorphicRef<T>;
