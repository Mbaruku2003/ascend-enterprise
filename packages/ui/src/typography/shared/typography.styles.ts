/**
 * Ascend Enterprise UI
 * --------------------
 * Typography Styles
 *
 * Shared typography style resolver.
 *
 * Converts TypographyProps into a composed className that can be reused
 * by every typography component.
 */

import { cn } from "../../lib";

import {
  TYPOGRAPHY_ALIGNMENTS,
  TYPOGRAPHY_COLORS,
  TYPOGRAPHY_DECORATIONS,
  TYPOGRAPHY_LINE_HEIGHTS,
  TYPOGRAPHY_SIZES,
  TYPOGRAPHY_STYLES,
  TYPOGRAPHY_TRACKING,
  TYPOGRAPHY_TRANSFORMS,
  TYPOGRAPHY_UTILITIES,
  TYPOGRAPHY_WEIGHTS,
  TYPOGRAPHY_WRAP,
} from "./typography.constants";

import type { TypographyProps } from "./typography.types";

/**
 * Builds the typography className from shared typography props.
 */
export function getTypographyClassName(
  props: TypographyProps,
): string {
  const {
    className,

    size = "md",
    weight = "normal",
    color = "default",

    align = "start",

    fontStyle = "normal",

    transform = "none",

    decoration = "none",

    lineHeight = "normal",

    tracking = "normal",

    wrap = "wrap",

    truncate = false,

    noWrap = false,

    inheritColor = false,
  } = props;

  return cn(
    TYPOGRAPHY_SIZES[size],
    TYPOGRAPHY_WEIGHTS[weight],
    TYPOGRAPHY_COLORS[color],
    TYPOGRAPHY_ALIGNMENTS[align],
    TYPOGRAPHY_STYLES[fontStyle],
    TYPOGRAPHY_TRANSFORMS[transform],
    TYPOGRAPHY_DECORATIONS[decoration],
    TYPOGRAPHY_LINE_HEIGHTS[lineHeight],
    TYPOGRAPHY_TRACKING[tracking],
    TYPOGRAPHY_WRAP[wrap],

    truncate && TYPOGRAPHY_UTILITIES.truncate,

    noWrap && TYPOGRAPHY_UTILITIES.noWrap,

    inheritColor && TYPOGRAPHY_UTILITIES.inheritColor,

    className,
  );
}

export default getTypographyClassName;
