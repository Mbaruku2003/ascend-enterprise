/**
 * ============================================================================
 * Ascend UI
 * ScrollArea Styles
 * ============================================================================
 */

import type {
  ScrollOrientation,
  ScrollbarVisibility,
} from "./ScrollArea.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_SCROLL_ORIENTATION: ScrollOrientation =
  "vertical";

export const DEFAULT_SCROLLBAR_VISIBILITY: ScrollbarVisibility =
  "auto";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export const SCROLL_AREA_ROOT_CLASS =
  "relative";

/* -------------------------------------------------------------------------- */
/* Orientation                                                                */
/* -------------------------------------------------------------------------- */

export const SCROLL_ORIENTATION_CLASSES: Record<
  ScrollOrientation,
  string
> = {
  vertical: "overflow-y-auto overflow-x-hidden",

  horizontal: "overflow-x-auto overflow-y-hidden",

  both: "overflow-auto",
};

/* -------------------------------------------------------------------------- */
/* Scrollbar                                                                  */
/* -------------------------------------------------------------------------- */

export const SCROLLBAR_VISIBILITY_CLASSES: Record<
  ScrollbarVisibility,
  string
> = {
  auto: "",

  always: "",

  hover:
    "scrollbar-hover",

  never:
    "scrollbar-none",
};

/* -------------------------------------------------------------------------- */
/* Resolver                                                                   */
/* -------------------------------------------------------------------------- */

export function resolveScrollAreaClasses({
  orientation,
  scrollbar,
}: {
  orientation: ScrollOrientation;
  scrollbar: ScrollbarVisibility;
}) {
  return [
    SCROLL_AREA_ROOT_CLASS,

    SCROLL_ORIENTATION_CLASSES[
      orientation
    ],

    SCROLLBAR_VISIBILITY_CLASSES[
      scrollbar
    ],
  ];
}
