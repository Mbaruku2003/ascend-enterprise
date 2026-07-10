import {
  forwardRef,
} from "react";

import { cn } from "../../../atoms/shared";

import {
  Field,
} from "../../../atoms/shared/forms";

import {
  Checkbox,
} from "../../../atoms/forms/Checkbox";

import {
  isSelected,
  useControllableSelection,
} from "../../../atoms/shared/selection";

import {
  DEFAULT_CHECKBOX_GROUP_ORIENTATION,
  DEFAULT_CHECKBOX_GROUP_SPACING,
  resolveCheckboxGroupClasses,
} from "./CheckboxGroup.styles";

import type {
  CheckboxGroupProps,
} from "./CheckboxGroup.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const CheckboxGroup = forwardRef<
  HTMLDivElement,
  CheckboxGroupProps
>(
  (
    {
      value,

      defaultValue,

      onValueChange,

      options,

      orientation =
        DEFAULT_CHECKBOX_GROUP_ORIENTATION,

      spacing =
        DEFAULT_CHECKBOX_GROUP_SPACING,

      disabled = false,

      className,

      ...fieldProps
    },
    ref,
  ) => {
    const {
      value: values,
      toggle,
    } = useControllableSelection<string>({
      value,
      defaultValue,
      onValueChange,
    });

    return (
      <Field
        {...fieldProps}
        disabled={disabled}
      >
        <div
          ref={ref}
          role="group"
          className={cn(
            ...resolveCheckboxGroupClasses({
              orientation,
              spacing,
              disabled,
            }),
            className,
          )}
        >
          {options.map((option) => (
            <Checkbox
              key={option.value}
              value={option.value}
              checked={isSelected(
                values,
                option.value,
              )}
              disabled={
                disabled ||
                option.disabled
              }
              label={option.label}
              description={
                option.description
              }
              onChange={() =>
                toggle(option.value)
              }
            />
          ))}
        </div>
      </Field>
    );
  },
);

CheckboxGroup.displayName =
  "CheckboxGroup";

export default CheckboxGroup;
