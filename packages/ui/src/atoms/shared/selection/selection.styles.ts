/**
 * ============================================================================
 * Ascend UI
 * Shared Selection Styles
 * ============================================================================
 */

import type {
  SelectionOwnerState,
  SelectionShape,
  SelectionSize,
} from "./selection.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_SELECTION_SIZE: SelectionSize = "md";

export const DEFAULT_SELECTION_SHAPE: SelectionShape = "rounded";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export const SELECTION_ROOT_CLASSES = [
  "inline-flex",
  "items-start",
  "gap-3",
  "cursor-pointer",
  "select-none",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Control                                                                     */
/* -------------------------------------------------------------------------- */

export const SELECTION_CONTROL_CLASSES = [
  "relative",
  "flex",
  "items-center",
  "justify-center",
  "border",
  "transition-all",
  "duration-200",
  "shrink-0",
  "outline-none",
  "ring-offset-background",
  "focus-visible:ring-2",
  "focus-visible:ring-primary",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Sizes                                                                      */
/* -------------------------------------------------------------------------- */

export const SELECTION_SIZE_CLASSES: Record<
  SelectionSize,
  string
> = {
  sm: "h-4 w-4",

  md: "h-5 w-5",

  lg: "h-6 w-6",
};

/* -------------------------------------------------------------------------- */
/* Shapes                                                                     */
/* -------------------------------------------------------------------------- */

export const SELECTION_SHAPE_CLASSES: Record<
  SelectionShape,
  string
> = {
  rounded: "rounded-md",

  square: "rounded-none",

  circle: "rounded-full",
};

/* -------------------------------------------------------------------------- */
/* States                                                                     */
/* -------------------------------------------------------------------------- */

export const SELECTION_CHECKED_CLASS =
  "bg-primary border-primary text-primary-foreground";

export const SELECTION_DISABLED_CLASS =
  "opacity-50 cursor-not-allowed";

export const SELECTION_INDETERMINATE_CLASS =
  "bg-primary border-primary";

/* -------------------------------------------------------------------------- */
/* Label                                                                      */
/* -------------------------------------------------------------------------- */

export const SELECTION_CONTENT_CLASSES = [
  "flex",
  "flex-col",
  "gap-1",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Resolver                                                                   */
/* -------------------------------------------------------------------------- */

export function resolveSelectionClasses(
  ownerState: SelectionOwnerState,
): string[] {
  return [
    SELECTION_SIZE_CLASSES[
      ownerState.size
    ],

    SELECTION_SHAPE_CLASSES[
      ownerState.shape
    ],

    ownerState.checked
      ? SELECTION_CHECKED_CLASS
      : "",

    ownerState.indeterminate
      ? SELECTION_INDETERMINATE_CLASS
      : "",

    ownerState.disabled
      ? SELECTION_DISABLED_CLASS
      : "",
  ];
}
