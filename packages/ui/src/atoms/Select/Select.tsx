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
  DEFAULT_SELECT_SIZE,
  DEFAULT_SELECT_STATE,
  DEFAULT_SELECT_VARIANT,
  SELECT_ELEMENT_CLASSES,
  SELECT_READ_ONLY_CLASS,
} from "./Select.styles";

import type {
  SelectOwnerState,
  SelectProps,
} from "./Select.types";

export const Select = forwardRef<
  HTMLSelectElement,
  SelectProps
>(
  (
    {
      id,

      variant = DEFAULT_SELECT_VARIANT,

      size = DEFAULT_SELECT_SIZE,

      state = DEFAULT_SELECT_STATE,

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

      options,

      placeholder,

      className,

      children,

      ...props
    },
    ref,
  ) => {
    const generatedId = useId();

    const ids = buildFieldIds(
      id ?? generatedId,
    );

    const ownerState: SelectOwnerState = {
      variant,
      size,
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
          <select
            ref={ref}
            id={ids.id}
            disabled={disabled || readOnly}
            required={required}
            aria-readonly={readOnly || undefined}
            aria-labelledby={ids.labelId}
            aria-describedby={
              errorMessage
                ? ids.errorMessageId
                : helperText
                  ? ids.helperTextId
                  : undefined
            }
            className={cn(
              SELECT_ELEMENT_CLASSES,
              readOnly && SELECT_READ_ONLY_CLASS,
              className,
            )}
            {...getFieldAccessibility({
              ...ownerState,
              required,
              fullWidth,
              state,
              labelPlacement:
                labelPlacement ?? "top",
            })}
            {...props}
          >
            {placeholder && (
              <option
                value=""
                disabled
                hidden
              >
                {placeholder}
              </option>
            )}

            {options
              ? options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </option>
                ))
              : children}
          </select>
        </FieldControl>
      </Field>
    );
  },
);

Select.displayName = "Select";

export default Select;
