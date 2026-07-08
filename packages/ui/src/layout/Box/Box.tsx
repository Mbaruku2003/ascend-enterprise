"use client";

/**
 * Ascend Enterprise UI
 * --------------------
 * Box
 *
 * The foundational layout primitive.
 *
 * Features
 * --------
 * ✓ Polymorphic (`as` prop)
 * ✓ Ref forwarding
 * ✓ Shared layout system
 * ✓ Zero layout logic
 */

import * as React from "react";

import {
  cn,
  polymorphicForwardRef,
  type As,
} from "../../lib";

import {
  getLayoutClassName,
  resolveLayoutProps,
  splitLayoutProps,
} from "../shared";

import type {
  BoxDefaultElement,
  BoxOwnProps,
  BoxProps,
} from "./Box.types";

export const Box = polymorphicForwardRef<
  BoxDefaultElement,
  BoxOwnProps
>(function Box<T extends As = BoxDefaultElement>(
  props: BoxProps<T>,
  ref,
) {
  const {
    layoutProps,
    elementProps,
  } = splitLayoutProps(props);

  const resolvedLayout =
    resolveLayoutProps(layoutProps);

  const layoutClassName =
    getLayoutClassName(resolvedLayout);

  const {
    as,
    className,
    children,
    ...rest
  } = elementProps;

  const Component = (as ?? "div") as React.ElementType;

  return (
    <Component
      {...rest}
      ref={ref}
      className={cn(
        layoutClassName,
        className,
      )}
    >
      {children}
    </Component>
  );
});

Box.displayName = "Box";

export default Box;
