/**
 * Ascend Enterprise UI
 * --------------------
 * Heading Types
 */

import type {
  As,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "../../lib";

import type { TypographyProps } from "../shared";

/* -------------------------------------------------------------------------- */
/* Heading Defaults                                                           */
/* -------------------------------------------------------------------------- */

/**
 * Default HTML element rendered by Heading.
 */
export type HeadingDefaultElement = "h2";

/**
 * Semantic heading level.
 */
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

/* -------------------------------------------------------------------------- */
/* Heading Props                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Props unique to Heading.
 */
export interface HeadingOwnProps extends TypographyProps {
  /**
   * Semantic heading level.
   *
   * Determines the default HTML element when `as` is not provided.
   *
   * @default 2
   */
  level?: HeadingLevel;
}

/**
 * Public Heading props.
 */
export type HeadingProps<
  T extends As = HeadingDefaultElement,
> = PolymorphicComponentProps<T, HeadingOwnProps>;

/**
 * Forwarded ref type.
 */
export type HeadingRef<
  T extends As = HeadingDefaultElement,
> = PolymorphicRef<T>;
