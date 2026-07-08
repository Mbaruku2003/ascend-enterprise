import {
  forwardRef,
  type ElementType,
} from "react";

import {
  ATOM_INTERACTIVE_BASE,
  cn,
  getLoadingAccessibility,
  resolveDisabledState,
  resolveFullWidth,
} from "../shared";

import { Spinner } from "../Spinner";

import {
  BUTTON_BASE_CLASSES,
  BUTTON_SHAPE_CLASSES,
  BUTTON_SIZE_CLASSES,
  BUTTON_VARIANT_CLASSES,
  DEFAULT_BUTTON_SHAPE,
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_VARIANT,
  resolveIconOnly,
} from "./Button.styles";

import type { ButtonOwnProps } from "./Button.types";

/**
 * ============================================================================
 * Button
 * ============================================================================
 *
 * Primary interactive component for the Ascend UI Design System.
 */

export const Button = forwardRef<HTMLButtonElement, ButtonOwnProps>(
  (
    {
      as,
      variant = DEFAULT_BUTTON_VARIANT,
      size = DEFAULT_BUTTON_SIZE,
      shape = DEFAULT_BUTTON_SHAPE,

      fullWidth = false,
      loading = false,
      loadingPosition = "start",
      iconOnly = false,

      leftIcon,
      rightIcon,

      disabled,
      children,

      className,
      type = "button",

      ...props
    },
    ref,
  ) => {
    const Component = (as ?? "button") as ElementType;

    const isDisabled = resolveDisabledState({
      disabled,
      loading,
      fullWidth,
    });

    const classes = cn(
      ATOM_INTERACTIVE_BASE,
      BUTTON_BASE_CLASSES,
      BUTTON_VARIANT_CLASSES[variant],
      BUTTON_SIZE_CLASSES[size],
      BUTTON_SHAPE_CLASSES[shape],
      resolveFullWidth(fullWidth),
      iconOnly ? resolveIconOnly(size) : "",
      className,
    );

    const spinner = (
      <Spinner
        size="sm"
        variant="current"
        aria-hidden="true"
      />
    );

    return (
      <Component
        ref={ref}
        className={classes}
        disabled={Component === "button" ? isDisabled : undefined}
        aria-disabled={isDisabled || undefined}
        type={Component === "button" ? type : undefined}
        {...getLoadingAccessibility(loading)}
        {...props}
      >
        {loading && loadingPosition === "start" && (
          <span className="mr-2 flex items-center">
            {spinner}
          </span>
        )}

        {!loading && leftIcon && (
          <span className="mr-2 flex items-center">
            {leftIcon}
          </span>
        )}

        {!iconOnly && children}

        {!loading && rightIcon && (
          <span className="ml-2 flex items-center">
            {rightIcon}
          </span>
        )}

        {loading && loadingPosition === "end" && (
          <span className="ml-2 flex items-center">
            {spinner}
          </span>
        )}

        {loading &&
          loadingPosition === "center" &&
          !iconOnly && (
            <span className="absolute inset-0 flex items-center justify-center">
              {spinner}
            </span>
          )}
      </Component>
    );
  },
);

Button.displayName = "Button";

export default Button;
