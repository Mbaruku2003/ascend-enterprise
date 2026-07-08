/**
 * ============================================================================
 * Ascend UI
 * Shared Selection Types
 * ============================================================================
 */

import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

import type {
  FieldProps,
} from "../forms";

/* -------------------------------------------------------------------------- */
/* Selection Size                                                             */
/* -------------------------------------------------------------------------- */

export type SelectionSize =
  | "sm"
  | "md"
  | "lg";

/* -------------------------------------------------------------------------- */
/* Selection Shape                                                            */
/* -------------------------------------------------------------------------- */

export type SelectionShape =
  | "rounded"
  | "square"
  | "circle";

/* -------------------------------------------------------------------------- */
/* Base Props                                                                 */
/* -------------------------------------------------------------------------- */

export interface SelectionControlProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      keyof FieldProps | "size"
    >,
    FieldProps {
  /**
   * Optional label.
   */
  label?: ReactNode;

  /**
   * Optional description.
   */
  description?: ReactNode;

  /**
   * Shared size.
   *
   * @default "md"
   */
  size?: SelectionSize;

  /**
   * Shape.
   */
  shape?: SelectionShape;

  /**
   * Indeterminate state.
   */
  indeterminate?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Owner State                                                                */
/* -------------------------------------------------------------------------- */

export interface SelectionOwnerState {
  size: SelectionSize;

  shape: SelectionShape;

  disabled: boolean;

  checked: boolean;

  indeterminate: boolean;
}
