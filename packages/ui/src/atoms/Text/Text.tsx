import { forwardRef } from "react";

import { cn } from "../shared";

import {
  DEFAULT_TEXT_ALIGN,
  DEFAULT_TEXT_DECORATION,
  DEFAULT_TEXT_SIZE,
  DEFAULT_TEXT_TRANSFORM,
  DEFAULT_TEXT_VARIANT,
  DEFAULT_TEXT_WEIGHT,
  resolveTextClasses,
  TEXT_BASE_CLASSES,
} from "./Text.styles";

import type {
  TextOwnerState,
  TextProps,
} from "./Text.types";

export const Text = forwardRef<
  HTMLParagraphElement,
  TextProps
>(
  (
    {
      variant = DEFAULT_TEXT_VARIANT,
      size = DEFAULT_TEXT_SIZE,
      weight = DEFAULT_TEXT_WEIGHT,
      align = DEFAULT_TEXT_ALIGN,
      transform = DEFAULT_TEXT_TRANSFORM,
      decoration = DEFAULT_TEXT_DECORATION,
      truncate = false,
      inline = false,
      status,

      className,
      children,

      ...props
    },
    ref,
  ) => {
    const ownerState: TextOwnerState = {
      variant,
      size,
      weight,
      align,
      transform,
      decoration,
      truncate,
      inline,
      status,
    };

    return (
      <p
        ref={ref}
        className={cn(
          TEXT_BASE_CLASSES,
          ...resolveTextClasses(ownerState),
          className,
        )}
        {...props}
      >
        {children}
      </p>
    );
  },
);

Text.displayName = "Text";

export default Text;
