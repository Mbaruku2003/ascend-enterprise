/**
 * ============================================================================
 * Ascend UI
 * FormGrid Types
 * ============================================================================
 */

import type {
  HTMLAttributes,
  ReactNode,
} from "react";

/* -------------------------------------------------------------------------- */
/* Columns                                                                    */
/* -------------------------------------------------------------------------- */

export type FormGridColumns =
  | 1
  | 2
  | 3
  | 4;

/* -------------------------------------------------------------------------- */
/* Gap                                                                        */
/* -------------------------------------------------------------------------- */

export type FormGridGap =
  | "sm"
  | "md"
  | "lg";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface FormGridProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns.
   *
   * @default 2
   */
  columns?: FormGridColumns;

  /**
   * Grid spacing.
   *
   * @default "md"
   */
  gap?: FormGridGap;

  /**
   * Responsive collapse.
   *
   * @default true
   */
  responsive?: boolean;

  children: ReactNode;
}
