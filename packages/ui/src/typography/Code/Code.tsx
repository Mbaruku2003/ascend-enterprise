"use client";

/**
 * Ascend Enterprise UI
 * --------------------
 * Code
 *
 * Semantic code component with polymorphic support.
 *
 * Features
 * --------
 * ✓ Semantic HTML (<code>)
 * ✓ Inline by default
 * ✓ Optional block mode
 * ✓ Monospace typography
 * ✓ Ref forwarding
 * ✓ Shared typography API
 */

import * as React from "react";

import {
  cn,
  polymorphicForwardRef,
  type As,
} from "../../lib";

import {
  getTypographyClassName,
  resolveTypographyProps,
} from "../shared";

import type {
  CodeDefaultElement,
  CodeOwnProps,
  CodeProps,
} from "./Code.types";

export const Code = polymorphicForwardRef<
  CodeDefaultElement,
  CodeOwnProps
>(function Code<T extends As = CodeDefaultElement>(
  props: CodeProps<T>,
  ref,
) {
  const resolved = resolveTypographyProps(props);

  const {
    as,
    children,
    block = false,
    preserveWhitespace = true,
    size,
    weight,
    className,
    ...rest
  } = resolved;

  const Component = (as ?? "code") as React.ElementType;

  const typographyClassName = getTypographyClassName({
    ...resolved,
    size: size ?? "sm",
    weight: weight ?? "medium",
  });

  const codeClassName = cn(
    "font-mono rounded-md bg-muted",

    block
      ? "block w-full px-4 py-3"
      : "inline rounded px-1.5 py-0.5",

    preserveWhitespace
      ? block
        ? "whitespace-pre-wrap"
        : "whitespace-pre"
      : "whitespace-normal",

    typographyClassName,
    className,
  );

  return (
    <Component
      {...rest}
      ref={ref}
      className={codeClassName}
    >
      {children}
    </Component>
  );
});

Code.displayName = "Code";

export default Code;
