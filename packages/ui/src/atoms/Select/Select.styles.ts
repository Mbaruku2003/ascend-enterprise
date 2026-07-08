/**
 * ============================================================================
 * Ascend UI
 * Select Styles
 * ============================================================================
 *
 * Select-specific styling.
 *
 * Shared responsibilities such as:
 * - variants
 * - validation states
 * - sizing
 * - loading
 *
 * are handled by the shared FieldControl infrastructure.
 *
 * ============================================================================
 */

import {
  DEFAULT_FIELD_SIZE,
  DEFAULT_FIELD_STATE,
  DEFAULT_FIELD_VARIANT,
  type FieldSize,
  type FieldState,
  type FieldVariant,
} from "../shared/forms";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_SELECT_VARIANT: FieldVariant =
  DEFAULT_FIELD_VARIANT;

export const DEFAULT_SELECT_SIZE: FieldSize =
  DEFAULT_FIELD_SIZE;

export const DEFAULT_SELECT_STATE: FieldState =
  DEFAULT_FIELD_STATE;

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export const SELECT_ROOT_CLASSES = [
  "relative",
  "flex",
  "w-full",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Native Select                                                              */
/* -------------------------------------------------------------------------- */

export const SELECT_ELEMENT_CLASSES = [
  "block",
  "w-full",
  "appearance-none",
  "bg-transparent",
  "border-0",
  "outline-none",
  "ring-0",
  "cursor-pointer",
  "disabled:cursor-not-allowed",
  "disabled:opacity-60",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Read Only                                                                  */
/* -------------------------------------------------------------------------- */

export const SELECT_READ_ONLY_CLASS =
  "cursor-default";

/* -------------------------------------------------------------------------- */
/* Dropdown Indicator                                                         */
/* -------------------------------------------------------------------------- */

export const SELECT_INDICATOR_CLASSES = [
  "pointer-events-none",
  "absolute",
  "right-3",
  "top-1/2",
  "-translate-y-1/2",
  "text-muted-foreground",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Placeholder                                                                */
/* -------------------------------------------------------------------------- */

export const SELECT_PLACEHOLDER_CLASSES =
  "text-muted-foreground";

/* -------------------------------------------------------------------------- */
/* Option                                                                     */
/* -------------------------------------------------------------------------- */

export const SELECT_OPTION_CLASSES =
  "bg-background text-foreground";
