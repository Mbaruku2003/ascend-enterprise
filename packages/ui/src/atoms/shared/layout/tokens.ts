/**
 * ============================================================================
 * Ascend UI
 * Layout Tokens
 * ============================================================================
 */

import type {
  LayoutAlign,
  LayoutDirection,
  LayoutJustify,
  LayoutSpace,
  LayoutWrap,
} from "./types";

/* -------------------------------------------------------------------------- */
/* Gap                                                                        */
/* -------------------------------------------------------------------------- */

export const GAP_CLASSES: Record<
  LayoutSpace,
  string
> = {
  none: "gap-0",

  xs: "gap-1",

  sm: "gap-2",

  md: "gap-4",

  lg: "gap-6",

  xl: "gap-8",

  "2xl": "gap-10",
};

/* -------------------------------------------------------------------------- */
/* Alignment                                                                  */
/* -------------------------------------------------------------------------- */

export const ALIGN_CLASSES: Record<
  LayoutAlign,
  string
> = {
  start: "items-start",

  center: "items-center",

  end: "items-end",

  stretch: "items-stretch",

  baseline: "items-baseline",
};

/* -------------------------------------------------------------------------- */
/* Justification                                                              */
/* -------------------------------------------------------------------------- */

export const JUSTIFY_CLASSES: Record<
  LayoutJustify,
  string
> = {
  start: "justify-start",

  center: "justify-center",

  end: "justify-end",

  between: "justify-between",

  around: "justify-around",

  evenly: "justify-evenly",
};

/* -------------------------------------------------------------------------- */
/* Direction                                                                  */
/* -------------------------------------------------------------------------- */

export const DIRECTION_CLASSES: Record<
  LayoutDirection,
  string
> = {
  row: "flex-row",

  column: "flex-col",
};

/* -------------------------------------------------------------------------- */
/* Wrap                                                                       */
/* -------------------------------------------------------------------------- */

export const WRAP_CLASSES: Record<
  LayoutWrap,
  string
> = {
  nowrap: "flex-nowrap",

  wrap: "flex-wrap",

  "wrap-reverse":
    "flex-wrap-reverse",
};
