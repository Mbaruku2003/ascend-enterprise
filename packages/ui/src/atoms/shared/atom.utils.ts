/**
 * ============================================================================
 * Ascend UI
 * Shared Atom Utilities
 * ============================================================================
 *
 * Shared utility functions used by all Atom components.
 *
 * This file intentionally contains no React components.
 *
 * ============================================================================
 */

import type { ComponentOwnerState } from "./atom.types";

/* -------------------------------------------------------------------------- */
/* Class Name Utilities                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Safely joins CSS class names.
 */
export function cn(
  ...classes: Array<string | undefined | null | false>
): string {
  return classes.filter(Boolean).join(" ");
}

/* -------------------------------------------------------------------------- */
/* Boolean Utilities                                                          */
/* -------------------------------------------------------------------------- */

/**
 * Returns true if the component should behave as disabled.
 *
 * Loading components are automatically considered disabled.
 */
export function isDisabled(
  disabled?: boolean,
  loading?: boolean,
): boolean {
  return Boolean(disabled || loading);
}

/**
 * Convenience overload using a shared owner state.
 */
export function resolveDisabledState(
  ownerState: ComponentOwnerState,
): boolean {
  return isDisabled(ownerState.disabled, ownerState.loading);
}

/* -------------------------------------------------------------------------- */
/* Width                                                                      */
/* -------------------------------------------------------------------------- */

export function resolveFullWidth(
  fullWidth?: boolean,
): string {
  return fullWidth ? "w-full" : "";
}

/* -------------------------------------------------------------------------- */
/* Loading                                                                    */
/* -------------------------------------------------------------------------- */

export function resolveLoadingState(
  loading?: boolean,
): boolean {
  return Boolean(loading);
}

/* -------------------------------------------------------------------------- */
/* Accessibility                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Returns accessibility props for loading components.
 */
export function getLoadingAccessibility(
  loading?: boolean,
) {
  if (!loading) {
    return {};
  }

  return {
    "aria-busy": true,
    "aria-live": "polite" as const,
  };
}

/* -------------------------------------------------------------------------- */
/* Icons                                                                      */
/* -------------------------------------------------------------------------- */

export function hasLeftIcon(icon: unknown): boolean {
  return icon !== null && icon !== undefined;
}

export function hasRightIcon(icon: unknown): boolean {
  return icon !== null && icon !== undefined;
}

/* -------------------------------------------------------------------------- */
/* Children                                                                   */
/* -------------------------------------------------------------------------- */

export function hasChildren(
  children: unknown,
): boolean {
  return children !== null && children !== undefined;
}

/* -------------------------------------------------------------------------- */
/* Icon Only                                                                  */
/* -------------------------------------------------------------------------- */

export function isIconOnly(
  iconOnly?: boolean,
): boolean {
  return Boolean(iconOnly);
}

/* -------------------------------------------------------------------------- */
/* Development Utilities                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Small assertion helper for internal component development.
 */
export function invariant(
  condition: unknown,
  message: string,
): asserts condition {
  if (!condition) {
    throw new Error(`[Ascend UI] ${message}`);
  }
}
