/**
 * ============================================================================
 * Ascend UI
 * Inline Styles
 * ============================================================================
 */

import { resolveFlexClasses } from "../utils";

import type {
  LayoutAlign,
  LayoutJustify,
  LayoutSpace,
  LayoutWrap,
} from "../types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_INLINE_GAP: LayoutSpace = "md";

export const DEFAULT_INLINE_ALIGN: LayoutAlign = "center";

export const DEFAULT_INLINE_JUSTIFY: LayoutJustify = "start";

export const DEFAULT_INLINE_WRAP: LayoutWrap = "nowrap";

/* -------------------------------------------------------------------------- */
/* Resolver                                                                   */
/* -------------------------------------------------------------------------- */

export function resolveInlineClasses(
  gap: LayoutSpace,
  align: LayoutAlign,
  justify: LayoutJustify,
  wrap: LayoutWrap,
): string[] {
  return resolveFlexClasses({
    direction: "row",
    gap,
    align,
    justify,
    wrap,
  });
}
