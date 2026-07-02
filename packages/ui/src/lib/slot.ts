/**
 * Ascend Enterprise UI
 * --------------------
 * Slot
 *
 * Enables the `asChild` composition pattern.
 *
 * Example:
 *
 * <Button asChild>
 *   <a href="/dashboard">Dashboard</a>
 * </Button>
 */

import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";

import { composeRefs } from "./composeRefs";
import { mergeProps } from "./mergeProps";

export interface SlotProps
  extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const Slot = forwardRef<HTMLElement, SlotProps>(
  ({ children, ...slotProps }, forwardedRef) => {
    const child = Children.only(children);

    if (!isValidElement(child)) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          "[Slot] Expected a single valid React element as a child.",
        );
      }

      return null;
    }

    const childElement = child as ReactElement<{
      ref?: React.Ref<HTMLElement>;
    }>;

    const mergedProps = mergeProps(
      slotProps,
      childElement.props,
    );

    return cloneElement(childElement, {
      ...mergedProps,
      ref: composeRefs(
        forwardedRef,
        childElement.props.ref,
      ),
    });
  },
);

Slot.displayName = "Slot";

export default Slot;
