/**
 * ============================================================================
 * Ascend UI
 * Shared Form Variants
 * ============================================================================
 *
 * Shared visual variants used by all form controls.
 *
 * Used by:
 * - Input
 * - Textarea
 * - Select
 * - Combobox
 * - SearchInput
 * - DatePicker
 * - PhoneInput
 *
 * ============================================================================
 */

import type { FieldState } from "./field.types";

/* -------------------------------------------------------------------------- */
/* Field Variants                                                             */
/* -------------------------------------------------------------------------- */

export type FieldVariant =
  | "outlined"
  | "filled"
  | "plain"
  | "flush"
  | "ghost";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_FIELD_VARIANT: FieldVariant = "outlined";

/* -------------------------------------------------------------------------- */
/* Base                                                                       */
/* -------------------------------------------------------------------------- */

export const FIELD_VARIANT_BASE_CLASSES = [
  "relative",
  "flex",
  "items-center",
  "transition-colors",
  "duration-200",
  "rounded-md",
  "border",
  "bg-background",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Variant Classes                                                            */
/* -------------------------------------------------------------------------- */

export const FIELD_VARIANT_CLASSES: Record<
  FieldVariant,
  string
> = {
  outlined: [
    "border-border",
    "bg-background",
    "focus-within:border-primary",
    "focus-within:ring-2",
    "focus-within:ring-primary/20",
  ].join(" "),

  filled: [
    "border-transparent",
    "bg-muted",
    "focus-within:bg-background",
    "focus-within:border-primary",
    "focus-within:ring-2",
    "focus-within:ring-primary/20",
  ].join(" "),

  ghost: [
    "border-transparent",
    "bg-transparent",
    "focus-within:border-primary",
    "focus-within:bg-background",
  ].join(" "),
  
  plain: [
  "border-transparent",
  "bg-transparent",
  "shadow-none",
  "focus-within:border-transparent",
  "focus-within:ring-0",
].join(" "),

  flush: [
  "rounded-none",
  "border-x-0",
  "border-t-0",
  "border-b",
  "bg-transparent",
  "focus-within:ring-0",
].join(" "),

};

/* -------------------------------------------------------------------------- */
/* Validation Overrides                                                       */
/* -------------------------------------------------------------------------- */

export const FIELD_STATE_VARIANT_CLASSES: Record<
  FieldState,
  string
> = {
  default: "",

  success: [
    "border-success",
    "focus-within:border-success",
    "focus-within:ring-success/20",
  ].join(" "),

  warning: [
    "border-warning",
    "focus-within:border-warning",
    "focus-within:ring-warning/20",
  ].join(" "),

  error: [
    "border-destructive",
    "focus-within:border-destructive",
    "focus-within:ring-destructive/20",
  ].join(" "),
};

/* -------------------------------------------------------------------------- */
/* Resolver                                                                   */
/* -------------------------------------------------------------------------- */

export function resolveFieldVariantClasses(
  variant: FieldVariant,
  state: FieldState,
): string[] {
  return [
    FIELD_VARIANT_BASE_CLASSES,
    FIELD_VARIANT_CLASSES[variant],
    FIELD_STATE_VARIANT_CLASSES[state],
  ];
}

export const FIELD_VARIANT_DISABLED_CLASS =
  "opacity-60 cursor-not-allowed";
