import { forwardRef } from "react";

import { cn } from "../../utils";

import Box from "../Box";

import {
  DEFAULT_SPACER_BASIS,
  DEFAULT_SPACER_GROW,
  DEFAULT_SPACER_SHRINK,
  SPACER_ROOT_CLASSES,
} from "./Spacer.styles";

import type {
  SpacerProps,
} from "./Spacer.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const Spacer = forwardRef<
  HTMLDivElement,
  SpacerProps
>(
  (
    {
      grow = DEFAULT_SPACER_GROW,
      shrink = DEFAULT_SPACER_SHRINK,
      basis = DEFAULT_SPACER_BASIS,
      className,
      style,
      ...props
    },
    ref,
  ) => (
    <Box
      ref={ref}
      className={cn(
        SPACER_ROOT_CLASSES,
        className,
      )}
      style={{
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,
        ...style,
      }}
      {...props}
    />
  ),
);

Spacer.displayName = "Spacer";

export default Spacer;
