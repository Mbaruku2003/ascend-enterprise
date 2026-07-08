import { forwardRef } from "react";

import { Box } from "../Box";
import type { ContainerProps } from "./Container.types";

import {
  DEFAULT_CONTAINER_PADDING,
  DEFAULT_CONTAINER_SIZE,
  resolveContainerMargin,
  resolveContainerMaxWidth,
  resolveContainerPadding,
} from "./Container.styles";

/**
 * Container
 *
 * Centers page content and constrains its maximum width.
 *
 * Container should only be responsible for:
 *
 * - width
 * - max-width
 * - horizontal padding
 * - horizontal centering
 *
 * Vertical spacing should be handled by Section.
 */
export const Container = forwardRef<HTMLElement, ContainerProps>(
  (
    {
      as = "div",
      children,
      size = DEFAULT_CONTAINER_SIZE,
      fluid = false,
      centered = true,
      padding = DEFAULT_CONTAINER_PADDING,
      maxWidth,
      width = "100%",
      style,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        as={as}
        width={width}
        maxWidth={resolveContainerMaxWidth(
          size,
          fluid,
          maxWidth
        )}
        marginInline={resolveContainerMargin(centered)}
        paddingInline={resolveContainerPadding(padding)}
        boxSizing="border-box"
        style={style}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Container.displayName = "Container";
