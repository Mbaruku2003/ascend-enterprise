import { render, screen } from "@testing-library/react";

import { Input } from "../../../atoms/forms/Input";

import { FormField } from "./FormField";

describe("FormField", () => {
  it("renders the control", () => {
    render(
      <FormField label="Email">
        <Input />
      </FormField>,
    );

    expect(
      screen.getByLabelText("Email"),
    ).toBeInTheDocument();
  });

  it("renders description", () => {
    render(
      <FormField
        label="Email"
        description="Used for login."
      >
        <Input />
      </FormField>,
    );

    expect(
      screen.getByText(
        "Used for login.",
      ),
    ).toBeInTheDocument();
  });

  it("renders footer", () => {
    render(
      <FormField
        label="Email"
        footer={<span>Footer</span>}
      >
        <Input />
      </FormField>,
    );

    expect(
      screen.getByText("Footer"),
    ).toBeInTheDocument();
  });

  it("renders action", () => {
    render(
      <FormField
        label="Password"
        action={
          <button>
            Forgot?
          </button>
        }
      >
        <Input />
      </FormField>,
    );

    expect(
      screen.getByRole("button"),
    ).toBeInTheDocument();
  });
});
