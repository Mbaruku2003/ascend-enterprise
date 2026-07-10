import {
  forwardRef,
} from "react";

import { cn } from "../../utils";

import Box from "../Box";

import {
  CONTAINER_CENTERED_CLASS,
  CONTAINER_GUTTERS_CLASS,
  CONTAINER_ROOT,
  CONTAINER_SIZE_CLASSES,
  DEFAULT_CONTAINER_CENTERED,
  DEFAULT_CONTAINER_GUTTERS,
  DEFAULT_CONTAINER_SIZE,
} from "./Container.styles";

import type {
  ContainerProps,
} from "./Container.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const Container = forwardRef<
  HTMLDivElement,
  ContainerProps
>(
  (
    {
      size =
        DEFAULT_CONTAINER_SIZE,

      centered =
        DEFAULT_CONTAINER_CENTERED,

      gutters =
        DEFAULT_CONTAINER_GUTTERS,

      className,

      children,

      ...props
    },
    ref,
  ) => (
    <Box
      ref={ref}
      className={cn(
        CONTAINER_ROOT,

        CONTAINER_SIZE_CLASSES[
          size
        ],

        centered &&
          CONTAINER_CENTERED_CLASS,

        gutters &&
          CONTAINER_GUTTERS_CLASS,

        className,
      )}
      {...props}
    >
      {children}
    </Box>
  ),
);

Container.displayName =
  "Container";

export default Container;
