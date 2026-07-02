/**
 * Ascend Enterprise UI
 * --------------------
 * Paragraph Tests
 */

import * as React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Paragraph } from "./Paragraph";

describe("Paragraph", () => {
  it("renders children", () => {
    render(
      <Paragraph>
        Lorem ipsum dolor sit amet.
      </Paragraph>,
    );

    expect(
      screen.getByText("Lorem ipsum dolor sit amet."),
    ).toBeInTheDocument();
  });

  it("renders a paragraph by default", () => {
    render(
      <Paragraph>
        Default Paragraph
      </Paragraph>,
    );

    const element = screen.getByText(
      "Default Paragraph",
    );

    expect(element.tagName).toBe("P");
  });

  it("renders the specified element with the as prop", () => {
    render(
      <Paragraph as="blockquote">
        Quoted text
      </Paragraph>,
    );

    const element = screen.getByText(
      "Quoted text",
    );

    expect(element.tagName).toBe("BLOCKQUOTE");
  });

  it("applies custom className", () => {
    render(
      <Paragraph className="custom-paragraph">
        Custom Class
      </Paragraph>,
    );

    expect(
      screen.getByText("Custom Class"),
    ).toHaveClass("custom-paragraph");
  });

  it("applies typography classes", () => {
    render(
      <Paragraph
        size="lg"
        weight="bold"
        color="primary"
      >
        Styled Paragraph
      </Paragraph>,
    );

    const element = screen.getByText(
      "Styled Paragraph",
    );

    expect(element.className).toContain("text-lg");
    expect(element.className).toContain("font-bold");
    expect(element.className).toContain("text-primary");
  });

  it("supports truncate", () => {
    render(
      <Paragraph truncate>
        Long paragraph
      </Paragraph>,
    );

    expect(
      screen.getByText("Long paragraph"),
    ).toHaveClass("truncate");
  });

  it("supports noWrap", () => {
    render(
      <Paragraph noWrap>
        No Wrap
      </Paragraph>,
    );

    expect(
      screen.getByText("No Wrap"),
    ).toHaveClass("whitespace-nowrap");
  });

  it("forwards refs", () => {
    const ref = React.createRef<HTMLParagraphElement>();

    render(
      <Paragraph ref={ref}>
        Ref Paragraph
      </Paragraph>,
    );

    expect(ref.current).toBeInstanceOf(
      HTMLParagraphElement,
    );

    expect(ref.current?.textContent).toBe(
      "Ref Paragraph",
    );
  });
});
