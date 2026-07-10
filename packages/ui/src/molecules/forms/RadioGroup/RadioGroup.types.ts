/**
 * ============================================================================
 * Ascend UI
 * RadioGroup Types
 * ============================================================================
 *
 * High-level RadioGroup component built on top of the shared forms and
 * selection infrastructure.
 *
 * ============================================================================
 */

import type {
  ReactNode,
} from "react";

import type {
  FieldProps,
} from "../../../atoms/shared/forms";

/* -------------------------------------------------------------------------- */
/* Orientation                                                                */
/* -------------------------------------------------------------------------- */

export type RadioGroupOrientation =
  | "vertical"
  | "horizontal";

/* -------------------------------------------------------------------------- */
/* Spacing                                                                    */
/* -------------------------------------------------------------------------- */

export type RadioGroupSpacing =
  | "sm"
  | "md"
  | "lg";

/* -------------------------------------------------------------------------- */
/* Option                                                                     */
/* -------------------------------------------------------------------------- */

export interface RadioOption {
  /**
   * Radio value.
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

export interface RadioGroupProps
  extends Omit<FieldProps, "children"> {
  /**
   * Radio options.
   */
  options: RadioOption[];

  /**
   * Controlled value.
   */
  value?: string;

  /**
   * Default value.
   */
  defaultValue?: string;

  /**
   * Value change callback.
   */
  onValueChange?(
    value: string,
  ): void;

  /**
   * Shared radio name.
   */
  name?: string;

  /**
   * Layout orientation.
   *
   * @default "vertical"
   */
  orientation?: RadioGroupOrientation;

  /**
   * Gap between radios.
   *
   * @default "md"
   */
  spacing?: RadioGroupSpacing;
}

/* -------------------------------------------------------------------------- */
/* Owner State                                                                */
/* -------------------------------------------------------------------------- */

export interface RadioGroupOwnerState {
  orientation: RadioGroupOrientation;

  spacing: RadioGroupSpacing;

  disabled: boolean;
}
