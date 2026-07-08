/**
 * ============================================================================
 * Ascend UI
 * Shared Typography
 * ============================================================================
 *
 * Shared typography mappings used by:
 *
 * • Text
 * • Heading
 * • Label
 * • Badge
 * • Table
 * • Card
 * • Alerts
 * • Future typography components
 *
 * ============================================================================
 */

import type {
  ComponentSize,
  ComponentStatus,
} from "./atom.types";

/* -------------------------------------------------------------------------- */
/* Font Sizes                                                                 */
/* -------------------------------------------------------------------------- */

export const TYPOGRAPHY_SIZE = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
} satisfies Record<ComponentSize, string>;

/* -------------------------------------------------------------------------- */
/* Font Weights                                                               */
/* -------------------------------------------------------------------------- */

export const TYPOGRAPHY_WEIGHT = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
} as const;

/* -------------------------------------------------------------------------- */
/* Line Heights                                                               */
/* -------------------------------------------------------------------------- */

export const TYPOGRAPHY_LINE_HEIGHT = {
  none: "leading-none",
  tight: "leading-tight",
  snug: "leading-snug",
  normal: "leading-normal",
  relaxed: "leading-relaxed",
  loose: "leading-loose",
} as const;

/* -------------------------------------------------------------------------- */
/* Text Alignment                                                             */
/* -------------------------------------------------------------------------- */

export const TYPOGRAPHY_ALIGNMENT = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
} as const;

/* -------------------------------------------------------------------------- */
/* Text Transform                                                             */
/* -------------------------------------------------------------------------- */

export const TYPOGRAPHY_TRANSFORM = {
  none: "",
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
} as const;

/* -------------------------------------------------------------------------- */
/* Decoration                                                                 */
/* -------------------------------------------------------------------------- */

export const TYPOGRAPHY_DECORATION = {
  none: "",
  underline: "underline",
  "line-through": "line-through",
} as const;

/* -------------------------------------------------------------------------- */
/* Semantic Colors                                                            */
/* -------------------------------------------------------------------------- */

export const TYPOGRAPHY_STATUS = {
  default: "",
  success: "text-success",
  warning: "text-warning",
  danger: "text-destructive",
  info: "text-info",
} satisfies Record<ComponentStatus, string>;
