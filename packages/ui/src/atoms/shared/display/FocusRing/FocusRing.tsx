/**
 * ============================================================================
 * Ascend UI
 * FocusRing
 * ============================================================================
 */

import { forwardRef } from "react";

import { cn } from "../../utils";

import {
  DEFAULT_FOCUS_RING_VARIANT,
  resolveFocusRingClasses,
} from "./FocusRing.styles";

import type {
  FocusRingProps,
} from "./FocusRing.types";

export const FocusRing =
  forwardRef<
    HTMLSpanElement,
    FocusRingProps
  >(
    (
      {
        variant =
          DEFAULT_FOCUS_RING_VARIANT,

        disabled = false,

        className,

        ...props
      },
      ref,
    ) => {
      return (
        <span
          ref={ref}
          className={cn(
            ...resolveFocusRingClasses({
              variant,
              disabled,
            }),
            className,
          )}
          {...props}
        />
      );
    },
  );

FocusRing.displayName =
  "FocusRing";

export default FocusRing;
