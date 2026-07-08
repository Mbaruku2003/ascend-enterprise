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
  DEFAULT_TEXTAREA_RESIZE,
  DEFAULT_TEXTAREA_SIZE,
  DEFAULT_TEXTAREA_STATE,
  DEFAULT_TEXTAREA_VARIANT,
  TEXTAREA_ELEMENT_CLASSES,
} from "./Textarea.styles";

import type {
  TextareaOwnerState,
  TextareaProps,
} from "./Textarea.types";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(
  (
    {
      id,

      variant = DEFAULT_TEXTAREA_VARIANT,

      resize = DEFAULT_TEXTAREA_RESIZE,

      size = DEFAULT_TEXTAREA_SIZE,

      state = DEFAULT_TEXTAREA_STATE,

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

      className,

      ...props
    },
    ref,
  ) => {
    const generatedId = useId();

    const ids = buildFieldIds(
      id ?? generatedId,
    );

    const ownerState: TextareaOwnerState = {
      variant,
      resize,
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
          align="start"
          variant={variant}
          state={state}
          size={size}
          loading={loading}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
        >
          <textarea
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
              TEXTAREA_ELEMENT_CLASSES,
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

Textarea.displayName = "Textarea";

export default Textarea;
