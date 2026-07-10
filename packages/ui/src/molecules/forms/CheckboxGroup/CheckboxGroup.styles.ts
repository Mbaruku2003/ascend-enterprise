/**
 * ============================================================================
 * Ascend UI
 * CheckboxGroup Styles
 * ============================================================================
 *
 * Layout styles for CheckboxGroup.
 *
 * Responsible only for:
 * - Orientation
 * - Spacing
 * - Disabled appearance
 *
 * Checkbox visuals remain the responsibility of Checkbox.tsx and the shared
 * SelectionControl.
 *
 * ============================================================================
 */

import type {
  CheckboxGroupOwnerState,
  CheckboxGroupOrientation,
} from "./CheckboxGroup.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_CHECKBOX_GROUP_ORIENTATION: CheckboxGroupOrientation =
  "vertical";

export const DEFAULT_CHECKBOX_GROUP_SPACING =
  "md" as const;

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export const CHECKBOX_GROUP_ROOT_CLASSES = [
  "flex",
  "w-full",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Orientation                                                                */
/* -------------------------------------------------------------------------- */

export const CHECKBOX_GROUP_ORIENTATION_CLASSES: Record<
  CheckboxGroupOrientation,
  string
> = {
  vertical: [
    "flex-col",
  ].join(" "),

  horizontal: [
    "flex-row",
    "flex-wrap",
    "items-start",
  ].join(" "),
};

/* -------------------------------------------------------------------------- */
/* Spacing                                                                    */
/* -------------------------------------------------------------------------- */

export const CHECKBOX_GROUP_SPACING_CLASSES = {
  sm: "gap-2",

  md: "gap-3",

  lg: "gap-4",
} as const;

/* -------------------------------------------------------------------------- */
/* Disabled                                                                   */
/* -------------------------------------------------------------------------- */

export const CHECKBOX_GROUP_DISABLED_CLASS =
  "opacity-60";

/* -------------------------------------------------------------------------- */
/* Resolver                                                                   */
/* -------------------------------------------------------------------------- */

export function resolveCheckboxGroupClasses(
  ownerState: CheckboxGroupOwnerState,
): string[] {
  return [
    CHECKBOX_GROUP_ROOT_CLASSES,

    CHECKBOX_GROUP_ORIENTATION_CLASSES[
      ownerState.orientation
    ],

    CHECKBOX_GROUP_SPACING_CLASSES[
      ownerState.spacing
    ],

    ownerState.disabled
      ? CHECKBOX_GROUP_DISABLED_CLASS
      : "",
  ];
}
