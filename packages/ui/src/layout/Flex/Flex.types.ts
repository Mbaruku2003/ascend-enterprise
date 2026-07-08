/**
 * Ascend Enterprise UI
 * --------------------
 * Flex Types
 *
 * Flex is a specialized Box component that renders
 * with `display: flex` by default.
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
 * Default HTML element rendered by Flex.
 */
export type FlexDefaultElement = "div";

/* -------------------------------------------------------------------------- */
/* Flex Props                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * Flex-specific props.
 */
export interface FlexOwnProps extends BoxOwnProps {
  /**
   * Render as inline-flex instead of flex.
   *
   * @default false
   */
  inline?: boolean;
}

/**
 * Public props.
 */
export type FlexProps<
  T extends As = FlexDefaultElement,
> = PolymorphicComponentProps<
  T,
  FlexOwnProps
>;

/**
 * Ref type.
 */
export type FlexRef<
  T extends As = FlexDefaultElement,
> = PolymorphicRef<T>;
