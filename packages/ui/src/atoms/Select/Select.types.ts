import type {
  ReactNode,
  SelectHTMLAttributes,
} from "react";

import type {
  FieldProps,
  FieldSize,
  FieldVariant,
} from "../shared/forms";

/* -------------------------------------------------------------------------- */
/* Option                                                                     */
/* -------------------------------------------------------------------------- */

export interface SelectOption {
  /**
   * Option value.
   */
  value: string;

  /**
   * Display label.
   */
  label: ReactNode;

  /**
   * Disabled option.
   */
  disabled?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface SelectProps
  extends Omit<
      SelectHTMLAttributes<HTMLSelectElement>,
      keyof FieldProps | "size"
    >,
    FieldProps {
  /**
   * Visual variant.
   *
   * @default "outlined"
   */
  variant?: FieldVariant;

  /**
   * Shared field size.
   *
   * @default "md"
   */
  size?: FieldSize;

  /**
   * Available options.
   */
  options?: SelectOption[];

  /**
   * Placeholder text.
   */
  placeholder?: string;

  /**
   * Leading icon.
   */
  leftIcon?: ReactNode;

  /**
   * Trailing icon.
   */
  rightIcon?: ReactNode;

  /**
   * Leading content.
   */
  prefix?: ReactNode;

  /**
   * Trailing content.
   */
  suffix?: ReactNode;

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

  /**
   * Allow clearing the current value.
   *
   * Reserved for future support.
   *
   * @default false
   */
  clearable?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Owner State                                                                */
/* -------------------------------------------------------------------------- */

export interface SelectOwnerState {
  variant: FieldVariant;

  size: FieldSize;

  loading: boolean;

  readOnly: boolean;

  disabled: boolean;
}
