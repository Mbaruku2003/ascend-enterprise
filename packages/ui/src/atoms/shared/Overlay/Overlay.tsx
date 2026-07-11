/**
 * ============================================================================
 * Ascend UI
 * Overlay
 * ============================================================================
 */

import { forwardRef } from "react";

import Box from "../../layout/Box";

import { cn } from "../../utils";

import {
  DEFAULT_OVERLAY_Z_INDEX,
  resolveOverlayClasses,
} from "./Overlay.styles";

import type {
  OverlayProps,
} from "./Overlay.types";

export const Overlay =
  forwardRef<
    Element,
    OverlayProps
  >(
    (
      {
        blur = false,

        transparent = false,

        zIndex =
          DEFAULT_OVERLAY_Z_INDEX,

        className,

        style,

        ...props
      },
      ref,
    ) => (
      <Box
        ref={ref}
        className={cn(
          ...resolveOverlayClasses({
            blur,
            transparent,
          }),
          className,
        )}
        style={{
          zIndex,
          ...style,
        }}
        {...props}
      />
    ),
  );

Overlay.displayName =
  "Overlay";

export default Overlay;
