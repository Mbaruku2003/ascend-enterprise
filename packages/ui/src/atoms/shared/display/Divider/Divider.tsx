/**
 * ============================================================================
 * Ascend UI
 * Divider
 * ============================================================================
 */

import { forwardRef } from "react";

import { cn } from "../../utils";

import Box from "../../layout/Box";

import {
  DEFAULT_DIVIDER_ORIENTATION,
  DEFAULT_DIVIDER_SPACING,
  DEFAULT_DIVIDER_VARIANT,
  resolveDividerClasses,
} from "./Divider.styles";

import type {
  DividerProps,
} from "./Divider.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const Divider =
  forwardRef<
    Element,
    DividerProps
  >(
    (
      {
        orientation =
          DEFAULT_DIVIDER_ORIENTATION,

        variant =
          DEFAULT_DIVIDER_VARIANT,

        spacing =
          DEFAULT_DIVIDER_SPACING,

        decorative = false,

        className,

        ...props
      },
      ref,
    ) => {
      return (
        <Box
          ref={ref}
          role={
            decorative
              ? undefined
              : "separator"
          }
          aria-hidden={
            decorative
          }
          aria-orientation={
            decorative
              ? undefined
              : orientation
          }
          className={cn(
            ...resolveDividerClasses({
              orientation,
              variant,
              spacing,
            }),
            className,
          )}
          {...props}
        />
      );
    },
  );

Divider.displayName =
  "Divider";

export default Divider;
