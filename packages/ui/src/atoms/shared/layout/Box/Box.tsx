import {
  forwardRef,
  type ElementType,
  type ReactElement,
} from "react";

import { cn } from "../../utils";

import {
  BOX_ROOT_CLASSES,
} from "./Box.styles";

import type {
  BoxProps,
} from "./Box.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

type BoxComponent = <
  T extends ElementType = "div",
>(
  props: BoxProps<T> & {
    ref?: React.Ref<Element>;
  },
) => ReactElement | null;

const Box = forwardRef(
  <
    T extends ElementType = "div",
  >(
    {
      as,

      className,

      children,

      ...props
    }: BoxProps<T>,
    ref: React.ForwardedRef<Element>,
  ) => {
    const Component =
      as ?? "div";

    return (
      <Component
        ref={ref}
        className={cn(
          BOX_ROOT_CLASSES,
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
) as BoxComponent;

Box.displayName = "Box";

export default Box;
