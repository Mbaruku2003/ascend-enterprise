/**
 * ============================================================================
 * Ascend UI
 * Shared Field
 * ============================================================================
 *
 * Shared layout component used by all form controls.
 *
 * Responsibilities:
 * - Generate accessible IDs
 * - Provide shared field context
 * - Render label
 * - Render helper/error messages
 * - Apply shared layout styles
 *
 * ============================================================================
 */

import {
  forwardRef,
  useId,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { cn } from "../..";

import {
  buildFieldIds,
  resolveFieldId,
} from "./field.ids";

import {
  FieldProvider,
} from "./FieldContext";

import {
  DEFAULT_FIELD_LABEL_PLACEMENT,
  DEFAULT_FIELD_SIZE,
  DEFAULT_FIELD_STATE,
  FIELD_ERROR_CLASSES,
  FIELD_HELPER_CLASSES,
  FIELD_REQUIRED_INDICATOR_CLASSES,
  resolveFieldClasses,
} from "./field.styles";

import type {
  FieldOwnerState,
  FieldProps,
} from "./field.types";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface FormFieldProps
  extends Omit<
      FieldProps,
      keyof HTMLAttributes<HTMLDivElement>
    >,
    HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const Field = forwardRef<
  HTMLDivElement,
  FormFieldProps
>(
  (
    {
      id,

      label,

      helperText,

      errorMessage,

      state = DEFAULT_FIELD_STATE,

      size = DEFAULT_FIELD_SIZE,

      labelPlacement =
        DEFAULT_FIELD_LABEL_PLACEMENT,

      required = false,

      disabled = false,

      fullWidth = false,

      className,

      children,

      ...props
    },
    ref,
  ) => {
    const reactId = useId();

    const ids = buildFieldIds(
      resolveFieldId(id ?? reactId),
    );

    const ownerState: FieldOwnerState = {
      state,
      size,
      disabled,
      required,
      fullWidth,
      labelPlacement,
    };

    return (
      <FieldProvider
        value={{
          ids,
          state,
          size,
          disabled,
          required,
          fullWidth,
          labelPlacement,
        }}
      >
        <div
          ref={ref}
          className={cn(
            ...resolveFieldClasses(
              ownerState,
            ),
            className,
          )}
          {...props}
        >
          {label && (
            <label
              id={ids.labelId}
              htmlFor={ids.id}
              className="font-medium"
            >
              {label}

              {required && (
                <span
                  className={
                    FIELD_REQUIRED_INDICATOR_CLASSES
                  }
                  aria-hidden="true"
                >
                  *
                </span>
              )}
            </label>
          )}

          {children}

          {errorMessage ? (
            <p
              id={ids.errorMessageId}
              className={
                FIELD_ERROR_CLASSES
              }
            >
              {errorMessage}
            </p>
          ) : helperText ? (
            <p
              id={ids.helperTextId}
              className={
                FIELD_HELPER_CLASSES
              }
            >
              {helperText}
            </p>
          ) : null}
        </div>
      </FieldProvider>
    );
  },
);

Field.displayName = "Field";

export default Field;
