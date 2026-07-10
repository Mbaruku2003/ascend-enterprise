import { forwardRef } from "react";

import { cn } from "../../utils";

import Box from "../Box";

import {
  DEFAULT_SPLIT_ALIGN,
  DEFAULT_SPLIT_GAP,
  DEFAULT_SPLIT_WRAP,
  resolveSplitClasses,
} from "./Split.styles";

import type {
  SplitProps,
} from "./Split.types";

/* -------------------------------------------------------------------------- */

export const Split = forwardRef<
  HTMLDivElement,
  SplitProps
>(
  (
    {
      gap = DEFAULT_SPLIT_GAP,

      align =
        DEFAULT_SPLIT_ALIGN,

      wrap =
        DEFAULT_SPLIT_WRAP,

      reverse = false,

      className,

      children,

      ...props
    },
    ref,
  ) => (
    <Box
      ref={ref}
      className={cn(
        ...resolveSplitClasses(
          gap,
          align,
          wrap,
          reverse,
        ),
        className,
      )}
      {...props}
    >
      {children}
    </Box>
  ),
);

Split.displayName = "Split";

export default Split;
