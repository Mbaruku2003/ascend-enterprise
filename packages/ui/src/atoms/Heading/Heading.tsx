import { forwardRef } from "react";

import { cn } from "../shared";

import {
  DEFAULT_HEADING_ALIGN,
  DEFAULT_HEADING_LEVEL,
  DEFAULT_HEADING_TRANSFORM,
  DEFAULT_HEADING_VARIANT,
  DEFAULT_HEADING_WEIGHT,
  HEADING_BASE_CLASSES,
  resolveHeadingClasses,
} from "./Heading.styles";

import type {
  HeadingOwnerState,
  HeadingProps,
} from "./Heading.types";

export const Heading = forwardRef<
  HTMLHeadingElement,
  HeadingProps
>(
  (
    {
      level = DEFAULT_HEADING_LEVEL,
      variant = DEFAULT_HEADING_VARIANT,
      weight = DEFAULT_HEADING_WEIGHT,
      align = DEFAULT_HEADING_ALIGN,
      transform = DEFAULT_HEADING_TRANSFORM,
      truncate = false,
      status,

      className,
      children,

      ...props
    },
    ref,
  ) => {
    const Component =
      `h${level}` as keyof JSX.IntrinsicElements;

    const ownerState: HeadingOwnerState = {
      level,
      variant,
      weight,
      align,
      transform,
      truncate,
      status,
    };

    return (
      <Component
        ref={ref}
        className={cn(
          HEADING_BASE_CLASSES,
          ...resolveHeadingClasses(ownerState),
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Heading.displayName = "Heading";

export default Heading;
