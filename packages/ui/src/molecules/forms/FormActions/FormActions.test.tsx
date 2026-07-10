import {
  render,
  screen,
} from "@testing-library/react";

import { FormActions } from "./FormActions";

describe("FormActions", () => {
  it("renders children", () => {
    render(
      <FormActions>
        <button>
          Cancel
        </button>

        <button>
          Save
        </button>
      </FormActions>,
    );

    expect(
      screen.getByText("Cancel"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Save"),
    ).toBeInTheDocument();
  });

  it("supports custom className", () => {
    render(
      <FormActions className="custom">
        <button>Save</button>
      </FormActions>,
    );

    expect(
      screen
        .getByText("Save")
        .parentElement,
    ).toHaveClass("custom");
  });

  it("renders vertical layout", () => {
    render(
      <FormActions direction="vertical">
        <button>A</button>
      </FormActions>,
    );

    expect(
      screen.getByText("A"),
    ).toBeInTheDocument();
  });
});
