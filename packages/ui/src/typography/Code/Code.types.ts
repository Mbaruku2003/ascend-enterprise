/**
 * Ascend Enterprise UI
 * --------------------
 * Code Types
 */

import type {
  As,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "../../lib";

import type { TypographyProps } from "../shared";

/* -------------------------------------------------------------------------- */
/* Code Defaults                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Default HTML element rendered by Code.
 */
export type CodeDefaultElement = "code";

/**
 * Code-specific props.
 */
export interface CodeOwnProps extends TypographyProps {
  /**
   * Render as a block-level code snippet.
   *
   * When true, block styling is applied while preserving
   * semantic rendering.
   *
   * @default false
   */
  block?: boolean;

  /**
   * Preserve whitespace.
   *
   * @default true
   */
  preserveWhitespace?: boolean;
}

/**
 * Public props.
 */
export type CodeProps<
  T extends As = CodeDefaultElement,
> = PolymorphicComponentProps<T, CodeOwnProps>;

/**
 * Ref type.
 */
export type CodeRef<
  T extends As = CodeDefaultElement,
> = PolymorphicRef<T>;
