/**
 * ============================================================================
 * Ascend UI
 * FormHeader Types
 * ============================================================================
 */

import type {
  HTMLAttributes,
  ReactNode,
} from "react";

/* -------------------------------------------------------------------------- */
/* Alignment                                                                  */
/* -------------------------------------------------------------------------- */

export type FormHeaderAlignment =
  | "start"
  | "center";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface FormHeaderProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Main heading.
   */
  title: ReactNode;

  /**
   * Optional subtitle.
   */
  subtitle?: ReactNode;

  /**
   * Supporting description.
   */
  description?: ReactNode;

  /**
   * Optional actions.
   *
   * Example:
   * Edit button
   * Help link
   * Badge
   */
  actions?: ReactNode;

  /**
   * Content alignment.
   *
   * @default "start"
   */
  align?: FormHeaderAlignment;
}
