/**
 * ============================================================================
 * Ascend UI
 * Shared Form Styles
 * ============================================================================
 *
 * Shared styling primitives used by every form control and form molecule.
 *
 * ============================================================================
 */

import type {
  FieldOwnerState,
  FieldSize,
  FieldState,
  LabelPlacement,
} from "./field.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_FIELD_SIZE: FieldSize = "md";

export const DEFAULT_FIELD_STATE: FieldState = "default";

export const DEFAULT_LABEL_PLACEMENT: LabelPlacement = "top";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export const FIELD_ROOT_CLASSES =
  "flex gap-2";

export const FIELD_FULL_WIDTH_CLASS =
  "w-full";

/* -------------------------------------------------------------------------- */
/* Layout                                                                     */
/* -------------------------------------------------------------------------- */

export const FIELD_CONTENT_CLASSES =
  "flex flex-col gap-2 min-w-0";

export const FIELD_HEADER_CLASSES =
  "flex items-center justify-between gap-2";

export const FIELD_FOOTER_CLASSES =
  "flex flex-col gap-1";

export const FIELD_ACTION_CLASSES =
  "shrink-0";

/* -------------------------------------------------------------------------- */
/* Label Placement                                                            */
/* -------------------------------------------------------------------------- */

export const FIELD_LABEL_PLACEMENT_CLASSES: Record<
  LabelPlacement,
  string
> = {
  top:
    "flex flex-col",

  left:
    "flex flex-row items-center gap-4",

  right:
    "flex flex-row-reverse items-center gap-4",

  hidden:
    "flex flex-col",
};

/* -------------------------------------------------------------------------- */
/* Sizes                                                                      */
/* -------------------------------------------------------------------------- */

export const FIELD_SIZE_CLASSES: Record<
  FieldSize,
  string
> = {
  sm:
    "text-sm",

  md:
    "text-base",

  lg:
    "text-lg",
};

/* -------------------------------------------------------------------------- */
/* Validation State                                                           */
/* -------------------------------------------------------------------------- */

export const FIELD_STATE_CLASSES: Record<
  FieldState,
  string
> = {
  default:
    "border-border focus-within:border-primary",

  success:
    "border-success focus-within:border-success",

  warning:
    "border-warning focus-within:border-warning",

  error:
    "border-destructive focus-within:border-destructive",
};

/* -------------------------------------------------------------------------- */
/* Messages                                                                   */
/* -------------------------------------------------------------------------- */

export const FIELD_DESCRIPTION_CLASSES =
  "text-sm text-muted-foreground";

export const FIELD_HELPER_CLASSES =
  "text-sm text-muted-foreground";

export const FIELD_ERROR_CLASSES =
  "text-sm text-destructive";

export const FIELD_REQUIRED_INDICATOR_CLASSES =
  "text-destructive ml-1";

/* -------------------------------------------------------------------------- */
/* Disabled                                                                   */
/* -------------------------------------------------------------------------- */

export const FIELD_DISABLED_CLASS =
  "opacity-60 pointer-events-none";

/* -------------------------------------------------------------------------- */
/* Resolver                                                                   */
/* -------------------------------------------------------------------------- */

export function resolveFieldClasses(
  ownerState: FieldOwnerState,
): string[] {
  return [
    FIELD_LABEL_PLACEMENT_CLASSES[
      ownerState.labelPlacement
    ],

    FIELD_SIZE_CLASSES[
      ownerState.size
    ],

    FIELD_STATE_CLASSES[
      ownerState.state
    ],

    ownerState.fullWidth
      ? FIELD_FULL_WIDTH_CLASS
      : "",

    ownerState.disabled
      ? FIELD_DISABLED_CLASS
      : "",
  ];
}
