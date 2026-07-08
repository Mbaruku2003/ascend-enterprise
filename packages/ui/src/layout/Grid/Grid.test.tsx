/**
 * Ascend Enterprise UI
 * --------------------
 * Grid Tests
 */

import * as React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Grid } from "./Grid";

describe("Grid", () => {
  it("renders children", () => {
    render(
      <Grid>
        Grid Content
      </Grid>,
    );

    expect(
      screen.getByText("Grid Content"),
    ).toBeInTheDocument();
  });

  it("renders a div by default", () => {
    render(
      <Grid>
        Default Grid
      </Grid>,
    );

    expect(
      screen.getByText("Default Grid").tagName,
    ).toBe("DIV");
  });

  it("defaults to display grid", () => {
    render(
      <Grid>
        Grid Layout
      </Grid>,
    );

    expect(
      screen.getByText("Grid Layout"),
    ).toHaveClass("grid");
  });

  it("respects an explicit display prop", () => {
    render(
      <Grid display="flex">
        Flex Override
      </Grid>,
    );

    const element =
      screen.getByText("Flex Override");

    expect(element).toHaveClass("flex");
    expect(element).not.toHaveClass("grid");
  });

  it("forwards layout props", () => {
    render(
      <Grid
        gap={4}
        p={6}
        rounded="lg"
        shadow="md"
      >
        Layout Props
      </Grid>,
    );

    const element =
      screen.getByText("Layout Props");

    expect(element).toHaveClass("gap-4");
    expect(element).toHaveClass("p-6");
    expect(element).toHaveClass("rounded-lg");
    expect(element).toHaveClass("shadow-md");
  });

  it("accepts grid-specific props", () => {
    render(
      <Grid
        columns={3}
        rows={2}
      >
        Grid Props
      </Grid>,
    );

    expect(
      screen.getByText("Grid Props"),
    ).toBeInTheDocument();

    // Grid-specific props are currently forwarded.
    // Their CSS behavior is implemented by the shared
    // layout engine in a later milestone.
  });

  it("supports polymorphic rendering", () => {
    render(
      <Grid as="section">
        Section Grid
      </Grid>,
    );

    expect(
      screen.getByText("Section Grid").tagName,
    ).toBe("SECTION");
  });

  it("passes through native HTML attributes", () => {
    render(
      <Grid
        id="grid"
        data-testid="grid"
        aria-label="Grid Container"
      >
        Attributes
      </Grid>,
    );

    const element =
      screen.getByTestId("grid");

    expect(element).toHaveAttribute(
      "id",
      "grid",
    );

    expect(element).toHaveAttribute(
      "aria-label",
      "Grid Container",
    );
  });

  it("preserves custom className", () => {
    render(
      <Grid className="custom-grid">
        Custom
      </Grid>,
    );

    expect(
      screen.getByText("Custom"),
    ).toHaveClass("custom-grid");
  });

  it("forwards refs", () => {
    const ref =
      React.createRef<HTMLDivElement>();

    render(
      <Grid ref={ref}>
        Ref Grid
      </Grid>,
    );

    expect(ref.current).toBeInstanceOf(
      HTMLDivElement,
    );

    expect(ref.current?.textContent).toBe(
      "Ref Grid",
    );
  });
});
