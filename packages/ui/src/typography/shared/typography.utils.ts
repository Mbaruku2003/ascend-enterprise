/**
 * Ascend Enterprise UI
 * --------------------
 * Typography Utilities
 *
 * Shared utility functions for typography components.
 *
 * These helpers are intentionally style-agnostic and are reused across
 * Text, Heading, Paragraph, Label, Caption, Code, and future
 * typography components.
 */

import type {
  TypographyAlign,
  TypographyColor,
  TypographyProps,
  TypographySize,
  TypographyWeight,
} from "./typography.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Returns typography props with sensible defaults applied.
 *
 * Components should call this before resolving styles to guarantee a
 * complete configuration object.
 */
export function resolveTypographyProps(
  props: TypographyProps,
): Required<TypographyProps> {
  return {
    ...props,

    size: props.size ?? "md",
    weight: props.weight ?? "normal",
    color: props.color ?? "default",

    align: props.align ?? "start",

    fontStyle: props.fontStyle ?? "normal",

    transform: props.transform ?? "none",

    decoration: props.decoration ?? "none",

    lineHeight: props.lineHeight ?? "normal",

    tracking: props.tracking ?? "normal",

    wrap: props.wrap ?? "wrap",

    truncate: props.truncate ?? false,

    noWrap: props.noWrap ?? false,

    inheritColor: props.inheritColor ?? false,

    className: props.className ?? "",

    style: props.style,

    children: props.children,
  };
}

/* -------------------------------------------------------------------------- */
/* Semantic Helpers                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Returns true if the supplied typography weight is considered bold.
 */
export function isBoldWeight(
  weight: TypographyWeight,
): boolean {
  return (
    weight === "bold" ||
    weight === "extrabold" ||
    weight === "black"
  );
}

/**
 * Returns true if the supplied size is considered a display size.
 */
export function isDisplaySize(
  size: TypographySize,
): boolean {
  return (
    size === "2xl" ||
    size === "3xl" ||
    size === "4xl"
  );
}

/**
 * Returns true if the color inherits from the parent element.
 */
export function isInheritedColor(
  color: TypographyColor,
): boolean {
  return color === "inherit";
}

/**
 * Returns true when the text alignment is logical rather than physical.
 */
export function isLogicalAlignment(
  align: TypographyAlign,
): boolean {
  return (
    align === "start" ||
    align === "end"
  );
}
