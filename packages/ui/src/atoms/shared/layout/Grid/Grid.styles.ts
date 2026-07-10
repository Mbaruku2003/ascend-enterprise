/**
 * ============================================================================
 * Ascend UI
 * Grid Styles
 * ============================================================================
 */

import {
  ALIGN_CLASSES,
  GAP_CLASSES,
  JUSTIFY_CLASSES,
} from "../tokens";

import type {
  LayoutAlign,
  LayoutJustify,
  LayoutSpace,
} from "../types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_GRID_COLUMNS = 12;

export const DEFAULT_GRID_GAP: LayoutSpace =
  "md";

export const DEFAULT_GRID_AUTO_FILL =
  false;

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export const GRID_ROOT_CLASS =
  "grid";

/* -------------------------------------------------------------------------- */
/* Alignment                                                                  */
/* -------------------------------------------------------------------------- */

export function resolveGridAlignment(
  align?: LayoutAlign,
  justify?: LayoutJustify,
): string[] {
  return [
    align
      ? ALIGN_CLASSES[align]
      : "",

    justify
      ? JUSTIFY_CLASSES[justify]
      : "",
  ];
}

/* -------------------------------------------------------------------------- */
/* Gap                                                                        */
/* -------------------------------------------------------------------------- */

export function resolveGridGap(
  gap: LayoutSpace,
): string {
  return GAP_CLASSES[gap];
}
