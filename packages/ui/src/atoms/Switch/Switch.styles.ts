/**
 * ============================================================================
 * Ascend UI
 * Switch Styles
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

export const DEFAULT_SWITCH_SIZE: SelectionSize =
  DEFAULT_SELECTION_SIZE;

/* -------------------------------------------------------------------------- */
/* Hidden Input                                                               */
/* -------------------------------------------------------------------------- */

export const SWITCH_INPUT_CLASSES =
  "sr-only";

/* -------------------------------------------------------------------------- */
/* Track                                                                      */
/* -------------------------------------------------------------------------- */

export const SWITCH_TRACK_CLASSES = [
  "relative",
  "inline-flex",
  "items-center",
  "rounded-full",
  "transition-all",
  "duration-200",
  "bg-muted",
].join(" ");

export const SWITCH_TRACK_SIZE: Record<
  SelectionSize,
  string
> = {
  sm: "w-8 h-4",

  md: "w-10 h-5",

  lg: "w-12 h-6",
};

/* -------------------------------------------------------------------------- */
/* Thumb                                                                      */
/* -------------------------------------------------------------------------- */

export const SWITCH_THUMB_CLASSES = [
  "absolute",
  "rounded-full",
  "bg-white",
  "shadow",
  "transition-transform",
  "duration-200",
].join(" ");

export const SWITCH_THUMB_SIZE: Record<
  SelectionSize,
  string
> = {
  sm: "w-3 h-3",

  md: "w-4 h-4",

  lg: "w-5 h-5",
};

export const SWITCH_THUMB_TRANSLATE: Record<
  SelectionSize,
  string
> = {
  sm: "translate-x-4",

  md: "translate-x-5",

  lg: "translate-x-6",
};

export const SWITCH_TRACK_CHECKED =
  "bg-primary";

export const SWITCH_DISABLED =
  "opacity-50 cursor-not-allowed";
