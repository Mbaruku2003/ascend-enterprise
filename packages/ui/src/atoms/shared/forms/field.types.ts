/**
 * ============================================================================
 * Ascend UI
 * Shared Form Types
 * ============================================================================
 */

import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

/* -------------------------------------------------------------------------- */
/* Validation State                                                           */
/* -------------------------------------------------------------------------- */

export type FieldState =
  | "default"
  | "success"
  | "warning"
  | "error";

/* -------------------------------------------------------------------------- */
/* Label Placement                                                            */
/* -------------------------------------------------------------------------- */

export type LabelPlacement =
  | "top"
  | "left"
  | "right"
  | "hidden";

/* -------------------------------------------------------------------------- */
/* Field Size                                                                 */
/* -------------------------------------------------------------------------- */

export type FieldSize =
  | "sm"
  | "md"
  | "lg";

/* -------------------------------------------------------------------------- */
/* Shared Field Props                                                         */
/* -------------------------------------------------------------------------- */

export interface FieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Field label.
   */
  label?: ReactNode;

  /**
   * Helper text.
   */
  helperText?: ReactNode;

  /**
   * Error message.
   */
  errorMessage?: ReactNode;

  /**
   * Validation state.
   *
   * @default "default"
   */
  state?: FieldState;

  /**
   * Marks field as required.
   */
  required?: boolean;

  /**
   * Full width field.
   */
  fullWidth?: boolean;

  /**
   * Field size.
   *
   * @default "md"
   */
  size?: FieldSize;

   /**
    * Label placement.
    *
    * @default "top"
    */
  labelPlacement?: LabelPlacement;
}

/* -------------------------------------------------------------------------- */
/* Owner State                                                                */
/* -------------------------------------------------------------------------- */

export interface FieldOwnerState {
  disabled: boolean;
  required: boolean;
  fullWidth: boolean;

  state: FieldState;

  size: FieldSize;

  labelPlacement: LabelPlacement;
}
