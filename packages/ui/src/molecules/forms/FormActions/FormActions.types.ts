/**
 * ============================================================================
 * Ascend UI
 * FormActions Types
 * ============================================================================
 */

import type {
  HTMLAttributes,
  ReactNode,
} from "react";

/* -------------------------------------------------------------------------- */
/* Direction                                                                  */
/* -------------------------------------------------------------------------- */

export type FormActionsDirection =
  | "horizontal"
  | "vertical";

/* -------------------------------------------------------------------------- */
/* Main Axis Justification                                                    */
/* -------------------------------------------------------------------------- */

export type FormActionsJustify =
  | "start"
  | "center"
  | "end"
  | "between";

/* -------------------------------------------------------------------------- */
/* Cross Axis Alignment                                                       */
/* -------------------------------------------------------------------------- */

export type FormActionsAlign =
  | "start"
  | "center"
  | "end"
  | "stretch";

/* -------------------------------------------------------------------------- */
/* Gap                                                                        */
/* -------------------------------------------------------------------------- */

export type FormActionsGap =
  | "sm"
  | "md"
  | "lg";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface FormActionsProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Layout direction.
   *
   * @default "horizontal"
   */
  direction?: FormActionsDirection;

  /**
   * Main-axis alignment.
   *
   * @default "end"
   */
  justify?: FormActionsJustify;

  /**
   * Cross-axis alignment.
   *
   * @default "center"
   */
  align?: FormActionsAlign;

  /**
   * Gap between actions.
   *
   * @default "md"
   */
  gap?: FormActionsGap;

  /**
   * Collapse vertically on mobile.
   *
   * @default true
   */
  responsive?: boolean;

  /**
   * Action elements.
   */
  children: ReactNode;
}
