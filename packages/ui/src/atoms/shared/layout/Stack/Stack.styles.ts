/**
 * ============================================================================
 * Ascend UI
 * Stack Styles
 * ============================================================================
 */

import {
  ALIGN_CLASSES,
  GAP_CLASSES,
} from "../tokens";

import type {
  LayoutAlign,
  LayoutSpace,
} from "../types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_STACK_GAP: LayoutSpace =
  "md";

export const DEFAULT_STACK_ALIGN: LayoutAlign =
  "stretch";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export const STACK_ROOT =
  "flex flex-col";

/* -------------------------------------------------------------------------- */
/* Resolver                                                                   */
/* -------------------------------------------------------------------------- */

export function resolveStackClasses(
  gap: LayoutSpace,
  align: LayoutAlign,
): string[] {
  return [
    STACK_ROOT,

    GAP_CLASSES[gap],

    ALIGN_CLASSES[align],
  ];
}
