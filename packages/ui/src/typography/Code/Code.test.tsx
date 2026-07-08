/**
 * Ascend Enterprise UI
 * --------------------
 * Code Tests
 */

import * as React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Code } from "./Code";

describe("Code", () => {
  it("renders children", () => {
    render(
      <Code>
        npm install
      </Code>,
    );

    expect(
      screen.getByText("npm install"),
    ).toBeInTheDocument();
  });

  it("renders a code element by default", () => {
    render(
      <Code>
        const value = 42;
      </Code>,
    );

    const element = screen.getByText(
      "const value = 42;",
    );

    expect(element.tagName).toBe("CODE");
  });

  it("renders the specified element using the as prop", () => {
    render(
      <Code as="span">
        Inline Code
      </Code>,
    );

    const element = screen.getByText(
      "Inline Code",
    );

    expect(element.tagName).toBe("SPAN");
  });

  it("renders inline mode by default", () => {
    render(
      <Code>
        npm install
      </Code>,
    );

    const element = screen.getByText(
      "npm install",
    );

    expect(element.className).toContain("inline");
  });

  it("renders block mode", () => {
    render(
      <Code block>
        npm install
      </Code>,
    );

    const element = screen.getByText(
      "npm install",
    );

    expect(element.className).toContain("block");
    expect(element.className).toContain("w-full");
  });

  it("preserves whitespace by default", () => {
    render(
      <Code>
        line 1
      </Code>,
    );

    const element = screen.getByText(
      "line 1",
    );

    expect(element.className).toMatch(
      /whitespace-pre/
    );
  });

  it("allows disabling whitespace preservation", () => {
    render(
      <Code preserveWhitespace={false}>
        line 1
      </Code>,
    );

    const element = screen.getByText(
      "line 1",
    );

    expect(element.className).toContain(
      "whitespace-normal",
    );
  });

  it("applies monospace typography", () => {
    render(
      <Code>
        console.log()
      </Code>,
    );

    const element = screen.getByText(
      "console.log()",
    );

    expect(element.className).toContain(
      "font-mono",
    );
  });

  it("applies typography overrides", () => {
    render(
      <Code
        size="lg"
        weight="bold"
        color="primary"
      >
        yarn install
      </Code>,
    );

    const element = screen.getByText(
      "yarn install",
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

  it("preserves custom className", () => {
    render(
      <Code className="custom-code">
        pnpm install
      </Code>,
    );

    expect(
      screen.getByText("pnpm install"),
    ).toHaveClass("custom-code");
  });

  it("forwards refs", () => {
    const ref = React.createRef<HTMLElement>();

    render(
      <Code ref={ref}>
        Ref Code
      </Code>,
    );

    expect(ref.current).toBeInstanceOf(
      HTMLElement,
    );

    expect(ref.current?.textContent).toBe(
      "Ref Code",
    );
  });
});
