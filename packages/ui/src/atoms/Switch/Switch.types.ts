/**
 * ============================================================================
 * Ascend UI
 * Switch Types
 * ============================================================================
 */

import type { ReactNode } from "react";

import type {
  SelectionControlProps,
} from "../shared/selection";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface SwitchProps
  extends Omit<
    SelectionControlProps,
    "type" | "indeterminate" | "shape"
  > {
  /**
   * Switch label.
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

export interface SwitchOwnerState {
  checked: boolean;

  disabled: boolean;
}
