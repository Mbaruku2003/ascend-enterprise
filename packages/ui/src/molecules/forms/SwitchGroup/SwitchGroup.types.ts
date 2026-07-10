/**
 * ============================================================================
 * Ascend UI
 * SwitchGroup Types
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

export type SwitchGroupOrientation =
  | "vertical"
  | "horizontal";

/* -------------------------------------------------------------------------- */
/* Spacing                                                                    */
/* -------------------------------------------------------------------------- */

export type SwitchGroupSpacing =
  | "sm"
  | "md"
  | "lg";

/* -------------------------------------------------------------------------- */
/* Option                                                                     */
/* -------------------------------------------------------------------------- */

export interface SwitchOption {
  value: string;

  label: ReactNode;

  description?: ReactNode;

  disabled?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface SwitchGroupProps
  extends Omit<FieldProps, "children"> {

  options: SwitchOption[];

  value?: string[];

  defaultValue?: string[];

  onValueChange?(
    value: string[],
  ): void;

  orientation?: SwitchGroupOrientation;

  spacing?: SwitchGroupSpacing;
}

/* -------------------------------------------------------------------------- */
/* Owner State                                                                */
/* -------------------------------------------------------------------------- */

export interface SwitchGroupOwnerState {

  orientation: SwitchGroupOrientation;

  spacing: SwitchGroupSpacing;

  disabled: boolean;
}
