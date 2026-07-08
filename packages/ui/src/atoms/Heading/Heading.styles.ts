import {
  TYPOGRAPHY_ALIGNMENT,
  TYPOGRAPHY_STATUS,
  TYPOGRAPHY_TRANSFORM,
} from "../shared/typography";

import type {
  HeadingAlign,
  HeadingOwnerState,
  HeadingTransform,
  HeadingVariant,
  HeadingWeight,
} from "./Heading.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_HEADING_LEVEL = 2;

export const DEFAULT_HEADING_VARIANT: HeadingVariant = "title";

export const DEFAULT_HEADING_WEIGHT: HeadingWeight = "bold";

export const DEFAULT_HEADING_ALIGN: HeadingAlign = "left";

export const DEFAULT_HEADING_TRANSFORM: HeadingTransform = "none";

/* -------------------------------------------------------------------------- */
/* Base                                                                       */
/* -------------------------------------------------------------------------- */

export const HEADING_BASE_CLASSES = [
  "text-foreground",
  "tracking-tight",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Visual Scale                                                               */
/* -------------------------------------------------------------------------- */

export const HEADING_VARIANT_CLASSES: Record<
  HeadingVariant,
  string
> = {
  display: "text-5xl leading-tight",

  title: "text-3xl leading-tight",

  subtitle: "text-xl leading-snug",

  section: "text-lg leading-snug",
};

/* -------------------------------------------------------------------------- */
/* Font Weight                                                                */
/* -------------------------------------------------------------------------- */

export const HEADING_WEIGHT_CLASSES: Record<
  HeadingWeight,
  string
> = {
  normal: "font-normal",

  medium: "font-medium",

  semibold: "font-semibold",

  bold: "font-bold",

  extrabold: "font-extrabold",
};

/* -------------------------------------------------------------------------- */
/* Resolver                                                                   */
/* -------------------------------------------------------------------------- */

export function resolveHeadingClasses(
  ownerState: HeadingOwnerState,
): string[] {
  return [
    HEADING_VARIANT_CLASSES[ownerState.variant],

    HEADING_WEIGHT_CLASSES[ownerState.weight],

    TYPOGRAPHY_ALIGNMENT[ownerState.align],

    TYPOGRAPHY_TRANSFORM[
      ownerState.transform
    ],

    ownerState.status
      ? TYPOGRAPHY_STATUS[
          ownerState.status
        ]
      : "",

    ownerState.truncate
      ? "truncate"
      : "",
  ];
}
