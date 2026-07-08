/**
 * Ascend Enterprise UI
 * --------------------
 * Label Tests
 */

import * as React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Label } from "./Label";

describe("Label", () => {
  it("renders children", () => {
    render(
      <Label>
        Email Address
      </Label>,
    );

    expect(
      screen.getByText("Email Address"),
    ).toBeInTheDocument();
  });

  it("renders a label by default", () => {
    render(
      <Label>
        Username
      </Label>,
    );

    const element = screen.getByText("Username");

    expect(element.tagName).toBe("LABEL");
  });

  it("associates with a form control using htmlFor", () => {
    render(
      <>
        <Label htmlFor="email">
          Email
        </Label>

        <input id="email" />
      </>,
    );

    const label = screen.getByText("Email");

    expect(label).toHaveAttribute(
      "for",
      "email",
    );
  });

  it("renders the specified element using the as prop", () => {
    render(
      <Label as="span">
        Custom Label
      </Label>,
    );

    const element = screen.getByText(
      "Custom Label",
    );

    expect(element.tagName).toBe("SPAN");
  });

  it("applies a custom className", () => {
    render(
      <Label className="custom-label">
        Styled Label
      </Label>,
    );

    expect(
      screen.getByText("Styled Label"),
    ).toHaveClass("custom-label");
  });

  it("applies typography classes", () => {
    render(
      <Label
        size="lg"
        weight="bold"
        color="primary"
      >
        Typography
      </Label>,
    );

    const element = screen.getByText(
      "Typography",
    );

    expect(element.className).toContain(
      "text-lg",
    );

    expect(element.className).toContain(
      "font-bold",
    );

    expect(element.className).toContain(
      "text-primary",
    );
  });

  it("applies disabled styling", () => {
    render(
      <Label disabled>
        Disabled Label
      </Label>,
    );

    const element = screen.getByText(
      "Disabled Label",
    );

    expect(element.className).toContain(
      "opacity-60",
    );

    expect(element.className).toContain(
      "cursor-not-allowed",
    );
  });

  it("forwards refs", () => {
    const ref = React.createRef<HTMLLabelElement>();

    render(
      <Label ref={ref}>
        Ref Label
      </Label>,
    );

    expect(ref.current).toBeInstanceOf(
      HTMLLabelElement,
    );

    expect(ref.current?.textContent).toBe(
      "Ref Label",
    );
  });
});
