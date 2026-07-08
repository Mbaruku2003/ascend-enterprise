/**
 * ============================================================================
 * Ascend UI
 * Radio Styles
 * ============================================================================
 */

import {
  DEFAULT_SELECTION_SIZE,
} from "../shared/selection";

import type {
  SelectionSize,
} from "../shared/selection";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_RADIO_SIZE: SelectionSize =
  DEFAULT_SELECTION_SIZE;

/* -------------------------------------------------------------------------- */
/* Input                                                                       */
/* -------------------------------------------------------------------------- */

export const RADIO_INPUT_CLASSES = [
  "sr-only",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Indicator                                                                  */
/* -------------------------------------------------------------------------- */

export const RADIO_INDICATOR_CLASSES = [
  "flex",
  "items-center",
  "justify-center",
  "w-full",
  "h-full",
].join(" ");

export const RADIO_DOT_CLASSES = [
  "rounded-full",
  "bg-current",
].join(" ");

export const RADIO_DOT_SIZE: Record<
  SelectionSize,
  string
> = {
  sm: "h-2 w-2",

  md: "h-2.5 w-2.5",

  lg: "h-3 w-3",
};
