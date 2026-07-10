/**
 * ============================================================================
 * Ascend UI
 * FormField Types
 * ============================================================================
 *
 * High-level form field molecule responsible for layout and composition.
 *
 * Responsibilities:
 * - Header
 * - Footer
 * - Actions
 * - Responsive layout
 * - Spacing
 *
 * Delegates accessibility, IDs, validation and messaging to the shared
 * Field infrastructure.
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
/* Spacing                                                                    */
/* -------------------------------------------------------------------------- */

export type FormFieldSpacing =
  | "sm"
  | "md"
  | "lg";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface FormFieldProps
  extends Omit<FieldProps, "children"> {
  /**
   * Form control.
   *
   * Examples:
   * - Input
   * - Textarea
   * - Select
   * - Checkbox
   * - Radio
   * - Switch
   */
  children: ReactElement;

  /**
   * Optional description rendered
   * before helper/error text.
   */
  description?: ReactNode;

  /**
   * Optional secondary action.
   *
   * Examples:
   * - Forgot password?
   * - Change
   * - Verify
   * - Help button
   */
  action?: ReactNode;

  /**
   * Layout mode.
   *
   * @default "vertical"
   */
  layout?: FormFieldLayout;

  /**
   * Label alignment.
   *
   * Only applies to layouts where the
   * label is positioned separately.
   *
   * @default "start"
   */
  labelAlignment?: FormFieldLabelAlignment;

  /**
   * Vertical spacing between the field
   * sections.
   *
   * @default "md"
   */
  spacing?: FormFieldSpacing;

  /**
   * Optional content rendered above
   * the field.
   */
  header?: ReactNode;

  /**
   * Optional content rendered below
   * the helper/error text.
   */
  footer?: ReactNode;
}

/* -------------------------------------------------------------------------- */
/* Owner State                                                                */
/* -------------------------------------------------------------------------- */

export interface FormFieldOwnerState {
  layout: FormFieldLayout;

  labelAlignment: FormFieldLabelAlignment;

  spacing: FormFieldSpacing;

  disabled: boolean;

  required: boolean;

  fullWidth: boolean;
}
