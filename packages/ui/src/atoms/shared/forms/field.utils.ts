/**
 * ============================================================================
 * Ascend UI
 * Shared Form Utilities
 * ============================================================================
 *
 * Shared utilities for validation, accessibility, ARIA attributes,
 * and common field content helpers.
 *
 * ============================================================================
 */

import type {
  FieldOwnerState,
  FieldState,
} from "./field.types";

/* -------------------------------------------------------------------------- */
/* Validation                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * Returns true when the field is in an error state.
 */
export function isFieldInvalid(
  state: FieldState,
): boolean {
  return state === "error";
}

/**
 * Returns true when the field is in a success state.
 */
export function isFieldSuccessful(
  state: FieldState,
): boolean {
  return state === "success";
}

/**
 * Returns true when the field is in a warning state.
 */
export function isFieldWarning(
  state: FieldState,
): boolean {
  return state === "warning";
}

/**
 * Returns true when the field has any validation state.
 */
export function hasValidationState(
  state: FieldState,
): boolean {
  return (
    state === "error" ||
    state === "warning" ||
    state === "success"
  );
}

/* -------------------------------------------------------------------------- */
/* Accessibility                                                              */
/* -------------------------------------------------------------------------- */

export interface FieldAccessibilityOptions {
  /**
   * Space-separated IDs describing the field.
   */
  describedBy?: string;

  /**
   * Label element ID.
   */
  labelledBy?: string;

  /**
   * Error message element ID.
   */
  errorMessageId?: string;

  /**
   * Indicates an asynchronous operation.
   */
  busy?: boolean;

  /**
   * Read-only state.
   */
  readOnly?: boolean;
}

/**
 * Builds ARIA attributes for a field.
 *
 * Safe to spread directly onto form controls.
 */
export function getFieldAccessibility(
  ownerState: FieldOwnerState,
  options: FieldAccessibilityOptions = {},
) {
  return {
    "aria-invalid":
      ownerState.state === "error"
        ? true
        : undefined,

    "aria-required":
      ownerState.required
        ? true
        : undefined,

    "aria-disabled":
      ownerState.disabled
        ? true
        : undefined,

    "aria-describedby":
      options.describedBy,

    "aria-labelledby":
      options.labelledBy,

    "aria-errormessage":
      ownerState.state === "error"
        ? options.errorMessageId
        : undefined,

    "aria-busy":
      options.busy
        ? true
        : undefined,

    "aria-readonly":
      options.readOnly
        ? true
        : undefined,
  };
}

/* -------------------------------------------------------------------------- */
/* ARIA Helpers                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Merges multiple IDs into a single
 * aria-describedby value.
 */
export function buildDescribedBy(
  ...ids: Array<string | undefined | null>
): string | undefined {
  const value = ids
    .filter(Boolean)
    .join(" ");

  return value.length > 0
    ? value
    : undefined;
}

/* -------------------------------------------------------------------------- */
/* Content Helpers                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Returns true when content exists.
 */
export function hasContent(
  value: unknown,
): boolean {
  return value !== null &&
    value !== undefined;
}

/**
 * Returns true when helper text exists.
 *
 * Kept for backward compatibility.
 */
export function hasHelperText(
  helperText: unknown,
): boolean {
  return hasContent(helperText);
}

/**
 * Returns true when an error message exists.
 *
 * Kept for backward compatibility.
 */
export function hasErrorMessage(
  errorMessage: unknown,
): boolean {
  return hasContent(errorMessage);
}
