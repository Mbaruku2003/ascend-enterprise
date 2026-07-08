/**
 * Ascend Enterprise UI
 * --------------------
 * Caption Tests
 */

import * as React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Caption } from "./Caption";

describe("Caption", () => {
  it("renders children", () => {
    render(
      <Caption>
        Uploaded 5 minutes ago
      </Caption>,
    );

    expect(
      screen.getByText("Uploaded 5 minutes ago"),
    ).toBeInTheDocument();
  });

  it("renders a figcaption by default", () => {
    render(
      <Caption>
        Figure Caption
      </Caption>,
    );

    const element = screen.getByText(
      "Figure Caption",
    );

    expect(element.tagName).toBe("FIGCAPTION");
  });

  it("renders the specified element using the as prop", () => {
    render(
      <Caption as="span">
        Custom Caption
      </Caption>,
    );

    const element = screen.getByText(
      "Custom Caption",
    );

    expect(element.tagName).toBe("SPAN");
  });

  it("applies a custom className", () => {
    render(
      <Caption className="custom-caption">
        Styled Caption
      </Caption>,
    );

    expect(
      screen.getByText("Styled Caption"),
    ).toHaveClass("custom-caption");
  });

  it("applies default typography styles", () => {
    render(
      <Caption>
        Default Styling
      </Caption>,
    );

    const element = screen.getByText(
      "Default Styling",
    );

    expect(element.className).toContain("text-sm");
    expect(element.className).toContain("text-muted");
    expect(element.className).toContain("font-normal");
  });

  it("allows typography overrides", () => {
    render(
      <Caption
        size="lg"
        weight="bold"
        color="primary"
      >
        Custom Styling
      </Caption>,
    );

    const element = screen.getByText(
      "Custom Styling",
    );

    expect(element.className).toContain("text-lg");
    expect(element.className).toContain("font-bold");
    expect(element.className).toContain("text-primary");
  });

  it("supports truncate", () => {
    render(
      <Caption truncate>
        Long caption text
      </Caption>,
    );

    expect(
      screen.getByText("Long caption text"),
    ).toHaveClass("truncate");
  });

  it("supports noWrap", () => {
    render(
      <Caption noWrap>
        No Wrap Caption
      </Caption>,
    );

    expect(
      screen.getByText("No Wrap Caption"),
    ).toHaveClass("whitespace-nowrap");
  });

  it("forwards refs", () => {
    const ref = React.createRef<HTMLElement>();

    render(
      <Caption ref={ref}>
        Ref Caption
      </Caption>,
    );

    expect(ref.current).toBeInstanceOf(
      HTMLElement,
    );

    expect(ref.current?.textContent).toBe(
      "Ref Caption",
    );
  });
});
