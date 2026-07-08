"use client";

/**
 * Ascend Enterprise UI
 * --------------------
 * VisuallyHidden
 *
 * Visually hides content while keeping it accessible to
 * assistive technologies such as screen readers.
 *
 * Features
 * --------
 * ✓ Screen reader accessible
 * ✓ Polymorphic (`as` prop)
 * ✓ Ref forwarding
 * ✓ Zero dependencies on typography or theme tokens
 */

import * as React from "react";

import {
  polymorphicForwardRef,
  type As,
} from "../../lib";

import type {
  VisuallyHiddenDefaultElement,
  VisuallyHiddenOwnProps,
  VisuallyHiddenProps,
} from "./VisuallyHidden.types";

const visuallyHiddenStyle: React.CSSProperties = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  whiteSpace: "nowrap",
  border: 0,
};

export const VisuallyHidden = polymorphicForwardRef<
  VisuallyHiddenDefaultElement,
  VisuallyHiddenOwnProps
>(function VisuallyHidden<T extends As = VisuallyHiddenDefaultElement>(
  props: VisuallyHiddenProps<T>,
  ref,
) {
  const {
    as,
    children,
    style,
    ...rest
  } = props;

  const Component = (as ?? "span") as React.ElementType;

  return (
    <Component
      {...rest}
      ref={ref}
      style={{
        ...visuallyHiddenStyle,
        ...style,
      }}
    >
      {children}
    </Component>
  );
});

VisuallyHidden.displayName = "VisuallyHidden";

export default VisuallyHidden;
