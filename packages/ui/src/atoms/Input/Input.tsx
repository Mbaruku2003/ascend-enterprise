import {
  forwardRef,
  useId,
} from "react";

import { cn } from "../shared";

import {
  buildFieldIds,
  Field,
  FieldControl,
  getFieldAccessibility,
} from "../shared/forms";

import {
  DEFAULT_INPUT_SIZE,
  DEFAULT_INPUT_STATE,
  DEFAULT_INPUT_VARIANT,
  INPUT_ELEMENT_CLASSES,
} from "./Input.styles";

import type {
  InputOwnerState,
  InputProps,
} from "./Input.types";

export const Input = forwardRef<
  HTMLInputElement,
  InputProps
>(
  (
    {
      id,

      variant = DEFAULT_INPUT_VARIANT,

      size = DEFAULT_INPUT_SIZE,

      state = DEFAULT_INPUT_STATE,

      label,

      helperText,

      errorMessage,

      labelPlacement,

      required = false,

      fullWidth = false,

      disabled = false,

      loading = false,

      readOnly = false,

      leftIcon,

      rightIcon,

      prefix,

      suffix,

      className,

      ...props
    },
    ref,
  ) => {
    const generatedId = useId();

    const ids = buildFieldIds(
      id ?? generatedId,
    );

    const ownerState: InputOwnerState = {
      variant,
      loading,
      readOnly,
      disabled,
    };

    return (
      <Field
        id={ids.id}
        label={label}
        helperText={helperText}
        errorMessage={errorMessage}
        required={required}
        disabled={disabled}
        state={state}
        size={size}
        fullWidth={fullWidth}
        labelPlacement={labelPlacement}
      >
        <FieldControl
          variant={variant}
          state={state}
          size={size}
          loading={loading}
          prefix={prefix}
          suffix={suffix}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
        >
          <input
            ref={ref}
            id={ids.id}
            readOnly={readOnly}
            disabled={disabled}
            required={required}
            aria-labelledby={ids.labelId}
            aria-describedby={
              errorMessage
                ? ids.errorMessageId
                : helperText
                  ? ids.helperTextId
                  : undefined
            }
            className={cn(
              INPUT_ELEMENT_CLASSES,
              className,
            )}
            {...getFieldAccessibility({
              ...ownerState,
              required,
              fullWidth,
              size,
              state,
              labelPlacement:
                labelPlacement ?? "top",
            })}
            {...props}
          />
        </FieldControl>
      </Field>
    );
  },
);

Input.displayName = "Input";

export default Input;
