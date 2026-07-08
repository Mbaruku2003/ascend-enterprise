import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

import type {
  FieldProps,
} from "../shared/forms";

/* -------------------------------------------------------------------------- */
/* Input Variant                                                              */
/* -------------------------------------------------------------------------- */

export type InputVariant =
  | "outlined"
  | "filled"
  | "ghost";

/* -------------------------------------------------------------------------- */
/* Input Type                                                                 */
/* -------------------------------------------------------------------------- */

export type InputType =
  | "text"
  | "email"
  | "password"
  | "search"
  | "url"
  | "number"
  | "tel"
  | "date"
  | "time"
  | "datetime-local";

/* -------------------------------------------------------------------------- */
/* Input Props                                                                */
/* -------------------------------------------------------------------------- */

export interface InputProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      keyof FieldProps | "size" | "type"
    >,
    FieldProps {
  /**
   * Visual variant.
   *
   * @default "outlined"
   */
  variant?: InputVariant;

  /**
   * Native input type.
   *
   * @default "text"
   */
  type?: InputType;

  /**
   * Optional leading icon.
   */
  leftIcon?: ReactNode;

  /**
   * Optional trailing icon.
   */
  rightIcon?: ReactNode;

  /**
   * Displays a loading spinner.
   *
   * @default false
   */
  loading?: boolean;

  /**
   * Makes the input read-only.
   *
   * @default false
   */
  readOnly?: boolean;

  /**
   * Optional prefix content.
   *
   * Example:
   * $
   * https://
   */
  prefix?: ReactNode;

  /**
   * Optional suffix content.
   *
   * Example:
   * kg
   * USD
   */
  suffix?: ReactNode;
}

/* -------------------------------------------------------------------------- */
/* Owner State                                                                */
/* -------------------------------------------------------------------------- */

export interface InputOwnerState {
  variant: InputVariant;

  loading: boolean;

  readOnly: boolean;

  disabled: boolean;
}
