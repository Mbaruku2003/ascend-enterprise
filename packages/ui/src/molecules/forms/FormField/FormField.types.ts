/**
 * ============================================================================
 * Ascend UI
 * FormField Types
 * ============================================================================
 *
 * High-level form field molecule that composes the shared Field infrastructure.
 *
 * ============================================================================
 */

import type {
  ReactElement,
  ReactNode,
} from "react";

import type {
  FieldProps,
} from "../../../atoms/shared/forms";

/* -------------------------------------------------------------------------- */
/* Layout                                                                     */
/* -------------------------------------------------------------------------- */

export type FormFieldLayout =
  | "vertical"
  | "horizontal"
  | "inline";

/* -------------------------------------------------------------------------- */
/* Label Alignment                                                            */
/* -------------------------------------------------------------------------- */

export type FormFieldLabelAlignment =
  | "start"
  | "center"
  | "end";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface FormFieldProps
  extends Omit<FieldProps, "children"> {
  /**
   * Form control.
   *
   * Typically:
   * - Input
   * - Textarea
   * - Select
   * - Checkbox
   * - Radio
   * - Switch
   */
  children: ReactElement;

  /**
   * Optional field description rendered
   * before helper/error text.
   */
  description?: ReactNode;

  /**
   * Optional secondary action.
   *
   * Example:
   * - "Forgot password?"
   * - "Change"
   * - Help button
   */
  action?: ReactNode;

  /**
   * Field layout.
   *
   * @default "vertical"
   */
  layout?: FormFieldLayout;

  /**
   * Label alignment.
   *
   * @default "start"
   */
  labelAlignment?: FormFieldLabelAlignment;

  /**
   * Hide the label visually while keeping it
   * available to assistive technologies.
   *
   * @default false
   */
  hideLabel?: boolean;

  /**
   * Optional header content rendered
   * above the control.
   */
  header?: ReactNode;

  /**
   * Optional footer content rendered
   * below helper/error text.
   */
  footer?: ReactNode;
}

/* -------------------------------------------------------------------------- */
/* Owner State                                                                */
/* -------------------------------------------------------------------------- */

export interface FormFieldOwnerState {
  layout: FormFieldLayout;

  labelAlignment: FormFieldLabelAlignment;

  hideLabel: boolean;

  disabled: boolean;

  required: boolean;

  fullWidth: boolean;
}
