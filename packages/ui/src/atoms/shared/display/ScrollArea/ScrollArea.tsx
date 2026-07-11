/**
 * ============================================================================
 * Ascend UI
 * ScrollArea
 * ============================================================================
 */

import { forwardRef } from "react";

import Box from "../../layout/Box";

import { cn } from "../../utils";

import {
  DEFAULT_SCROLL_ORIENTATION,
  DEFAULT_SCROLLBAR_VISIBILITY,
  resolveScrollAreaClasses,
} from "./ScrollArea.styles";

import type {
  ScrollAreaProps,
} from "./ScrollArea.types";

export const ScrollArea =
  forwardRef<
    Element,
    ScrollAreaProps
  >(
    (
      {
        orientation =
          DEFAULT_SCROLL_ORIENTATION,

        scrollbar =
          DEFAULT_SCROLLBAR_VISIBILITY,

        className,

        ...props
      },
      ref,
    ) => {
      return (
        <Box
          ref={ref}
          className={cn(
            ...resolveScrollAreaClasses({
              orientation,
              scrollbar,
            }),
            className,
          )}
          {...props}
        />
      );
    },
  );

ScrollArea.displayName =
  "ScrollArea";

export default ScrollArea;
