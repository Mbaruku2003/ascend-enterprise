import { forwardRef } from "react";

import { cn } from "../shared";

import {
  SelectionControl,
  DEFAULT_SELECTION_SHAPE,
} from "../shared/selection";

import {
  DEFAULT_RADIO_SIZE,
  RADIO_DOT_CLASSES,
  RADIO_DOT_SIZE,
  RADIO_INDICATOR_CLASSES,
  RADIO_INPUT_CLASSES,
} from "./Radio.styles";

import type {
  RadioOwnerState,
  RadioProps,
} from "./Radio.types";

export const Radio = forwardRef<
  HTMLInputElement,
  RadioProps
>(
  (
    {
      label,
      description,

      checked = false,

      defaultChecked,

      disabled = false,

      size = DEFAULT_RADIO_SIZE,

      shape = "circle",

      className,

      ...props
    },
    ref,
  ) => {
    const ownerState: RadioOwnerState = {
      checked,
      disabled,
    };

    return (
      <SelectionControl
        ownerState={{
          ...ownerState,
          size,
          shape:
            shape ??
            DEFAULT_SELECTION_SHAPE,
          indeterminate: false,
        }}
        className={className}
        label={label}
        description={description}
        input={
          <input
            ref={ref}
            type="radio"
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            className={RADIO_INPUT_CLASSES}
            {...props}
          />
        }
        indicator={
          <span
            className={
              RADIO_INDICATOR_CLASSES
            }
          >
            {checked && (
              <span
                className={cn(
                  RADIO_DOT_CLASSES,
                  RADIO_DOT_SIZE[size],
                )}
              />
            )}
          </span>
        }
      />
    );
  },
);

Radio.displayName = "Radio";

export default Radio;
