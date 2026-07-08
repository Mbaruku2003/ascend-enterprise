/**
 * ============================================================================
 * Ascend UI
 * Textarea Styles
 * ============================================================================
 *
 * Textarea-specific styling.
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

import type {
  TextareaResize,
} from "./Textarea.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_TEXTAREA_VARIANT: FieldVariant =
  DEFAULT_FIELD_VARIANT;

export const DEFAULT_TEXTAREA_SIZE: FieldSize =
  DEFAULT_FIELD_SIZE;

export const DEFAULT_TEXTAREA_STATE: FieldState =
  DEFAULT_FIELD_STATE;

export const DEFAULT_TEXTAREA_RESIZE: TextareaResize =
  "vertical";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export const TEXTAREA_ROOT_CLASSES = [
  "relative",
  "flex",
  "w-full",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Native Textarea                                                            */
/* -------------------------------------------------------------------------- */

export const TEXTAREA_ELEMENT_CLASSES = [
  "block",
  "w-full",
  "min-h-[120px]",
  "bg-transparent",
  "border-0",
  "outline-none",
  "ring-0",
  "resize-none",
  "placeholder:text-muted-foreground",
  "disabled:cursor-not-allowed",
  "disabled:opacity-60",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Resize                                                                     */
/* -------------------------------------------------------------------------- */

export const TEXTAREA_RESIZE_CLASSES: Record<
  TextareaResize,
  string
> = {
  none: "resize-none",

  vertical: "resize-y",

  horizontal: "resize-x",

  both: "resize",
};

/* -------------------------------------------------------------------------- */
/* Read Only                                                                  */
/* -------------------------------------------------------------------------- */

export const TEXTAREA_READ_ONLY_CLASS =
  "cursor-default";

/* -------------------------------------------------------------------------- */
/* Autofill                                                                   */
/* -------------------------------------------------------------------------- */

export const TEXTAREA_AUTOFILL_CLASSES = [
  "autofill:bg-transparent",
  "autofill:shadow-[inset_0_0_0px_1000px_transparent]",
].join(" ");
