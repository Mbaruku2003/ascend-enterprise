"use client";

/**
 * Ascend Enterprise UI
 * --------------------
 * Label
 *
 * Semantic label component with polymorphic support.
 *
 * Features
 * --------
 * ✓ Semantic HTML (<label>)
 * ✓ Polymorphic (`as` prop)
 * ✓ Ref forwarding
 * ✓ Shared typography API
 * ✓ Form accessibility
 */

import * as React from "react";

import {
  polymorphicForwardRef,
  type As,
  cn,
} from "../../lib";

import {
  getTypographyClassName,
  resolveTypographyProps,
} from "../shared";

import type {
  LabelDefaultElement,
  LabelOwnProps,
  LabelProps,
} from "./Label.types";

export const Label = polymorphicForwardRef<
  LabelDefaultElement,
  LabelOwnProps
>(function Label<T extends As = LabelDefaultElement>(
  props: LabelProps<T>,
  ref,
) {
  const resolved = resolveTypographyProps(props);

  const {
    as,
    children,
    className,
    disabled = false,
    ...rest
  } = resolved;

  const Component = (as ?? "label") as React.ElementType;

  return (
    <Component
      {...rest}
      ref={ref}
      className={cn(
        getTypographyClassName(resolved),
        disabled && "cursor-not-allowed opacity-60",
        className,
      )}
    >
      {children}
    </Component>
  );
});

Label.displayName = "Label";

export default Label;
