/**
 * Ascend Enterprise UI
 * --------------------
 * Text Types
 */

import type {
  As,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "../../lib";

import type { TypographyProps } from "../shared";

/**
 * Default element rendered by Text.
 */
export type TextDefaultElement = "span";

/**
 * Props unique to Text.
 *
 * Keep this intentionally empty for now.
 * All shared typography behaviour belongs in TypographyProps.
 */
export type TextOwnProps = TypographyProps;

/**
 * Public Text props.
 */
export type TextProps<
  T extends As = TextDefaultElement,
> = PolymorphicComponentProps<T, TextOwnProps>;

/**
 * Ref type.
 */
export type TextRef<
  T extends As = TextDefaultElement,
> = PolymorphicRef<T>;
