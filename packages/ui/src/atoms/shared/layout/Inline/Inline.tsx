import { forwardRef } from "react";

import { cn } from "../../utils";

import Box from "../Box";

import {
  DEFAULT_INLINE_ALIGN,
  DEFAULT_INLINE_GAP,
  DEFAULT_INLINE_JUSTIFY,
  DEFAULT_INLINE_WRAP,
  resolveInlineClasses,
} from "./Inline.styles";

import type { InlineProps } from "./Inline.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const Inline = forwardRef<
  HTMLDivElement,
  InlineProps
>(
  (
    {
      gap = DEFAULT_INLINE_GAP,
      align = DEFAULT_INLINE_ALIGN,
      justify = DEFAULT_INLINE_JUSTIFY,
      wrap = DEFAULT_INLINE_WRAP,
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <Box
      ref={ref}
      className={cn(
        ...resolveInlineClasses(
          gap,
          align,
          justify,
          wrap,
        ),
        className,
      )}
      {...props}
    >
      {children}
    </Box>
  ),
);

Inline.displayName = "Inline";

export default Inline;
