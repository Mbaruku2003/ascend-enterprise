/**
 * ============================================================================
 * Ascend UI
 * Divider Styles
 * ============================================================================
 */

import type {
  DividerOrientation,
  DividerSpacing,
  DividerVariant,
} from "./Divider.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_DIVIDER_ORIENTATION: DividerOrientation =
  "horizontal";

export const DEFAULT_DIVIDER_VARIANT: DividerVariant =
  "solid";

export const DEFAULT_DIVIDER_SPACING: DividerSpacing =
  "md";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export const DIVIDER_ROOT_CLASS =
  "shrink-0 border-border";

/* -------------------------------------------------------------------------- */
/* Orientation                                                                */
/* -------------------------------------------------------------------------- */

export const DIVIDER_ORIENTATION_CLASSES: Record<
  DividerOrientation,
  string
> = {
  horizontal:
    "w-full border-t",

  vertical:
    "h-full border-l self-stretch",
};

/* -------------------------------------------------------------------------- */
/* Variant                                                                    */
/* -------------------------------------------------------------------------- */

export const DIVIDER_VARIANT_CLASSES: Record<
  DividerVariant,
  string
> = {
  solid:
    "border-solid",

  dashed:
    "border-dashed",

  dotted:
    "border-dotted",
};

/* -------------------------------------------------------------------------- */
/* Spacing                                                                    */
/* -------------------------------------------------------------------------- */

export const DIVIDER_SPACING_CLASSES: Record<
  DividerSpacing,
  string
> = {
  none: "",

  xs: "my-1 mx-1",

  sm: "my-2 mx-2",

  md: "my-4 mx-4",

  lg: "my-6 mx-6",

  xl: "my-8 mx-8",
};

/* -------------------------------------------------------------------------- */
/* Resolver                                                                   */
/* -------------------------------------------------------------------------- */

export function resolveDividerClasses({
  orientation,
  variant,
  spacing,
}: {
  orientation: DividerOrientation;
  variant: DividerVariant;
  spacing: DividerSpacing;
}) {
  return [
    DIVIDER_ROOT_CLASS,

    DIVIDER_ORIENTATION_CLASSES[
      orientation
    ],

    DIVIDER_VARIANT_CLASSES[
      variant
    ],

    orientation === "horizontal"
      ? DIVIDER_SPACING_CLASSES[
          spacing
        ].replace(
          /mx-\d+/g,
          "",
        )
      : DIVIDER_SPACING_CLASSES[
          spacing
        ].replace(
          /my-\d+/g,
          "",
        ),
  ];
}
