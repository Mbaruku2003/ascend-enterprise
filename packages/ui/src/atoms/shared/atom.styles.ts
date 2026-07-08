/**
 * ============================================================================
 * Ascend UI
 * Shared Atom Styles
 * ============================================================================
 *
 * Central styling constants shared by all Atom components.
 *
 * This file intentionally contains NO React code.
 *
 * It provides:
 * - Transition classes
 * - Focus ring classes
 * - Disabled state classes
 * - Loading state classes
 * - Cursor classes
 * - Shadow classes
 * - Border radius classes
 *
 * ============================================================================
 */

/* -------------------------------------------------------------------------- */
/* Transition                                                                 */
/* -------------------------------------------------------------------------- */

export const ATOM_TRANSITION =
  "transition-all duration-200 ease-in-out";

/* -------------------------------------------------------------------------- */
/* Focus Ring                                                                 */
/* -------------------------------------------------------------------------- */

export const ATOM_FOCUS_RING = [
  "focus-visible:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-primary",
  "focus-visible:ring-offset-2",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Disabled State                                                             */
/* -------------------------------------------------------------------------- */

export const ATOM_DISABLED = [
  "disabled:pointer-events-none",
  "disabled:opacity-50",
  "disabled:cursor-not-allowed",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Loading State                                                              */
/* -------------------------------------------------------------------------- */

export const ATOM_LOADING = [
  "cursor-progress",
  "select-none",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Cursor                                                                     */
/* -------------------------------------------------------------------------- */

export const ATOM_CURSOR_POINTER = "cursor-pointer";

export const ATOM_CURSOR_DEFAULT = "cursor-default";

/* -------------------------------------------------------------------------- */
/* User Select                                                                */
/* -------------------------------------------------------------------------- */

export const ATOM_SELECT_NONE = "select-none";

/* -------------------------------------------------------------------------- */
/* Common Border Radius                                                       */
/* -------------------------------------------------------------------------- */

export const ATOM_RADIUS = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
} as const;

/* -------------------------------------------------------------------------- */
/* Common Shadows                                                             */
/* -------------------------------------------------------------------------- */

export const ATOM_SHADOW = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
} as const;

/* -------------------------------------------------------------------------- */
/* Flex Alignment                                                             */
/* -------------------------------------------------------------------------- */

export const ATOM_INLINE_FLEX = [
  "inline-flex",
  "items-center",
  "justify-center",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Typography                                                                 */
/* -------------------------------------------------------------------------- */

export const ATOM_FONT_MEDIUM = "font-medium";

export const ATOM_FONT_SEMIBOLD = "font-semibold";

/* -------------------------------------------------------------------------- */
/* Common Interactive Base                                                    */
/* -------------------------------------------------------------------------- */

export const ATOM_INTERACTIVE_BASE = [
  ATOM_INLINE_FLEX,
  ATOM_FONT_MEDIUM,
  ATOM_SELECT_NONE,
  ATOM_TRANSITION,
  ATOM_FOCUS_RING,
  ATOM_DISABLED,
].join(" ");
