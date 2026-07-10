/**
 * ============================================================================
 * Ascend UI
 * Surface
 * ============================================================================
 */

import { forwardRef } from "react";

import { cn } from "../../utils";

import Box from "../../layout/Box";

import {
  DEFAULT_SURFACE_ELEVATION,
  DEFAULT_SURFACE_PADDING,
  DEFAULT_SURFACE_RADIUS,
  DEFAULT_SURFACE_VARIANT,
  resolveSurfaceClasses,
} from "./Surface.styles";

import type {
  SurfaceProps,
} from "./Surface.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const Surface =
  forwardRef<
    Element,
    SurfaceProps
  >(
    (
      {
        variant =
          DEFAULT_SURFACE_VARIANT,

        elevation =
          DEFAULT_SURFACE_ELEVATION,

        radius =
          DEFAULT_SURFACE_RADIUS,

        padding =
          DEFAULT_SURFACE_PADDING,

        interactive = false,

        className,

        ...props
      },
      ref,
    ) => {
      return (
        <Box
          ref={ref}
          className={cn(
            ...resolveSurfaceClasses({
              variant,
              elevation,
              radius,
              padding,
              interactive,
            }),
            className,
          )}
          {...props}
        />
      );
    },
  );

Surface.displayName =
  "Surface";

export default Surface;
