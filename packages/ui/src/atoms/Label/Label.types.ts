import type {
  LabelHTMLAttributes,
  ReactNode,
} from "react";

import type {
  ComponentStatus,
} from "../shared";

/* -------------------------------------------------------------------------- */
/* Label Size                                                                 */
/* -------------------------------------------------------------------------- */

export type LabelSize =
  | "sm"
  | "md"
  | "lg";

/* -------------------------------------------------------------------------- */
/* Label Weight                                                               */
/* -------------------------------------------------------------------------- */

export type LabelWeight =
  | "normal"
  | "medium"
  | "semibold"
  | "bold";

/* -------------------------------------------------------------------------- */
/* Label Props                                                                */
/* -------------------------------------------------------------------------- */

export interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Label content.
   */
  children?: ReactNode;

  /**
   * Visual size.
   *
   * @default "md"
   */
  size?: LabelSize;

  /**
   * Font weight.
   *
   * @default "medium"
   */
  weight?: LabelWeight;

  /**
   * Semantic status color.
   */
  status?: ComponentStatus;

  /**
   * Displays a required indicator.
   *
   * @default false
   */
  required?: boolean;

  /**
   * Disabled appearance.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Visually hide the label while keeping it
   * accessible to assistive technologies.
   *
   * @default false
   */
  srOnly?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Owner State                                                                */
/* -------------------------------------------------------------------------- */

export interface LabelOwnerState {
  size: LabelSize;

  weight: LabelWeight;

  status?: ComponentStatus;

  required: boolean;

  disabled: boolean;

  srOnly: boolean;
}
