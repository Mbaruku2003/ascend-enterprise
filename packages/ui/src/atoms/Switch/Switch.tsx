import { forwardRef } from "react";

import { cn } from "../shared";

import {
  SelectionControl,
} from "../shared/selection";

import {
  DEFAULT_SWITCH_SIZE,
  SWITCH_DISABLED,
  SWITCH_INPUT_CLASSES,
  SWITCH_THUMB_CLASSES,
  SWITCH_THUMB_SIZE,
  SWITCH_THUMB_TRANSLATE,
  SWITCH_TRACK_CHECKED,
  SWITCH_TRACK_CLASSES,
  SWITCH_TRACK_SIZE,
} from "./Switch.styles";

import type {
  SwitchOwnerState,
  SwitchProps,
} from "./Switch.types";

export const Switch = forwardRef<
  HTMLInputElement,
  SwitchProps
>(
  (
    {
      label,
      description,

      checked = false,

      defaultChecked,

      disabled = false,

      size = DEFAULT_SWITCH_SIZE,

      className,

      ...props
    },
    ref,
  ) => {
    const ownerState: SwitchOwnerState = {
      checked,
      disabled,
    };

    return (
      <SelectionControl
        ownerState={{
          ...ownerState,
          size,
          shape: "rounded",
          indeterminate: false,
        }}
        className={className}
        label={label}
        description={description}
        input={
          <input
            ref={ref}
            type="checkbox"
            role="switch"
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            className={SWITCH_INPUT_CLASSES}
            {...props}
          />
        }
        indicator={
          <span
            className={cn(
              SWITCH_TRACK_CLASSES,
              SWITCH_TRACK_SIZE[size],
              checked && SWITCH_TRACK_CHECKED,
              disabled && SWITCH_DISABLED,
            )}
          >
            <span
              className={cn(
                SWITCH_THUMB_CLASSES,
                SWITCH_THUMB_SIZE[size],
                checked && SWITCH_THUMB_TRANSLATE[size],
              )}
            />
          </span>
        }
      />
    );
  },
);

Switch.displayName = "Switch";

export default Switch;
