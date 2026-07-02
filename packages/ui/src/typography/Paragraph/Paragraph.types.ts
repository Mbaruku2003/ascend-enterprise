/**
 * Ascend Enterprise UI
 * --------------------
 * Paragraph Types
 */

import type {
  As,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "../../lib";

import type { TypographyProps } from "../shared";

/* -------------------------------------------------------------------------- */
/* Paragraph Defaults                                                         */
/* -------------------------------------------------------------------------- */

/**
 * Default HTML element rendered by Paragraph.
 */
export type ParagraphDefaultElement = "p";

/**
 * Paragraph-specific props.
 *
 * Paragraph currently adds no additional props beyond the shared
 * typography API.
 */
export type ParagraphOwnProps = TypographyProps;

/**
 * Public Paragraph props.
 */
export type ParagraphProps<
  T extends As = ParagraphDefaultElement,
> = PolymorphicComponentProps<T, ParagraphOwnProps>;

/**
 * Forwarded ref type.
 */
export type ParagraphRef<
  T extends As = ParagraphDefaultElement,
> = PolymorphicRef<T>;
