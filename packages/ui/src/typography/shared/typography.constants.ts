/**
 * Ascend Enterprise UI
 * --------------------
 * Typography Constants
 *
 * Canonical mappings from semantic typography values to design-token
 * class names. Components should consume these constants instead of
 * hardcoding typography styles.
 */

import type {
  TypographyAlign,
  TypographyColor,
  TypographyDecoration,
  TypographyLineHeight,
  TypographySize,
  TypographyStyle,
  TypographyTracking,
  TypographyTransform,
  TypographyWeight,
  TypographyWrap,
} from "./typography.types";

/* -------------------------------------------------------------------------- */
/* Font Sizes                                                                 */
/* -------------------------------------------------------------------------- */

export const TYPOGRAPHY_SIZES: Readonly<
  Record<TypographySize, string>
> = Object.freeze({
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
});

/* -------------------------------------------------------------------------- */
/* Font Weights                                                               */
/* -------------------------------------------------------------------------- */

export const TYPOGRAPHY_WEIGHTS: Readonly<
  Record<TypographyWeight, string>
> = Object.freeze({
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
});

/* -------------------------------------------------------------------------- */
/* Text Alignment                                                             */
/* -------------------------------------------------------------------------- */

export const TYPOGRAPHY_ALIGNMENTS: Readonly<
  Record<TypographyAlign, string>
> = Object.freeze({
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
  start: "text-start",
  end: "text-end",
});

/* -------------------------------------------------------------------------- */
/* Font Style                                                                 */
/* -------------------------------------------------------------------------- */

export const TYPOGRAPHY_STYLES: Readonly<
  Record<TypographyStyle, string>
> = Object.freeze({
  normal: "not-italic",
  italic: "italic",
  oblique: "italic",
});

/* -------------------------------------------------------------------------- */
/* Text Decoration                                                            */
/* -------------------------------------------------------------------------- */

export const TYPOGRAPHY_DECORATIONS: Readonly<
  Record<TypographyDecoration, string>
> = Object.freeze({
  none: "no-underline",
  underline: "underline",
  "line-through": "line-through",
  overline: "overline",
});

/* -------------------------------------------------------------------------- */
/* Text Transform                                                             */
/* -------------------------------------------------------------------------- */

export const TYPOGRAPHY_TRANSFORMS: Readonly<
  Record<TypographyTransform, string>
> = Object.freeze({
  none: "normal-case",
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
});

/* -------------------------------------------------------------------------- */
/* Line Height                                                                */
/* -------------------------------------------------------------------------- */

export const TYPOGRAPHY_LINE_HEIGHTS: Readonly<
  Record<TypographyLineHeight, string>
> = Object.freeze({
  none: "leading-none",
  tight: "leading-tight",
  snug: "leading-snug",
  normal: "leading-normal",
  relaxed: "leading-relaxed",
  loose: "leading-loose",
});

/* -------------------------------------------------------------------------- */
/* Letter Spacing                                                             */
/* -------------------------------------------------------------------------- */

export const TYPOGRAPHY_TRACKING: Readonly<
  Record<TypographyTracking, string>
> = Object.freeze({
  tighter: "tracking-tighter",
  tight: "tracking-tight",
  normal: "tracking-normal",
  wide: "tracking-wide",
  wider: "tracking-wider",
  widest: "tracking-widest",
});

/* -------------------------------------------------------------------------- */
/* Text Colors                                                                */
/* -------------------------------------------------------------------------- */

/**
 * These should map to semantic design-token classes rather than
 * hardcoded colors. The actual CSS variables are defined by the
 * design package.
 */
export const TYPOGRAPHY_COLORS: Readonly<
  Record<TypographyColor, string>
> = Object.freeze({
  default: "text-foreground",
  muted: "text-muted",
  subtle: "text-subtle",
  primary: "text-primary",
  secondary: "text-secondary",
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger",
  info: "text-info",
  inherit: "text-inherit",
});

/* -------------------------------------------------------------------------- */
/* Text Wrapping                                                              */
/* -------------------------------------------------------------------------- */

export const TYPOGRAPHY_WRAP: Readonly<
  Record<TypographyWrap, string>
> = Object.freeze({
  wrap: "text-wrap",
  nowrap: "whitespace-nowrap",
  balance: "text-balance",
  pretty: "text-pretty",
});

/* -------------------------------------------------------------------------- */
/* Shared Utility Classes                                                     */
/* -------------------------------------------------------------------------- */

export const TYPOGRAPHY_UTILITIES = Object.freeze({
  truncate: "truncate",
  noWrap: "whitespace-nowrap",
  inheritColor: "text-inherit",
});
