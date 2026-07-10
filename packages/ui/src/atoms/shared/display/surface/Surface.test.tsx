import { render, screen } from "@testing-library/react";

import Surface from "./Surface";

describe("Surface", () => {
  it("renders children", () => {
    render(
      <Surface>
        Content
      </Surface>,
    );

    expect(
      screen.getByText("Content"),
    ).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <Surface className="custom-class">
        Content
      </Surface>,
    );

    expect(
      screen
        .getByText("Content")
        .parentElement,
    ).toHaveClass("custom-class");
  });

  it("renders outlined variant", () => {
    render(
      <Surface variant="outlined">
        Content
      </Surface>,
    );

    expect(
      screen
        .getByText("Content")
        .parentElement,
    ).toHaveClass("border");
  });

  it("renders elevated surface", () => {
    render(
      <Surface elevation="lg">
        Content
      </Surface>,
    );

    expect(
      screen
        .getByText("Content")
        .parentElement,
    ).toHaveClass("shadow-lg");
  });

  it("renders interactive surface", () => {
    render(
      <Surface interactive>
        Content
      </Surface>,
    );

    expect(
      screen
        .getByText("Content")
        .parentElement,
    ).toHaveClass("cursor-pointer");
  });
});
