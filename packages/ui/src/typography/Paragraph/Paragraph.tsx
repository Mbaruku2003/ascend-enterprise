"use client";

/**
 * Ascend Enterprise UI
 * --------------------
 * Paragraph
 *
 * Semantic paragraph component with polymorphic support.
 *
 * Features
 * --------
 * ✓ Semantic HTML (`<p>` by default)
 * ✓ Polymorphic (`as` prop)
 * ✓ Ref forwarding
 * ✓ Shared typography API
 * ✓ Design-token driven styling
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
  ParagraphDefaultElement,
  ParagraphOwnProps,
  ParagraphProps,
} from "./Paragraph.types";

/**
 * Paragraph component.
 *
 * @example
 * ```tsx
 * <Paragraph>
 *   Lorem ipsum dolor sit amet.
 * </Paragraph>
 *
 * <Paragraph size="lg" color="muted">
 *   Larger muted paragraph.
 * </Paragraph>
 *
 * <Paragraph as="blockquote">
 *   A famous quote.
 * </Paragraph>
 * ```
 */
export const Paragraph = polymorphicForwardRef<
  ParagraphDefaultElement,
  ParagraphOwnProps
>(function Paragraph<T extends As = ParagraphDefaultElement>(
  props: ParagraphProps<T>,
  ref,
) {
  const resolved = resolveTypographyProps(props);

  const {
    as,
    children,
    ...rest
  } = resolved;

  const Component = (as ?? "p") as React.ElementType;

  return (
    <Component
      {...rest}
      ref={ref}
      className={getTypographyClassName(resolved)}
    >
      {children}
    </Component>
  );
});

Paragraph.displayName = "Paragraph";

export default Paragraph;
