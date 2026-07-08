/**
 * ============================================================================
 * Ascend UI
 * Input Styles
 * ============================================================================
 *
 * Input-specific styling.
 *
 * Shared responsibilities (variants, validation, field states) are delegated
 * to the shared forms infrastructure.
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
  resolveFieldVariantClasses,
} from "../shared/forms";

import type {
  InputOwnerState,
} from "./Input.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_INPUT_VARIANT: FieldVariant =
  DEFAULT_FIELD_VARIANT;

export const DEFAULT_INPUT_SIZE: FieldSize =
  DEFAULT_FIELD_SIZE;

export const DEFAULT_INPUT_STATE: FieldState =
  DEFAULT_FIELD_STATE;

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export const INPUT_ROOT_CLASSES = [
  "relative",
  "flex",
  "items-center",
  "overflow-hidden",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Native Input                                                               */
/* -------------------------------------------------------------------------- */

export const INPUT_ELEMENT_CLASSES = [
  "flex-1",
  "bg-transparent",
  "outline-none",
  "border-none",
  "placeholder:text-muted-foreground",
  "disabled:cursor-not-allowed",
  "disabled:opacity-60",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Sizes                                                                      */
/* -------------------------------------------------------------------------- */

export const INPUT_SIZE_CLASSES: Record<
  FieldSize,
  string
> = {
  sm: "h-9 px-3 text-sm",

  md: "h-11 px-4 text-base",

  lg: "h-12 px-5 text-lg",
};

/* -------------------------------------------------------------------------- */
/* Icons                                                                      */
/* -------------------------------------------------------------------------- */

export const INPUT_ICON_CLASSES =
  "flex items-center justify-center text-muted-foreground";

export const INPUT_LEFT_ICON_CLASSES =
  "pl-3";

export const INPUT_RIGHT_ICON_CLASSES =
  "pr-3";

/* -------------------------------------------------------------------------- */
/* Prefix / Suffix                                                            */
/* -------------------------------------------------------------------------- */

export const INPUT_PREFIX_SUFFIX_CLASSES = [
  "text-muted-foreground",
  "whitespace-nowrap",
  "px-3",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Loading                                                                    */
/* -------------------------------------------------------------------------- */

export const INPUT_LOADING_CLASS =
  "cursor-progress";

/* -------------------------------------------------------------------------- */
/* Read Only                                                                  */
/* -------------------------------------------------------------------------- */

export const INPUT_READ_ONLY_CLASS =
  "cursor-default";

/* -------------------------------------------------------------------------- */
/* Resolver                                                                   */
/* -------------------------------------------------------------------------- */

export function resolveInputClasses(
  ownerState: InputOwnerState & {
    size: FieldSize;
    state: FieldState;
  },
): string[] {
  return [
    ...resolveFieldVariantClasses(
      ownerState.variant,
      ownerState.state,
    ),

    INPUT_SIZE_CLASSES[
      ownerState.size
    ],

    ownerState.loading
      ? INPUT_LOADING_CLASS
      : "",

    ownerState.readOnly
      ? INPUT_READ_ONLY_CLASS
      : "",
  ];
}
