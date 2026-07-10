/**
 * ============================================================================
 * Ascend UI
 * SwitchGroup Styles
 * ============================================================================
 */

import type {
  SwitchGroupOrientation,
  SwitchGroupOwnerState,
  SwitchGroupSpacing,
} from "./SwitchGroup.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_SWITCH_GROUP_ORIENTATION: SwitchGroupOrientation =
  "vertical";

export const DEFAULT_SWITCH_GROUP_SPACING: SwitchGroupSpacing =
  "md";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export const SWITCH_GROUP_ROOT_CLASSES = [
  "flex",
  "w-full",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Orientation                                                                */
/* -------------------------------------------------------------------------- */

export const SWITCH_GROUP_ORIENTATION_CLASSES: Record<
  SwitchGroupOrientation,
  string
> = {
  vertical: "flex-col",

  horizontal:
    "flex-row flex-wrap items-start",
};

/* -------------------------------------------------------------------------- */
/* Spacing                                                                    */
/* -------------------------------------------------------------------------- */

export const SWITCH_GROUP_SPACING_CLASSES: Record<
  SwitchGroupSpacing,
  string
> = {
  sm: "gap-2",

  md: "gap-3",

  lg: "gap-4",
};

/* -------------------------------------------------------------------------- */
/* Disabled                                                                   */
/* -------------------------------------------------------------------------- */

export const SWITCH_GROUP_DISABLED_CLASS =
  "opacity-60";

/* -------------------------------------------------------------------------- */
/* Resolver                                                                   */
/* -------------------------------------------------------------------------- */

export function resolveSwitchGroupClasses(
  ownerState: SwitchGroupOwnerState,
): string[] {
  return [
    SWITCH_GROUP_ROOT_CLASSES,

    SWITCH_GROUP_ORIENTATION_CLASSES[
      ownerState.orientation
    ],

    SWITCH_GROUP_SPACING_CLASSES[
      ownerState.spacing
    ],

    ownerState.disabled
      ? SWITCH_GROUP_DISABLED_CLASS
      : "",
  ];
}
