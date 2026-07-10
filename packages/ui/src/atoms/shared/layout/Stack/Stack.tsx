import {
  forwardRef,
} from "react";

import { cn } from "../../utils";

import Box from "../Box";

import {
  DEFAULT_STACK_ALIGN,
  DEFAULT_STACK_GAP,
  resolveStackClasses,
} from "./Stack.styles";

import type {
  StackProps,
} from "./Stack.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const Stack = forwardRef<
  HTMLDivElement,
  StackProps
>(
  (
    {
      gap = DEFAULT_STACK_GAP,

      align =
        DEFAULT_STACK_ALIGN,

      className,

      children,

      ...props
    },
    ref,
  ) => {
    return (
      <Box
        ref={ref}
        className={cn(
          ...resolveStackClasses(
            gap,
            align,
          ),
          className,
        )}
        {...props}
      >
        {children}
      </Box>
    );
  },
);

Stack.displayName =
  "Stack";

export default Stack;
