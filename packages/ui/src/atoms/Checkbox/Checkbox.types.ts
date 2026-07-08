/**
 * ============================================================================
 * Ascend UI
 * Checkbox Types
 * ============================================================================
 */

import type {
  ReactNode,
} from "react";

import type {
  SelectionControlProps,
} from "../shared/selection";

/* -------------------------------------------------------------------------- */
/* Checkbox Props                                                             */
/* -------------------------------------------------------------------------- */

export interface CheckboxProps
  extends Omit<
    SelectionControlProps,
    "type"
  > {
  /**
   * Checkbox label.
   */
  label?: ReactNode;

  /**
   * Optional description.
   */
  description?: ReactNode;

  /**
   * Controlled checked state.
   */
  checked?: boolean;

  /**
   * Default checked state.
   */
  defaultChecked?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Owner State                                                                */
/* -------------------------------------------------------------------------- */

export interface CheckboxOwnerState {
  checked: boolean;

  indeterminate: boolean;

  disabled: boolean;
}
