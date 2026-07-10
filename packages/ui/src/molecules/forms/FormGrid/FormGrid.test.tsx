import {
  render,
  screen,
} from "@testing-library/react";

import { FormGrid } from "./FormGrid";

describe("FormGrid", () => {
  it("renders children", () => {
    render(
      <FormGrid>
        <div>Field 1</div>
        <div>Field 2</div>
      </FormGrid>,
    );

    expect(
      screen.getByText("Field 1"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Field 2"),
    ).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <FormGrid className="custom-grid">
        <div>Child</div>
      </FormGrid>,
    );

    expect(
      screen.getByText("Child")
        .parentElement,
    ).toHaveClass("custom-grid");
  });

  it("renders with four columns", () => {
    render(
      <FormGrid columns={4}>
        <div>One</div>
      </FormGrid>,
    );

    expect(
      screen.getByText("One"),
    ).toBeInTheDocument();
  });
});
