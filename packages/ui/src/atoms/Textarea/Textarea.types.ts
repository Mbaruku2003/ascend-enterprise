import type {
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

import type {
  FieldProps,
} from "../shared/forms";

/* -------------------------------------------------------------------------- */
/* Textarea Variant                                                           */
/* -------------------------------------------------------------------------- */

export type TextareaVariant =
  | "outlined"
  | "filled"
  | "ghost";

/* -------------------------------------------------------------------------- */
/* Resize Behavior                                                            */
/* -------------------------------------------------------------------------- */

export type TextareaResize =
  | "none"
  | "vertical"
  | "horizontal"
  | "both";

/* -------------------------------------------------------------------------- */
/* Textarea Props                                                             */
/* -------------------------------------------------------------------------- */

export interface TextareaProps
  extends Omit<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      keyof FieldProps | "size"
    >,
    FieldProps {
  /**
   * Visual variant.
   *
   * @default "outlined"
   */
  variant?: TextareaVariant;

  /**
   * Allow resizing.
   *
   * @default "vertical"
   */
  resize?: TextareaResize;

  /**
   * Optional leading icon.
   */
  leftIcon?: ReactNode;

  /**
   * Optional trailing icon.
   */
  rightIcon?: ReactNode;

  /**
   * Loading state.
   *
   * @default false
   */
  loading?: boolean;

  /**
   * Read-only state.
   *
   * @default false
   */
  readOnly?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Owner State                                                                */
/* -------------------------------------------------------------------------- */

export interface TextareaOwnerState {
  variant: TextareaVariant;

  resize: TextareaResize;

  loading: boolean;

  readOnly: boolean;

  disabled: boolean;
}
