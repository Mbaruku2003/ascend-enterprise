/**
 * ============================================================================
 * Ascend UI
 * Label Styles
 * ============================================================================
 */

import {
  TYPOGRAPHY_STATUS,
} from "../shared/typography";

import type {
  LabelOwnerState,
  LabelSize,
  LabelWeight,
} from "./Label.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_LABEL_SIZE: LabelSize = "md";

export const DEFAULT_LABEL_WEIGHT: LabelWeight = "medium";

/* -------------------------------------------------------------------------- */
/* Base                                                                       */
/* -------------------------------------------------------------------------- */

export const LABEL_BASE_CLASSES = [
  "inline-flex",
  "items-center",
  "gap-1",
  "leading-none",
  "select-none",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Sizes                                                                      */
/* -------------------------------------------------------------------------- */

export const LABEL_SIZE_CLASSES: Record<
  LabelSize,
  string
> = {
  sm: "text-xs",

  md: "text-sm",

  lg: "text-base",
};

/* -------------------------------------------------------------------------- */
/* Weight                                                                     */
/* -------------------------------------------------------------------------- */

export const LABEL_WEIGHT_CLASSES: Record<
  LabelWeight,
  string
> = {
  normal: "font-normal",

  medium: "font-medium",

  semibold: "font-semibold",

  bold: "font-bold",
};

/* -------------------------------------------------------------------------- */
/* Disabled                                                                   */
/* -------------------------------------------------------------------------- */

export const LABEL_DISABLED_CLASS =
  "opacity-60 cursor-not-allowed";

/* -------------------------------------------------------------------------- */
/* Screen Reader                                                              */
/* -------------------------------------------------------------------------- */

export const LABEL_SR_ONLY_CLASS =
  "sr-only";

/* -------------------------------------------------------------------------- */
/* Resolver                                                                   */
/* -------------------------------------------------------------------------- */

export function resolveLabelClasses(
  ownerState: LabelOwnerState,
): string[] {
  return [
    LABEL_SIZE_CLASSES[
      ownerState.size
    ],

    LABEL_WEIGHT_CLASSES[
      ownerState.weight
    ],

    ownerState.status
      ? TYPOGRAPHY_STATUS[
          ownerState.status
        ]
      : "",

    ownerState.disabled
      ? LABEL_DISABLED_CLASS
      : "",

    ownerState.srOnly
      ? LABEL_SR_ONLY_CLASS
      : "",
  ];
}
