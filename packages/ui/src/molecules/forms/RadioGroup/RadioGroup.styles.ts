/**
 * ============================================================================
 * Ascend UI
 * RadioGroup Styles
 * ============================================================================
 *
 * Layout styles for RadioGroup.
 *
 * Responsible only for:
 * - Orientation
 * - Spacing
 * - Disabled appearance
 *
 * Radio visuals remain the responsibility of Radio.tsx and the shared
 * SelectionControl.
 *
 * ============================================================================
 */

import type {
  RadioGroupOrientation,
  RadioGroupOwnerState,
  RadioGroupSpacing,
} from "./RadioGroup.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_RADIO_GROUP_ORIENTATION: RadioGroupOrientation =
  "vertical";

export const DEFAULT_RADIO_GROUP_SPACING: RadioGroupSpacing =
  "md";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export const RADIO_GROUP_ROOT_CLASSES = [
  "flex",
  "w-full",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Orientation                                                                */
/* -------------------------------------------------------------------------- */

export const RADIO_GROUP_ORIENTATION_CLASSES: Record<
  RadioGroupOrientation,
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

export const RADIO_GROUP_SPACING_CLASSES: Record<
  RadioGroupSpacing,
  string
> = {
  sm: "gap-2",

  md: "gap-3",

  lg: "gap-4",
};

/* -------------------------------------------------------------------------- */
/* Disabled                                                                   */
/* -------------------------------------------------------------------------- */

export const RADIO_GROUP_DISABLED_CLASS =
  "opacity-60";

/* -------------------------------------------------------------------------- */
/* Resolver                                                                   */
/* -------------------------------------------------------------------------- */

export function resolveRadioGroupClasses(
  ownerState: RadioGroupOwnerState,
): string[] {
  return [
    RADIO_GROUP_ROOT_CLASSES,

    RADIO_GROUP_ORIENTATION_CLASSES[
      ownerState.orientation
    ],

    RADIO_GROUP_SPACING_CLASSES[
      ownerState.spacing
    ],

    ownerState.disabled
      ? RADIO_GROUP_DISABLED_CLASS
      : "",
  ];
}
