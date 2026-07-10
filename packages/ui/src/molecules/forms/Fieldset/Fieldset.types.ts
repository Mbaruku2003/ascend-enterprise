/**
 * ============================================================================
 * Ascend UI
 * Fieldset Types
 * ============================================================================
 */

import type {
  HTMLAttributes,
  ReactNode,
} from "react";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface FieldsetProps
  extends HTMLAttributes<HTMLFieldSetElement> {
  /**
   * Fieldset legend.
   */
  legend?: ReactNode;

  /**
   * Optional supporting text.
   */
  description?: ReactNode;

  /**
   * Optional header actions.
   */
  actions?: ReactNode;

  /**
   * Remove border.
   *
   * @default false
   */
  borderless?: boolean;

  /**
   * Disable every control inside.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Content.
   */
  children: ReactNode;
}
