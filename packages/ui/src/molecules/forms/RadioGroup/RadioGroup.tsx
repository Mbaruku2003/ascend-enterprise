import {
  forwardRef,
} from "react";

import { cn } from "../../../atoms/shared";

import {
  Field,
} from "../../../atoms/shared/forms";

import {
  Radio,
} from "../../../atoms/forms/Radio";

import {
  DEFAULT_RADIO_GROUP_ORIENTATION,
  DEFAULT_RADIO_GROUP_SPACING,
  resolveRadioGroupClasses,
} from "./RadioGroup.styles";

import type {
  RadioGroupProps,
} from "./RadioGroup.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const RadioGroup = forwardRef<
  HTMLDivElement,
  RadioGroupProps
>(
  (
    {
      value,

      defaultValue,

      onValueChange,

      options,

      name,

      orientation =
        DEFAULT_RADIO_GROUP_ORIENTATION,

      spacing =
        DEFAULT_RADIO_GROUP_SPACING,

      disabled = false,

      className,

      ...fieldProps
    },
    ref,
  ) => {
    const selectedValue =
      value ?? defaultValue;

    return (
      <Field
        {...fieldProps}
        disabled={disabled}
      >
        <div
          ref={ref}
          role="radiogroup"
          className={cn(
            ...resolveRadioGroupClasses({
              orientation,
              spacing,
              disabled,
            }),
            className,
          )}
        >
          {options.map((option) => (
            <Radio
              key={option.value}
              name={name}
              value={option.value}
              checked={
                selectedValue ===
                option.value
              }
              disabled={
                disabled ||
                option.disabled
              }
              label={option.label}
              description={
                option.description
              }
              onChange={() =>
                onValueChange?.(
                  option.value,
                )
              }
            />
          ))}
        </div>
      </Field>
    );
  },
);

RadioGroup.displayName =
  "RadioGroup";

export default RadioGroup;
