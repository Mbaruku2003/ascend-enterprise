import { forwardRef } from "react";

import { cn } from "../shared";

import {
  DEFAULT_SPINNER_SIZE,
  DEFAULT_SPINNER_SPEED,
  DEFAULT_SPINNER_THICKNESS,
  DEFAULT_SPINNER_VARIANT,
  resolveSpinnerClasses,
  SPINNER_BASE_CLASSES,
} from "./Spinner.styles";

import type {
  SpinnerOwnerState,
  SpinnerProps,
} from "./Spinner.types";

/**
 * ============================================================================
 * Spinner
 * ============================================================================
 *
 * An accessible loading indicator used throughout the Ascend UI library.
 *
 * Features
 * --------
 * - Accessible
 * - Theme aware
 * - Custom sizes
 * - Custom colors
 * - Adjustable speed
 * - Adjustable thickness
 * - ForwardRef support
 */

export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  (
    {
      variant = DEFAULT_SPINNER_VARIANT,
      size = DEFAULT_SPINNER_SIZE,
      speed = DEFAULT_SPINNER_SPEED,
      thickness = DEFAULT_SPINNER_THICKNESS,

      label = "Loading",

      className,

      ...props
    },
    ref,
  ) => {
    const ownerState: SpinnerOwnerState = {
      variant,
      size,
      speed,
      thickness,
    };

    const classes = cn(
      SPINNER_BASE_CLASSES,
      ...resolveSpinnerClasses(ownerState),
      className,
    );

    return (
      <span
        ref={ref}
        role="status"
        aria-live="polite"
        className="inline-flex items-center justify-center"
        {...props}
      >
        <span
          aria-hidden="true"
          className={classes}
        />

        <span className="sr-only">
          {label}
        </span>
      </span>
    );
  },
);

Spinner.displayName = "Spinner";

export default Spinner;
