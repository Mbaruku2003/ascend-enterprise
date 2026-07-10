import {
  forwardRef,
} from "react";

import { cn } from "../../utils";

import Box from "../Box";

import {
  ASPECT_RATIO_CONTENT,
  ASPECT_RATIO_ROOT,
  DEFAULT_ASPECT_RATIO,
  resolveRatio,
} from "./AspectRatio.styles";

import type {
  AspectRatioProps,
} from "./AspectRatio.types";

/* -------------------------------------------------------------------------- */

export const AspectRatio =
  forwardRef<
    HTMLDivElement,
    AspectRatioProps
  >(
    (
      {
        ratio =
          DEFAULT_ASPECT_RATIO,

        className,

        children,

        style,

        ...props
      },
      ref,
    ) => (
      <Box
        ref={ref}
        className={cn(
          ASPECT_RATIO_ROOT,
          className,
        )}
        style={{
          aspectRatio:
            resolveRatio(ratio),
          ...style,
        }}
        {...props}
      >
        <div
          className={
            ASPECT_RATIO_CONTENT
          }
        >
          {children}
        </div>
      </Box>
    ),
  );

AspectRatio.displayName =
  "AspectRatio";

export default AspectRatio;
