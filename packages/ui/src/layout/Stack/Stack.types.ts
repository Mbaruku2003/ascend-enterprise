/**
 * Ascend Enterprise UI
 * --------------------
 * Stack Types
 *
 * Stack is a specialized Flex component that renders
 * with `direction="column"` by default.
 */

import type {
  As,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "../../lib";

import type { FlexOwnProps } from "../Flex";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Default HTML element rendered by Stack.
 */
export type StackDefaultElement = "div";

/* -------------------------------------------------------------------------- */
/* Stack Props                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Stack-specific props.
 *
 * Inherits all Flex props while providing a sensible
 * default direction of "column".
 */
export interface StackOwnProps extends FlexOwnProps {}

/**
 * Public Stack props.
 */
export type StackProps<
  T extends As = StackDefaultElement,
> = PolymorphicComponentProps<
  T,
  StackOwnProps
>;

/**
 * Forwarded ref type.
 */
export type StackRef<
  T extends As = StackDefaultElement,
> = PolymorphicRef<T>;
