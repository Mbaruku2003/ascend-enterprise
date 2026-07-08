import { forwardRef } from "react";

import { Box } from "../Box";

import type { SectionProps } from "./Section.types";

import {
  DEFAULT_SECTION_BACKGROUND,
  DEFAULT_SECTION_SIZE,
  resolveSectionBackground,
  resolveSectionBorder,
  resolveSectionHeight,
  resolveSectionPadding,
  resolveSectionSpacing,
} from "./Section.styles";

/**
 * Section
 *
 * Provides consistent vertical rhythm between major
 * areas of an application.
 *
 * Responsibilities:
 * - Vertical spacing
 * - Semantic page sections
 * - Optional backgrounds
 * - Optional separators
 *
 * Width management belongs to Container.
 */
export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      as = "section",
      children,

      size = DEFAULT_SECTION_SIZE,

      paddingY,
      paddingTop,
      paddingBottom,

      background = DEFAULT_SECTION_BACKGROUND,

      bordered = false,

      fullHeight = false,

      style,

      ...props
    },
    ref
  ) => {
    /**
     * Explicit padding overrides take precedence.
     */
    const paddingBlock =
      paddingY !== undefined
        ? resolveSectionPadding(paddingY)
        : resolveSectionSpacing(size);

    return (
      <Box
        ref={ref}
        as={as}
        paddingBlock={paddingBlock}
        paddingTop={
          paddingTop !== undefined
            ? resolveSectionPadding(paddingTop)
            : undefined
        }
        paddingBottom={
          paddingBottom !== undefined
            ? resolveSectionPadding(paddingBottom)
            : undefined
        }
        background={resolveSectionBackground(background)}
        borderBottom={resolveSectionBorder(bordered)}
        minHeight={resolveSectionHeight(fullHeight)}
        style={style}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Section.displayName = "Section";
