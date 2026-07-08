/**
 * Ascend Enterprise UI
 * --------------------
 * Flex Tests
 */

import * as React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Flex } from "./Flex";

describe("Flex", () => {
  it("renders children", () => {
    render(
      <Flex>
        Flex Content
      </Flex>,
    );

    expect(
      screen.getByText("Flex Content"),
    ).toBeInTheDocument();
  });

  it("renders a div by default", () => {
    render(
      <Flex>
        Default Flex
      </Flex>,
    );

    expect(
      screen.getByText("Default Flex").tagName,
    ).toBe("DIV");
  });

  it("defaults to display flex", () => {
    render(
      <Flex>
        Default Display
      </Flex>,
    );

    expect(
      screen.getByText("Default Display"),
    ).toHaveClass("flex");
  });

  it("renders inline-flex when inline is true", () => {
    render(
      <Flex inline>
        Inline Flex
      </Flex>,
    );

    expect(
      screen.getByText("Inline Flex"),
    ).toHaveClass("inline-flex");
  });

  it("respects an explicit display prop", () => {
    render(
      <Flex display="grid">
        Grid Override
      </Flex>,
    );

    const element = screen.getByText(
      "Grid Override",
    );

    expect(element).toHaveClass("grid");
    expect(element).not.toHaveClass("flex");
  });

  it("forwards layout props to Box", () => {
    render(
      <Flex
        justify="between"
        align="center"
        gap={4}
        p={6}
      >
        Layout Props
      </Flex>,
    );

    const element = screen.getByText(
      "Layout Props",
    );

    expect(element).toHaveClass("justify-between");
    expect(element).toHaveClass("items-center");
    expect(element).toHaveClass("gap-4");
    expect(element).toHaveClass("p-6");
  });

  it("supports polymorphic rendering", () => {
    render(
      <Flex as="section">
        Section Flex
      </Flex>,
    );

    expect(
      screen.getByText("Section Flex").tagName,
    ).toBe("SECTION");
  });

  it("passes through native HTML attributes", () => {
    render(
      <Flex
        id="flex"
        data-testid="flex"
        aria-label="Flex Container"
      >
        Attributes
      </Flex>,
    );

    const element = screen.getByTestId("flex");

    expect(element).toHaveAttribute("id", "flex");
    expect(element).toHaveAttribute(
      "aria-label",
      "Flex Container",
    );
  });

  it("preserves custom className", () => {
    render(
      <Flex className="custom-flex">
        Custom
      </Flex>,
    );

    expect(
      screen.getByText("Custom"),
    ).toHaveClass("custom-flex");
  });

  it("forwards refs", () => {
    const ref =
      React.createRef<HTMLDivElement>();

    render(
      <Flex ref={ref}>
        Ref Flex
      </Flex>,
    );

    expect(ref.current).toBeInstanceOf(
      HTMLDivElement,
    );

    expect(ref.current?.textContent).toBe(
      "Ref Flex",
    );
  });
});
