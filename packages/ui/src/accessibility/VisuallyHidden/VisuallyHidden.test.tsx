/**
 * Ascend Enterprise UI
 * --------------------
 * VisuallyHidden Tests
 */

import * as React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { VisuallyHidden } from "./VisuallyHidden";

describe("VisuallyHidden", () => {
  it("renders children", () => {
    render(
      <VisuallyHidden>
        Hidden Content
      </VisuallyHidden>,
    );

    expect(
      screen.getByText("Hidden Content"),
    ).toBeInTheDocument();
  });

  it("renders a span by default", () => {
    render(
      <VisuallyHidden>
        Default Element
      </VisuallyHidden>,
    );

    const element = screen.getByText(
      "Default Element",
    );

    expect(element.tagName).toBe("SPAN");
  });

  it("renders the specified element using the as prop", () => {
    render(
      <VisuallyHidden as="label">
        Hidden Label
      </VisuallyHidden>,
    );

    const element = screen.getByText(
      "Hidden Label",
    );

    expect(element.tagName).toBe("LABEL");
  });

  it("applies visually hidden styles", () => {
    render(
      <VisuallyHidden>
        Screen Reader Text
      </VisuallyHidden>,
    );

    const element = screen.getByText(
      "Screen Reader Text",
    );

    expect(element).toHaveStyle({
      position: "absolute",
      width: "1px",
      height: "1px",
      overflow: "hidden",
      whiteSpace: "nowrap",
      border: "0",
    });
  });

  it("merges custom inline styles", () => {
    render(
      <VisuallyHidden
        style={{
          opacity: 0.5,
        }}
      >
        Custom Style
      </VisuallyHidden>,
    );

    const element = screen.getByText(
      "Custom Style",
    );

    expect(element).toHaveStyle({
      opacity: "0.5",
    });
  });

  it("passes through arbitrary HTML attributes", () => {
    render(
      <VisuallyHidden
        data-testid="hidden-content"
        aria-live="polite"
      >
        Live Region
      </VisuallyHidden>,
    );

    const element = screen.getByTestId(
      "hidden-content",
    );

    expect(element).toHaveAttribute(
      "aria-live",
      "polite",
    );
  });

  it("forwards refs", () => {
    const ref = React.createRef<HTMLSpanElement>();

    render(
      <VisuallyHidden ref={ref}>
        Ref Content
      </VisuallyHidden>,
    );

    expect(ref.current).toBeInstanceOf(
      HTMLSpanElement,
    );

    expect(ref.current?.textContent).toBe(
      "Ref Content",
    );
  });
});
