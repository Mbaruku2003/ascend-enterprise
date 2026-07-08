import { render, screen } from "@testing-library/react";

import { Spacer } from "./Spacer";

describe("Spacer", () => {
  it("renders successfully", () => {
    render(<Spacer data-testid="spacer" />);

    expect(screen.getByTestId("spacer")).toBeInTheDocument();
  });

  it("renders a div by default", () => {
    render(<Spacer data-testid="spacer" />);

    expect(screen.getByTestId("spacer").tagName).toBe("DIV");
  });

  it("renders a custom element", () => {
    render(
      <Spacer
        as="span"
        data-testid="spacer"
      />
    );

    expect(screen.getByTestId("spacer").tagName).toBe("SPAN");
  });

  it("is hidden from assistive technologies", () => {
    render(<Spacer data-testid="spacer" />);

    expect(screen.getByTestId("spacer")).toHaveAttribute(
      "aria-hidden",
      "true"
    );
  });

  it("supports horizontal spacing", () => {
    render(
      <Spacer
        axis="horizontal"
        data-testid="spacer"
      />
    );

    expect(screen.getByTestId("spacer")).toBeInTheDocument();
  });

  it("supports vertical spacing", () => {
    render(
      <Spacer
        axis="vertical"
        data-testid="spacer"
      />
    );

    expect(screen.getByTestId("spacer")).toBeInTheDocument();
  });

  it("supports grow", () => {
    render(
      <Spacer
        grow
        data-testid="spacer"
      />
    );

    expect(screen.getByTestId("spacer")).toHaveStyle({
      flexGrow: 1,
    });
  });

  it("supports shrink", () => {
    render(
      <Spacer
        shrink={false}
        data-testid="spacer"
      />
    );

    expect(screen.getByTestId("spacer")).toHaveStyle({
      flexShrink: 0,
    });
  });

  it("supports custom class names", () => {
    render(
      <Spacer
        className="custom-spacer"
        data-testid="spacer"
      />
    );

    expect(screen.getByTestId("spacer")).toHaveClass(
      "custom-spacer"
    );
  });

  it("supports inline styles", () => {
    render(
      <Spacer
        style={{ opacity: 0.5 }}
        data-testid="spacer"
      />
    );

    expect(screen.getByTestId("spacer")).toHaveStyle({
      opacity: "0.5",
    });
  });

  it("matches snapshot", () => {
    const { container } = render(<Spacer />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

