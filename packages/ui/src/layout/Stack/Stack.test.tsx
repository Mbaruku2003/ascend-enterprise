/**
 * Ascend Enterprise UI
 * --------------------
 * Stack Tests
 */

import * as React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Stack } from "./Stack";

describe("Stack", () => {
  it("renders children", () => {
    render(
      <Stack>
        Stack Content
      </Stack>,
    );

    expect(
      screen.getByText("Stack Content"),
    ).toBeInTheDocument();
  });

  it("renders a div by default", () => {
    render(
      <Stack>
        Default Stack
      </Stack>,
    );

    expect(
      screen.getByText("Default Stack").tagName,
    ).toBe("DIV");
  });

  it("defaults to a column layout", () => {
    render(
      <Stack>
        Column Stack
      </Stack>,
    );

    expect(
      screen.getByText("Column Stack"),
    ).toHaveClass("flex");

    expect(
      screen.getByText("Column Stack"),
    ).toHaveClass("flex-col");
  });

  it("allows overriding the direction", () => {
    render(
      <Stack direction="row">
        Row Stack
      </Stack>,
    );

    const element =
      screen.getByText("Row Stack");

    expect(element).toHaveClass("flex");
    expect(element).toHaveClass("flex-row");
  });

  it("supports gap spacing", () => {
    render(
      <Stack gap={6}>
        Gap Stack
      </Stack>,
    );

    expect(
      screen.getByText("Gap Stack"),
    ).toHaveClass("gap-6");
  });

  it("supports inline stacks", () => {
    render(
      <Stack inline>
        Inline Stack
      </Stack>,
    );

    expect(
      screen.getByText("Inline Stack"),
    ).toHaveClass("inline-flex");
  });

  it("forwards layout props", () => {
    render(
      <Stack
        p={4}
        rounded="lg"
        shadow="md"
        align="center"
      >
        Layout Props
      </Stack>,
    );

    const element =
      screen.getByText("Layout Props");

    expect(element).toHaveClass("p-4");
    expect(element).toHaveClass("rounded-lg");
    expect(element).toHaveClass("shadow-md");
    expect(element).toHaveClass("items-center");
  });

  it("supports polymorphic rendering", () => {
    render(
      <Stack as="section">
        Section Stack
      </Stack>,
    );

    expect(
      screen.getByText("Section Stack").tagName,
    ).toBe("SECTION");
  });

  it("passes through native HTML attributes", () => {
    render(
      <Stack
        id="stack"
        data-testid="stack"
        aria-label="Stack Container"
      >
        Attributes
      </Stack>,
    );

    const element =
      screen.getByTestId("stack");

    expect(element).toHaveAttribute(
      "id",
      "stack",
    );

    expect(element).toHaveAttribute(
      "aria-label",
      "Stack Container",
    );
  });

  it("preserves custom className", () => {
    render(
      <Stack className="custom-stack">
        Custom
      </Stack>,
    );

    expect(
      screen.getByText("Custom"),
    ).toHaveClass("custom-stack");
  });

  it("forwards refs", () => {
    const ref =
      React.createRef<HTMLDivElement>();

    render(
      <Stack ref={ref}>
        Ref Stack
      </Stack>,
    );

    expect(ref.current).toBeInstanceOf(
      HTMLDivElement,
    );

    expect(ref.current?.textContent).toBe(
      "Ref Stack",
    );
  });
});
