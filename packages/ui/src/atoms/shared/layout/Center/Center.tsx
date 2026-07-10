import { forwardRef } from "react";

import { cn } from "../../utils";

import Box from "../Box";

import {
  CENTER_FILL_CLASS,
  CENTER_ROOT_CLASSES,
  CENTER_TEXT_CLASS,
} from "./Center.styles";

import type {
  CenterProps,
} from "./Center.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const Center = forwardRef<
  HTMLDivElement,
  CenterProps
>(
  (
    {
      fill = false,
      textCenter = false,
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <Box
      ref={ref}
      className={cn(
        CENTER_ROOT_CLASSES,

        fill &&
          CENTER_FILL_CLASS,

        textCenter &&
          CENTER_TEXT_CLASS,

        className,
      )}
      {...props}
    >
      {children}
    </Box>
  ),
);

Center.displayName = "Center";

export default Center;
