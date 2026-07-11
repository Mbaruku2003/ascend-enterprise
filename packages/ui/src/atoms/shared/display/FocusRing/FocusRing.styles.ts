/**
 * ============================================================================
 * Ascend UI
 * FocusRing Styles
 * ============================================================================
 */

import type {
  FocusRingVariant,
} from "./FocusRing.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_FOCUS_RING_VARIANT: FocusRingVariant =
  "default";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export const FOCUS_RING_ROOT_CLASS =
  "outline-none";

/* -------------------------------------------------------------------------- */
/* Variants                                                                   */
/* -------------------------------------------------------------------------- */

export const FOCUS_RING_VARIANT_CLASSES: Record<
  FocusRingVariant,
  string
> = {
  default:
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",

  inset:
    "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring",

  none: "",
};

/* -------------------------------------------------------------------------- */
/* Resolver                                                                   */
/* -------------------------------------------------------------------------- */

export function resolveFocusRingClasses({
  variant,
  disabled,
}: {
  variant: FocusRingVariant;
  disabled: boolean;
}) {
  return [
    FOCUS_RING_ROOT_CLASS,

    disabled
      ? ""
      : FOCUS_RING_VARIANT_CLASSES[
          variant
        ],
  ];
}
