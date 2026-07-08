import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import type {
  ComponentSize,
  ComponentStatus,
} from "../shared";

/* -------------------------------------------------------------------------- */
/* Text Variant                                                               */
/* -------------------------------------------------------------------------- */

export type TextVariant =
  | "body"
  | "caption"
  | "overline"
  | "code"
  | "muted"
  | "lead";

/* -------------------------------------------------------------------------- */
/* Font Weight                                                                */
/* -------------------------------------------------------------------------- */

export type TextWeight =
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold";

/* -------------------------------------------------------------------------- */
/* Text Alignment                                                             */
/* -------------------------------------------------------------------------- */

export type TextAlign =
  | "left"
  | "center"
  | "right"
  | "justify";

/* -------------------------------------------------------------------------- */
/* Text Transform                                                             */
/* -------------------------------------------------------------------------- */

export type TextTransform =
  | "none"
  | "uppercase"
  | "lowercase"
  | "capitalize";

/* -------------------------------------------------------------------------- */
/* Text Decoration                                                            */
/* -------------------------------------------------------------------------- */

export type TextDecoration =
  | "none"
  | "underline"
  | "line-through";

/* -------------------------------------------------------------------------- */
/* Text Props                                                                 */
/* -------------------------------------------------------------------------- */

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * Visual text style.
   *
   * @default "body"
   */
  variant?: TextVariant;

  /**
   * Typography size.
   *
   * @default "md"
   */
  size?: ComponentSize;

  /**
   * Font weight.
   *
   * @default "normal"
   */
  weight?: TextWeight;

  /**
   * Semantic status color.
   */
  status?: ComponentStatus;

  /**
   * Text alignment.
   *
   * @default "left"
   */
  align?: TextAlign;

  /**
   * Text transform.
   *
   * @default "none"
   */
  transform?: TextTransform;

  /**
   * Text decoration.
   *
   * @default "none"
   */
  decoration?: TextDecoration;

  /**
   * Truncate overflowing text.
   *
   * @default false
   */
  truncate?: boolean;

  /**
   * Render inline instead of block.
   *
   * @default false
   */
  inline?: boolean;

  /**
   * Component children.
   */
  children?: ReactNode;
}

/* -------------------------------------------------------------------------- */
/* Owner State                                                                */
/* -------------------------------------------------------------------------- */

export interface TextOwnerState {
  variant: TextVariant;
  size: ComponentSize;
  weight: TextWeight;
  status?: ComponentStatus;
  align: TextAlign;
  transform: TextTransform;
  decoration: TextDecoration;
  truncate: boolean;
  inline: boolean;
}
