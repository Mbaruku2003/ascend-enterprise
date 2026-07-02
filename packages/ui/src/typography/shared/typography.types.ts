/**
 * Ascend Enterprise UI
 * --------------------
 * Typography Types
 *
 * Shared types used across all typography components.
 */

import type { CommonProps } from "../../types";

/* -------------------------------------------------------------------------- */
/* Font Sizes                                                                 */
/* -------------------------------------------------------------------------- */

export type TypographySize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

/* -------------------------------------------------------------------------- */
/* Font Weights                                                               */
/* -------------------------------------------------------------------------- */

export type TypographyWeight =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

/* -------------------------------------------------------------------------- */
/* Text Alignment                                                             */
/* -------------------------------------------------------------------------- */

export type TypographyAlign =
  | "left"
  | "center"
  | "right"
  | "justify"
  | "start"
  | "end";

/* -------------------------------------------------------------------------- */
/* Text Transform                                                             */
/* -------------------------------------------------------------------------- */

export type TypographyTransform =
  | "none"
  | "uppercase"
  | "lowercase"
  | "capitalize";

/* -------------------------------------------------------------------------- */
/* Text Decoration                                                            */
/* -------------------------------------------------------------------------- */

export type TypographyDecoration =
  | "none"
  | "underline"
  | "line-through"
  | "overline";

/* -------------------------------------------------------------------------- */
/* Font Style                                                                 */
/* -------------------------------------------------------------------------- */

export type TypographyStyle =
  | "normal"
  | "italic"
  | "oblique";

/* -------------------------------------------------------------------------- */
/* Line Height                                                                */
/* -------------------------------------------------------------------------- */

export type TypographyLineHeight =
  | "none"
  | "tight"
  | "snug"
  | "normal"
  | "relaxed"
  | "loose";

/* -------------------------------------------------------------------------- */
/* Letter Spacing                                                             */
/* -------------------------------------------------------------------------- */

export type TypographyTracking =
  | "tighter"
  | "tight"
  | "normal"
  | "wide"
  | "wider"
  | "widest";

/* -------------------------------------------------------------------------- */
/* Text Color                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Semantic text color.
 *
 * These map to design tokens rather than hardcoded colors.
 */
export type TypographyColor =
  | "default"
  | "muted"
  | "subtle"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "inherit";

/* -------------------------------------------------------------------------- */
/* Text Wrapping                                                              */
/* -------------------------------------------------------------------------- */

export type TypographyWrap =
  | "wrap"
  | "nowrap"
  | "balance"
  | "pretty";

/* -------------------------------------------------------------------------- */
/* Shared Typography Props                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Props shared by every typography component.
 */
export interface TypographyProps extends CommonProps {
  /**
   * Font size.
   */
  size?: TypographySize;

  /**
   * Font weight.
   */
  weight?: TypographyWeight;

  /**
   * Semantic text color.
   */
  color?: TypographyColor;

  /**
   * Text alignment.
   */
  align?: TypographyAlign;

  /**
   * Font style.
   */
  fontStyle?: TypographyStyle;

  /**
   * Text transform.
   */
  transform?: TypographyTransform;

  /**
   * Text decoration.
   */
  decoration?: TypographyDecoration;

  /**
   * Line height.
   */
  lineHeight?: TypographyLineHeight;

  /**
   * Letter spacing.
   */
  tracking?: TypographyTracking;

  /**
   * Text wrapping behavior.
   */
  wrap?: TypographyWrap;

  /**
   * Truncate overflowing text with an ellipsis.
   */
  truncate?: boolean;

  /**
   * Render on a single line.
   */
  noWrap?: boolean;

  /**
   * Allow text to inherit its parent color.
   */
  inheritColor?: boolean;
}
