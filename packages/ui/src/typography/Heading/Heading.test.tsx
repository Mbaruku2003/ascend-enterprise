/**
 * Ascend Enterprise UI
 * --------------------
 * Heading Tests
 */

import * as React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Heading } from "./Heading";

describe("Heading", () => {
  it("renders children", () => {
    render(<Heading>Dashboard</Heading>);

    expect(
      screen.getByText("Dashboard"),
    ).toBeInTheDocument();
  });

  it("renders an h2 by default", () => {
    render(<Heading>Default Heading</Heading>);

    expect(
      screen.getByRole("heading", { level: 2 }),
    ).toBeInTheDocument();
  });

  it("renders an h1 when level is 1", () => {
    render(
      <Heading level={1}>
        Main Heading
      </Heading>,
    );

    expect(
      screen.getByRole("heading", { level: 1 }),
    ).toBeInTheDocument();
  });

  it("renders an h3 when level is 3", () => {
    render(
      <Heading level={3}>
        Section Heading
      </Heading>,
    );

    expect(
      screen.getByRole("heading", { level: 3 }),
    ).toBeInTheDocument();
  });

  it("renders an h6 when level is 6", () => {
    render(
      <Heading level={6}>
        Small Heading
      </Heading>,
    );

    expect(
      screen.getByRole("heading", { level: 6 }),
    ).toBeInTheDocument();
  });

  it("allows overriding the rendered element with the as prop", () => {
    render(
      <Heading
        level={1}
        as="div"
      >
        Custom Element
      </Heading>,
    );

    const element = screen.getByText("Custom Element");

    expect(element.tagName).toBe("DIV");
  });

  it("applies a custom className", () => {
    render(
      <Heading className="custom-heading">
        Styled Heading
      </Heading>,
    );

    expect(
      screen.getByText("Styled Heading"),
    ).toHaveClass("custom-heading");
  });

  it("forwards refs", () => {
    const ref = React.createRef<HTMLHeadingElement>();

    render(
      <Heading ref={ref}>
        Ref Heading
      </Heading>,
    );

    expect(ref.current).toBeInstanceOf(
      HTMLHeadingElement,
    );

    expect(ref.current?.textContent).toBe(
      "Ref Heading",
    );
  });
});
