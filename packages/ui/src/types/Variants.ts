/**
 * Ascend Enterprise UI
 * --------------------
 * Variants
 *
 * Shared variant types used throughout the design system.
 *
 * Defining these in one place ensures a consistent API across
 * every component (Button, Input, Badge, Card, Avatar, etc.).
 */

/* -------------------------------------------------------------------------- */
/* Size                                                                       */
/* -------------------------------------------------------------------------- */

export const SIZES = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
] as const;

export type Size = (typeof SIZES)[number];

/* -------------------------------------------------------------------------- */
/* Radius                                                                     */
/* -------------------------------------------------------------------------- */

export const RADII = [
  "none",
  "sm",
  "md",
  "lg",
  "xl",
  "full",
] as const;

export type Radius = (typeof RADII)[number];

/* -------------------------------------------------------------------------- */
/* Elevation                                                                  */
/* -------------------------------------------------------------------------- */

export const ELEVATIONS = [
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
] as const;

export type Elevation = (typeof ELEVATIONS)[number];

/* -------------------------------------------------------------------------- */
/* Intent                                                                      */
/* -------------------------------------------------------------------------- */

export const INTENTS = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
  "neutral",
] as const;

export type Intent = (typeof INTENTS)[number];

/* -------------------------------------------------------------------------- */
/* Variant                                                                    */
/* -------------------------------------------------------------------------- */

export const VARIANTS = [
  "solid",
  "soft",
  "outline",
  "ghost",
  "link",
] as const;

export type Variant = (typeof VARIANTS)[number];

/* -------------------------------------------------------------------------- */
/* Tone                                                                       */
/* -------------------------------------------------------------------------- */

export const TONES = [
  "default",
  "subtle",
  "muted",
  "inverse",
] as const;

export type Tone = (typeof TONES)[number];

/* -------------------------------------------------------------------------- */
/* Alignment                                                                  */
/* -------------------------------------------------------------------------- */

export const ALIGNMENTS = [
  "start",
  "center",
  "end",
  "stretch",
] as const;

export type Alignment = (typeof ALIGNMENTS)[number];

/* -------------------------------------------------------------------------- */
/* Justification                                                              */
/* -------------------------------------------------------------------------- */

export const JUSTIFICATIONS = [
  "start",
  "center",
  "end",
  "between",
  "around",
  "evenly",
] as const;

export type Justification = (typeof JUSTIFICATIONS)[number];

/* -------------------------------------------------------------------------- */
/* Orientation                                                                */
/* -------------------------------------------------------------------------- */

export const ORIENTATIONS = [
  "horizontal",
  "vertical",
] as const;

export type Orientation = (typeof ORIENTATIONS)[number];

/* -------------------------------------------------------------------------- */
/* State                                                                      */
/* -------------------------------------------------------------------------- */

export const STATES = [
  "default",
  "active",
  "disabled",
  "loading",
  "selected",
] as const;

export type State = (typeof STATES)[number];
