import {
  TYPOGRAPHY_ALIGNMENT,
  TYPOGRAPHY_DECORATION,
  TYPOGRAPHY_SIZE,
  TYPOGRAPHY_STATUS,
  TYPOGRAPHY_TRANSFORM,
  TYPOGRAPHY_WEIGHT,
} from "../shared/typography";

import type {
  ComponentSize,
} from "../shared";

import type {
  TextAlign,
  TextDecoration,
  TextOwnerState,
  TextTransform,
  TextVariant,
  TextWeight,
} from "./Text.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_TEXT_VARIANT: TextVariant = "body";

export const DEFAULT_TEXT_SIZE: ComponentSize = "md";

export const DEFAULT_TEXT_WEIGHT: TextWeight = "normal";

export const DEFAULT_TEXT_ALIGN: TextAlign = "left";

export const DEFAULT_TEXT_TRANSFORM: TextTransform = "none";

export const DEFAULT_TEXT_DECORATION: TextDecoration = "none";

/* -------------------------------------------------------------------------- */
/* Base Classes                                                               */
/* -------------------------------------------------------------------------- */

export const TEXT_BASE_CLASSES = [
  "text-foreground",
  "leading-normal",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Variants                                                                   */
/* -------------------------------------------------------------------------- */

export const TEXT_VARIANT_CLASSES: Record<TextVariant, string> = {
  body: "",

  caption: "text-muted-foreground",

  overline:
    "uppercase tracking-widest text-xs",

  code:
    "font-mono rounded bg-muted px-1 py-0.5",

  muted: "text-muted-foreground",

  lead: "text-lg text-muted-foreground",
};

/* -------------------------------------------------------------------------- */
/* Resolver                                                                   */
/* -------------------------------------------------------------------------- */

export function resolveTextClasses(
  ownerState: TextOwnerState,
): string[] {
  return [
    TEXT_VARIANT_CLASSES[ownerState.variant],

    TYPOGRAPHY_SIZE[ownerState.size],

    TYPOGRAPHY_WEIGHT[ownerState.weight],

    TYPOGRAPHY_ALIGNMENT[ownerState.align],

    TYPOGRAPHY_TRANSFORM[
      ownerState.transform
    ],

    TYPOGRAPHY_DECORATION[
      ownerState.decoration
    ],

    ownerState.status
      ? TYPOGRAPHY_STATUS[
          ownerState.status
        ]
      : "",

    ownerState.truncate
      ? "truncate"
      : "",

    ownerState.inline
      ? "inline"
      : "block",
  ];
}
