/**
 * ============================================================================
 * Ascend UI
 * FormSection Types
 * ============================================================================
 */

import type {
  HTMLAttributes,
  ReactNode,
} from "react";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface FormSectionProps
  extends HTMLAttributes<HTMLElement> {

  /**
   * Section title.
   */
  title?: ReactNode;

  /**
   * Optional description.
   */
  description?: ReactNode;

  /**
   * Optional actions.
   */
  actions?: ReactNode;

  /**
   * Section content.
   */
  children: ReactNode;

  /**
   * Remove bottom divider.
   */
  bordered?: boolean;
}
