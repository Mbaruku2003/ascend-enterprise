/**
 * ============================================================================
 * Ascend UI
 * Radio Types
 * ============================================================================
 */

import type { ReactNode } from "react";

import type {
  SelectionControlProps,
} from "../shared/selection";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface RadioProps
  extends Omit<
    SelectionControlProps,
    "type" | "indeterminate"
  > {
  /**
   * Radio label.
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

export interface RadioOwnerState {
  checked: boolean;

  disabled: boolean;
}
