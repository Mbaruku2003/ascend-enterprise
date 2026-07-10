import {
  render,
  screen,
} from "@testing-library/react";

import { Fieldset } from "./Fieldset";

describe("Fieldset", () => {
  it("renders children", () => {
    render(
      <Fieldset>
        <div>Content</div>
      </Fieldset>,
    );

    expect(
      screen.getByText("Content"),
    ).toBeInTheDocument();
  });

  it("renders legend", () => {
    render(
      <Fieldset legend="Account">
        <div>Content</div>
      </Fieldset>,
    );

    expect(
      screen.getByText("Account"),
    ).toBeInTheDocument();
  });

  it("renders description", () => {
    render(
      <Fieldset
        legend="Account"
        description="Manage your account settings."
      >
        <div>Content</div>
      </Fieldset>,
    );

    expect(
      screen.getByText(
        "Manage your account settings.",
      ),
    ).toBeInTheDocument();
  });

  it("renders actions", () => {
    render(
      <Fieldset
        legend="Profile"
        actions={<button>Edit</button>}
      >
        <div>Content</div>
      </Fieldset>,
    );

    expect(
      screen.getByRole("button"),
    ).toHaveTextContent("Edit");
  });

  it("supports disabled", () => {
    render(
      <Fieldset
        disabled
        legend="Profile"
      >
        <input />
      </Fieldset>,
    );

    expect(
      screen.getByRole("group"),
    ).toBeDisabled();
  });
});
