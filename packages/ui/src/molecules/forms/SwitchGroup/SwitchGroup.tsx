import {
  forwardRef,
} from "react";

import { cn } from "../../../atoms/shared";

import {
  Field,
} from "../../../atoms/shared/forms";

import {
  isSelected,
  useControllableSelection,
} from "../../../atoms/shared/selection";

import {
  Switch,
} from "../../../atoms/forms/Switch";

import {
  DEFAULT_SWITCH_GROUP_ORIENTATION,
  DEFAULT_SWITCH_GROUP_SPACING,
  resolveSwitchGroupClasses,
} from "./SwitchGroup.styles";

import type {
  SwitchGroupProps,
} from "./SwitchGroup.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const SwitchGroup = forwardRef<
  HTMLDivElement,
  SwitchGroupProps
>(
  (
    {
      value,

      defaultValue,

      onValueChange,

      options,

      orientation =
        DEFAULT_SWITCH_GROUP_ORIENTATION,

      spacing =
        DEFAULT_SWITCH_GROUP_SPACING,

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
            ...resolveSwitchGroupClasses({
              orientation,
              spacing,
              disabled,
            }),
            className,
          )}
        >
          {options.map((option) => (
            <Switch
              key={option.value}
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
              onCheckedChange={() =>
                toggle(option.value)
              }
            />
          ))}
        </div>
      </Field>
    );
  },
);

SwitchGroup.displayName =
  "SwitchGroup";

export default SwitchGroup;
