import {
  cloneElement,
  forwardRef,
  type HTMLAttributes,
} from "react";

import { cn } from "../../../atoms/shared";

import {
  Field,
} from "../../../atoms/shared/forms";

import {
  DEFAULT_FORMFIELD_LABEL_ALIGNMENT,
  DEFAULT_FORMFIELD_LAYOUT,
  DEFAULT_FORMFIELD_SPACING,
  FORMFIELD_ACTION_CLASSES,
  FORMFIELD_CONTROL_CLASSES,
  FORMFIELD_DESCRIPTION_CLASSES,
  FORMFIELD_FOOTER_CLASSES,
  FORMFIELD_HEADER_CLASSES,
  resolveFormFieldClasses,
} from "./FormField.styles";

import type {
  FormFieldOwnerState,
  FormFieldProps,
} from "./FormField.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const FormField = forwardRef<
  HTMLDivElement,
  FormFieldProps
>(
  (
    {
      layout = DEFAULT_FORMFIELD_LAYOUT,

      labelAlignment =
        DEFAULT_FORMFIELD_LABEL_ALIGNMENT,

      spacing =
        DEFAULT_FORMFIELD_SPACING,

      header,

      footer,

      action,

      description,

      className,

      children,

      ...fieldProps
    },
    ref,
  ) => {
    const ownerState: FormFieldOwnerState = {
      layout,
      labelAlignment,
      spacing,
      disabled:
        fieldProps.disabled ?? false,
      required:
        fieldProps.required ?? false,
      fullWidth:
        fieldProps.fullWidth ?? false,
    };

    return (
      <div
        ref={ref}
        className={cn(
          ...resolveFormFieldClasses(
            ownerState,
          ),
          className,
        )}
      >
        {header}

        {(fieldProps.label || action) && (
          <div
            className={
              FORMFIELD_HEADER_CLASSES
            }
          >
            <div>
              {fieldProps.label}
            </div>

            {action && (
              <div
                className={
                  FORMFIELD_ACTION_CLASSES
                }
              >
                {action}
              </div>
            )}
          </div>
        )}

        <div
          className={
            FORMFIELD_CONTROL_CLASSES
          }
        >
          <Field
            {...fieldProps}
            label={undefined}
          >
            {cloneElement(children)}
          </Field>

          {description && (
            <div
              className={
                FORMFIELD_DESCRIPTION_CLASSES
              }
            >
              {description}
            </div>
          )}
        </div>

        {footer && (
          <div
            className={
              FORMFIELD_FOOTER_CLASSES
            }
          >
            {footer}
          </div>
        )}
      </div>
    );
  },
);

FormField.displayName =
  "FormField";

export default FormField;
