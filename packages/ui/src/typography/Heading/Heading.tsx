"use client";

/**
 * Ascend Enterprise UI
 * --------------------
 * Heading
 *
 * Semantic heading component with polymorphic support.
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
  HeadingDefaultElement,
  HeadingLevel,
  HeadingOwnProps,
  HeadingProps,
} from "./Heading.types";

/* -------------------------------------------------------------------------- */
/* Default Typography                                                         */
/* -------------------------------------------------------------------------- */

const DEFAULT_SIZES: Record<HeadingLevel, string> = {
  1: "4xl",
  2: "3xl",
  3: "2xl",
  4: "xl",
  5: "lg",
  6: "md",
};

const DEFAULT_ELEMENTS: Record<HeadingLevel, keyof JSX.IntrinsicElements> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const Heading = polymorphicForwardRef<
  HeadingDefaultElement,
  HeadingOwnProps
>(function Heading<T extends As = HeadingDefaultElement>(
  props: HeadingProps<T>,
  ref,
) {
  const {
    level = 2,
    as,
    size,
    weight,
    children,
    ...rest
  } = resolveTypographyProps(props);

  const Component =
    (as ??
      DEFAULT_ELEMENTS[level]) as React.ElementType;

  const resolvedProps = {
    ...rest,
    as: Component,
    children,
    level,
    size: size ?? DEFAULT_SIZES[level],
    weight: weight ?? "bold",
  };

  return (
    <Component
      {...rest}
      ref={ref}
      className={getTypographyClassName(resolvedProps)}
    >
      {children}
    </Component>
  );
});

Heading.displayName = "Heading";

export default Heading;
