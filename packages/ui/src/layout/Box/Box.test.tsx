/**
 * Ascend Enterprise UI
 * --------------------
 * Box Tests
 */

import * as React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Box } from "./Box";

describe("Box", () => {
  it("renders children", () => {
    render(
      <Box>
        Hello Box
      </Box>,
    );

    expect(
      screen.getByText("Hello Box"),
    ).toBeInTheDocument();
  });

  it("renders a div by default", () => {
    render(
      <Box>
        Default Element
      </Box>,
    );

    const element = screen.getByText(
      "Default Element",
    );

    expect(element.tagName).toBe("DIV");
  });

  it("renders the specified element using the as prop", () => {
    render(
      <Box as="section">
        Section Box
      </Box>,
    );

    const element = screen.getByText(
      "Section Box",
    );

    expect(element.tagName).toBe("SECTION");
  });

  it("applies spacing classes", () => {
    render(
      <Box
        p={4}
        m={2}
      >
        Spacing
      </Box>,
    );

    const element = screen.getByText(
      "Spacing",
    );

    expect(element.className).toContain("p-4");
    expect(element.className).toContain("m-2");
  });

  it("applies flex layout classes", () => {
    render(
      <Box
        display="flex"
        justify="between"
        align="center"
        gap={4}
      >
        Flex Layout
      </Box>,
    );

    const element = screen.getByText(
      "Flex Layout",
    );

    expect(element.className).toContain("flex");
    expect(element.className).toContain(
      "justify-between",
    );
    expect(element.className).toContain(
      "items-center",
    );
    expect(element.className).toContain("gap-4");
  });

  it("applies border radius and shadow classes", () => {
    render(
      <Box
        rounded="lg"
        shadow="md"
      >
        Card
      </Box>,
    );

    const element = screen.getByText(
      "Card",
    );

    expect(element.className).toContain(
      "rounded-lg",
    );

    expect(element.className).toContain(
      "shadow-md",
    );
  });

  it("applies overflow classes", () => {
    render(
      <Box overflow="hidden">
        Overflow
      </Box>,
    );

    expect(
      screen.getByText("Overflow"),
    ).toHaveClass("overflow-hidden");
  });

  it("preserves custom className", () => {
    render(
      <Box className="custom-box">
        Custom
      </Box>,
    );

    expect(
      screen.getByText("Custom"),
    ).toHaveClass("custom-box");
  });

  it("passes through HTML attributes", () => {
    render(
      <Box
        id="box"
        data-testid="layout-box"
        aria-label="Layout Box"
      >
        Attributes
      </Box>,
    );

    const element = screen.getByTestId(
      "layout-box",
    );

    expect(element).toHaveAttribute(
      "id",
      "box",
    );

    expect(element).toHaveAttribute(
      "aria-label",
      "Layout Box",
    );
  });

  it("forwards refs", () => {
    const ref =
      React.createRef<HTMLDivElement>();

    render(
      <Box ref={ref}>
        Ref Box
      </Box>,
    );

    expect(ref.current).toBeInstanceOf(
      HTMLDivElement,
    );

    expect(ref.current?.textContent).toBe(
      "Ref Box",
    );
  });
});
