/**
 * ============================================================================
 * Ascend UI
 * CheckboxGroup Types
 * ============================================================================
 */

import type {
  ReactNode,
} from "react";

import type {
  FieldProps,
} from "../../../atoms/shared/forms";

/* -------------------------------------------------------------------------- */
/* Layout                                                                     */
/* -------------------------------------------------------------------------- */

export type CheckboxGroupOrientation =
  | "vertical"
  | "horizontal";

/* -------------------------------------------------------------------------- */
/* Option                                                                     */
/* -------------------------------------------------------------------------- */

export interface CheckboxOption {
  /**
   * Option value.
   */
  value: string;

  /**
   * Display label.
   */
  label: ReactNode;

  /**
   * Optional description.
   */
  description?: ReactNode;

  /**
   * Disabled option.
   */
  disabled?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface CheckboxGroupProps
  extends Omit<FieldProps, "children"> {
  /**
   * Checkbox options.
   */
  options: CheckboxOption[];

  /**
   * Selected values.
   */
  value?: string[];

  /**
   * Default selected values.
   */
  defaultValue?: string[];

  /**
   * Value change callback.
   */
  onValueChange?(
    value: string[],
  ): void;

  /**
   * Layout orientation.
   *
   * @default "vertical"
   */
  orientation?: CheckboxGroupOrientation;

  /**
   * Space between items.
   *
   * @default "md"
   */
  spacing?: "sm" | "md" | "lg";
}

/* -------------------------------------------------------------------------- */
/* Owner State                                                                */
/* -------------------------------------------------------------------------- */

export interface CheckboxGroupOwnerState {
  orientation: CheckboxGroupOrientation;

  spacing: "sm" | "md" | "lg";

  disabled: boolean;
}
