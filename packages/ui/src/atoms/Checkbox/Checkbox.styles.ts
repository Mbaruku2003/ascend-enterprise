/**
 * ============================================================================
 * Ascend UI
 * Checkbox Styles
 * ============================================================================
 */

import {
  DEFAULT_SELECTION_SHAPE,
  DEFAULT_SELECTION_SIZE,
} from "../shared/selection";

import type {
  SelectionShape,
  SelectionSize,
} from "../shared/selection";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_CHECKBOX_SIZE: SelectionSize =
  DEFAULT_SELECTION_SIZE;

export const DEFAULT_CHECKBOX_SHAPE: SelectionShape =
  DEFAULT_SELECTION_SHAPE;

/* -------------------------------------------------------------------------- */
/* Native Input                                                               */
/* -------------------------------------------------------------------------- */

export const CHECKBOX_INPUT_CLASSES = [
  "sr-only",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Indicator                                                                  */
/* -------------------------------------------------------------------------- */

export const CHECKBOX_INDICATOR_CLASSES = [
  "flex",
  "items-center",
  "justify-center",
  "w-full",
  "h-full",
].join(" ");
