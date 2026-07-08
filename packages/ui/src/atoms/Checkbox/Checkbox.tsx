import {
  forwardRef,
} from "react";

import { Check, Minus } from "lucide-react";

import {
  SelectionControl,
} from "../shared/selection";

import {
  DEFAULT_CHECKBOX_SHAPE,
  DEFAULT_CHECKBOX_SIZE,
  CHECKBOX_INDICATOR_CLASSES,
  CHECKBOX_INPUT_CLASSES,
} from "./Checkbox.styles";

import type {
  CheckboxOwnerState,
  CheckboxProps,
} from "./Checkbox.types";

export const Checkbox = forwardRef<
  HTMLInputElement,
  CheckboxProps
>(
  (
    {
      label,
      description,

      checked = false,

      defaultChecked,

      disabled = false,

      indeterminate = false,

      size = DEFAULT_CHECKBOX_SIZE,

      shape = DEFAULT_CHECKBOX_SHAPE,

      className,

      ...props
    },
    ref,
  ) => {
    const ownerState: CheckboxOwnerState = {
      checked,
      disabled,
      indeterminate,
    };

    return (
      <SelectionControl
        ownerState={{
          ...ownerState,
          size,
          shape,
        }}
        label={label}
        description={description}
        className={className}
        input={
          <input
            ref={ref}
            type="checkbox"
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            className={CHECKBOX_INPUT_CLASSES}
            {...props}
          />
        }
        indicator={
          <span
            className={
              CHECKBOX_INDICATOR_CLASSES
            }
          >
            {indeterminate ? (
              <Minus size={14} />
            ) : checked ? (
              <Check size={14} />
            ) : null}
          </span>
        }
      />
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
