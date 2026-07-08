"use client";

/**
 * Ascend Enterprise UI
 * --------------------
 * Caption
 *
 * Semantic caption component with polymorphic support.
 *
 * Features
 * --------
 * ✓ Semantic HTML (<figcaption>)
 * ✓ Polymorphic (`as` prop)
 * ✓ Ref forwarding
 * ✓ Shared typography API
 * ✓ Opinionated caption defaults
 */

import * as React from "react";

import {
  polymorphicForwardRef,
  type As,
} from "../../lib";

import {
  getTypographyClassName,
  resolveTypographyProps,
} from "../shared";

import type {
  CaptionDefaultElement,
  CaptionOwnProps,
  CaptionProps,
} from "./Caption.types";

export const Caption = polymorphicForwardRef<
  CaptionDefaultElement,
  CaptionOwnProps
>(function Caption<T extends As = CaptionDefaultElement>(
  props: CaptionProps<T>,
  ref,
) {
  const resolved = resolveTypographyProps(props);

  const {
    as,
    children,
    size,
    color,
    weight,
    ...rest
  } = resolved;

  const Component = (as ?? "figcaption") as React.ElementType;

  const typographyProps = {
    ...resolved,
    size: size ?? "sm",
    color: color ?? "muted",
    weight: weight ?? "normal",
  };

  return (
    <Component
      {...rest}
      ref={ref}
      className={getTypographyClassName(typographyProps)}
    >
      {children}
    </Component>
  );
});

Caption.displayName = "Caption";

export default Caption;
