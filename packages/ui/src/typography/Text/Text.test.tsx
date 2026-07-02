/**
 * Ascend Enterprise UI
 * --------------------
 * Text Tests
 */

import * as React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Text } from "./Text";

describe("Text", () => {
  it("renders children", () => {
    render(<Text>Hello Ascend</Text>);

    expect(screen.getByText("Hello Ascend")).toBeInTheDocument();
  });

  it("renders a span by default", () => {
    render(<Text>Default Element</Text>);

    const element = screen.getByText("Default Element");

    expect(element.tagName).toBe("SPAN");
  });

  it("renders the specified element with the as prop", () => {
    render(<Text as="label">Email</Text>);

    const element = screen.getByText("Email");

    expect(element.tagName).toBe("LABEL");
  });

  it("applies custom className", () => {
    render(
      <Text className="custom-class">
        Custom Class
      </Text>,
    );

    expect(screen.getByText("Custom Class")).toHaveClass(
      "custom-class",
    );
  });

  it("applies typography classes", () => {
    render(
      <Text
        size="lg"
        weight="bold"
        color="primary"
      >
        Typography
      </Text>,
    );

    const element = screen.getByText("Typography");

    expect(element.className).toContain("text-lg");
    expect(element.className).toContain("font-bold");
    expect(element.className).toContain("text-primary");
  });

  it("supports truncate", () => {
    render(<Text truncate>Long Text</Text>);

    expect(screen.getByText("Long Text")).toHaveClass(
      "truncate",
    );
  });

  it("supports noWrap", () => {
    render(<Text noWrap>No Wrap</Text>);

    expect(screen.getByText("No Wrap")).toHaveClass(
      "whitespace-nowrap",
    );
  });

  it("forwards refs", () => {
    const ref = React.createRef<HTMLSpanElement>();

    render(
      <Text ref={ref}>
        Ref Test
      </Text>,
    );

    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    expect(ref.current?.textContent).toBe("Ref Test");
  });
});
