import type {
  ButtonHTMLAttributes,
  ElementType,
  MouseEventHandler,
  ReactNode,
} from "react";

/**
 * --------------------------------------------------------------------------
 * Button Variants
 * --------------------------------------------------------------------------
 */

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "soft"
  | "destructive"
  | "link";

/**
 * --------------------------------------------------------------------------
 * Button Sizes
 * --------------------------------------------------------------------------
 */

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * --------------------------------------------------------------------------
 * Button Shapes
 * --------------------------------------------------------------------------
 */

export type ButtonShape = "default" | "rounded" | "pill" | "square";

/**
 * --------------------------------------------------------------------------
 * Button Types
 * --------------------------------------------------------------------------
 */

export type ButtonType = "button" | "submit" | "reset";

/**
 * --------------------------------------------------------------------------
 * Loading Placement
 * --------------------------------------------------------------------------
 */

export type ButtonLoadingPosition = "start" | "center" | "end";

/**
 * --------------------------------------------------------------------------
 * Button Props
 * --------------------------------------------------------------------------
 */

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  /**
   * Visual appearance.
   *
   * @default "primary"
   */
  variant?: ButtonVariant;

  /**
   * Component size.
   *
   * @default "md"
   */
  size?: ButtonSize;

  /**
   * Border radius style.
   *
   * @default "default"
   */
  shape?: ButtonShape;

  /**
   * Native button type.
   *
   * @default "button"
   */
  type?: ButtonType;

  /**
   * Render full width.
   *
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Loading state.
   *
   * Automatically disables the button.
   *
   * @default false
   */
  loading?: boolean;

  /**
   * Loading spinner placement.
   *
   * @default "start"
   */
  loadingPosition?: ButtonLoadingPosition;

  /**
   * Render only an icon.
   *
   * Useful for toolbar actions.
   *
   * @default false
   */
  iconOnly?: boolean;

  /**
   * Left icon.
   */
  leftIcon?: ReactNode;

  /**
   * Right icon.
   */
  rightIcon?: ReactNode;

  /**
   * Button content.
   */
  children?: ReactNode;

  /**
   * Optional CSS class.
   */
  className?: string;

  /**
   * Optional click handler.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * --------------------------------------------------------------------------
 * Polymorphic Button Props
 * --------------------------------------------------------------------------
 */

export interface ButtonOwnProps extends ButtonProps {
  /**
   * Render the component as another element.
   *
   * Example:
   *
   * <Button as="a" href="/pricing" />
   */
  as?: ElementType;
}

/**
 * --------------------------------------------------------------------------
 * Internal Owner State
 * --------------------------------------------------------------------------
 */

export interface ButtonOwnerState {
  variant: ButtonVariant;
  size: ButtonSize;
  shape: ButtonShape;
  loading: boolean;
  disabled: boolean;
  fullWidth: boolean;
  iconOnly: boolean;
}
