import { render, screen } from "@testing-library/react";

import { Container } from "./Container";

describe("Container", () => {
  it("renders its children", () => {
    render(
      <Container>
        <div>Container Content</div>
      </Container>
    );

    expect(screen.getByText("Container Content")).toBeInTheDocument();
  });

  it("renders a custom HTML element", () => {
    render(
      <Container as="main" data-testid="container">
        Content
      </Container>
    );

    expect(screen.getByTestId("container").tagName).toBe("MAIN");
  });

  it("applies the default width", () => {
    render(
      <Container data-testid="container">
        Content
      </Container>
    );

    const container = screen.getByTestId("container");

    expect(container).toHaveStyle({
      width: "100%",
    });
  });

  it("supports fluid containers", () => {
    render(
      <Container
        fluid
        data-testid="container"
      >
        Content
      </Container>
    );

    expect(screen.getByTestId("container")).toHaveStyle({
      maxWidth: "100%",
    });
  });

  it("supports custom maxWidth", () => {
    render(
      <Container
        maxWidth="1600px"
        data-testid="container"
      >
        Content
      </Container>
    );

    expect(screen.getByTestId("container")).toHaveStyle({
      maxWidth: "1600px",
    });
  });

  it("supports custom width", () => {
    render(
      <Container
        width="80%"
        data-testid="container"
      >
        Content
      </Container>
    );

    expect(screen.getByTestId("container")).toHaveStyle({
      width: "80%",
    });
  });

  it("centers content by default", () => {
    render(
      <Container data-testid="container">
        Content
      </Container>
    );

    expect(screen.getByTestId("container")).toHaveStyle({
      marginInline: "auto",
    });
  });

  it("can disable centering", () => {
    render(
      <Container
        centered={false}
        data-testid="container"
      >
        Content
      </Container>
    );

    expect(screen.getByTestId("container")).not.toHaveStyle({
      marginInline: "auto",
    });
  });

  it("forwards className", () => {
    render(
      <Container
        className="custom-container"
        data-testid="container"
      >
        Content
      </Container>
    );

    expect(screen.getByTestId("container")).toHaveClass(
      "custom-container"
    );
  });

  it("forwards arbitrary props", () => {
    render(
      <Container
        data-testid="container"
        aria-label="Main Content"
      >
        Content
      </Container>
    );

    expect(screen.getByLabelText("Main Content")).toBeInTheDocument();
  });
});
