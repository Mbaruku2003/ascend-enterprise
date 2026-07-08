import { render, screen } from "@testing-library/react";

import { Section } from "./Section";

describe("Section", () => {
  it("renders its children", () => {
    render(
      <Section>
        <div>Section Content</div>
      </Section>
    );

    expect(screen.getByText("Section Content")).toBeInTheDocument();
  });

  it("renders the default semantic element", () => {
    render(
      <Section data-testid="section">
        Content
      </Section>
    );

    expect(screen.getByTestId("section").tagName).toBe("SECTION");
  });

  it("renders a custom semantic element", () => {
    render(
      <Section
        as="main"
        data-testid="section"
      >
        Content
      </Section>
    );

    expect(screen.getByTestId("section").tagName).toBe("MAIN");
  });

  it("supports fullHeight", () => {
    render(
      <Section
        fullHeight
        data-testid="section"
      >
        Content
      </Section>
    );

    expect(screen.getByTestId("section")).toHaveStyle({
      minHeight: "100vh",
    });
  });

  it("supports bordered sections", () => {
    render(
      <Section
        bordered
        data-testid="section"
      >
        Content
      </Section>
    );

    expect(screen.getByTestId("section")).toHaveStyle({
      borderBottom:
        "1px solid var(--color-border)",
    });
  });

  it("supports custom class names", () => {
    render(
      <Section
        className="custom-section"
        data-testid="section"
      >
        Content
      </Section>
    );

    expect(screen.getByTestId("section")).toHaveClass(
      "custom-section"
    );
  });

  it("forwards arbitrary HTML attributes", () => {
    render(
      <Section
        aria-label="Main Section"
      >
        Content
      </Section>
    );

    expect(
      screen.getByLabelText("Main Section")
    ).toBeInTheDocument();
  });

  it("supports custom inline styles", () => {
    render(
      <Section
        style={{ opacity: 0.5 }}
        data-testid="section"
      >
        Content
      </Section>
    );

    expect(screen.getByTestId("section")).toHaveStyle({
      opacity: "0.5",
    });
  });

  it("renders multiple children", () => {
    render(
      <Section>
        <span>First</span>
        <span>Second</span>
      </Section>
    );

    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Section>
        Snapshot Content
      </Section>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
