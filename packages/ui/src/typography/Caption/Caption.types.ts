/**
 * Ascend Enterprise UI
 * --------------------
 * Caption Types
 */

import type {
  As,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "../../lib";

import type { TypographyProps } from "../shared";

/* -------------------------------------------------------------------------- */
/* Caption Defaults                                                           */
/* -------------------------------------------------------------------------- */

/**
 * Default HTML element rendered by Caption.
 */
export type CaptionDefaultElement = "figcaption";

/**
 * Caption-specific props.
 *
 * Caption currently adds no additional props beyond the shared
 * typography API.
 */
export type CaptionOwnProps = TypographyProps;

/**
 * Public Caption props.
 */
export type CaptionProps<
  T extends As = CaptionDefaultElement,
> = PolymorphicComponentProps<T, CaptionOwnProps>;

/**
 * Forwarded ref type.
 */
export type CaptionRef<
  T extends As = CaptionDefaultElement,
> = PolymorphicRef<T>;
