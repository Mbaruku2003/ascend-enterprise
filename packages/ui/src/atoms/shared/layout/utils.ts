/**
 * ============================================================================
 * Ascend UI
 * Layout Utilities
 * ============================================================================
 */

import {
  ALIGN_CLASSES,
  DIRECTION_CLASSES,
  GAP_CLASSES,
  JUSTIFY_CLASSES,
  WRAP_CLASSES,
} from "./tokens";

import type {
  LayoutAlign,
  LayoutDirection,
  LayoutJustify,
  LayoutSpace,
  LayoutWrap,
} from "./types";

export interface FlexOptions {
  direction?: LayoutDirection;

  align?: LayoutAlign;

  justify?: LayoutJustify;

  gap?: LayoutSpace;

  wrap?: LayoutWrap;
}

export function resolveFlexClasses({
  direction,
  align,
  justify,
  gap,
  wrap,
}: FlexOptions): string[] {
  return [
    "flex",

    direction
      ? DIRECTION_CLASSES[
          direction
        ]
      : "",

    align
      ? ALIGN_CLASSES[
          align
        ]
      : "",

    justify
      ? JUSTIFY_CLASSES[
          justify
        ]
      : "",

    gap
      ? GAP_CLASSES[
          gap
        ]
      : "",

    wrap
      ? WRAP_CLASSES[
          wrap
        ]
      : "",
  ];
}
