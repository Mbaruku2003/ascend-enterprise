import {
  forwardRef,
} from "react";

import { cn } from "../shared";

import {
  DEFAULT_LABEL_SIZE,
  DEFAULT_LABEL_WEIGHT,
  LABEL_BASE_CLASSES,
  resolveLabelClasses,
} from "./Label.styles";

import type {
  LabelOwnerState,
  LabelProps,
} from "./Label.types";

export const Label = forwardRef<
  HTMLLabelElement,
  LabelProps
>(
  (
    {
      size = DEFAULT_LABEL_SIZE,

      weight = DEFAULT_LABEL_WEIGHT,

      status,

      required = false,

      disabled = false,

      srOnly = false,

      className,

      children,

      ...props
    },
    ref,
  ) => {
    const ownerState: LabelOwnerState = {
      size,
      weight,
      status,
      required,
      disabled,
      srOnly,
    };

    return (
      <label
        ref={ref}
        className={cn(
          LABEL_BASE_CLASSES,
          ...resolveLabelClasses(ownerState),
          className,
        )}
        {...props}
      >
        {children}

        {required && (
          <span
            aria-hidden="true"
            className="text-destructive"
          >
            *
          </span>
        )}
      </label>
    );
  },
);

Label.displayName = "Label";

export default Label;
