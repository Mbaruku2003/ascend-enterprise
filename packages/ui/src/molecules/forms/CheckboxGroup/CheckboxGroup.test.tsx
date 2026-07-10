import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";

import { CheckboxGroup } from "./CheckboxGroup";

describe("CheckboxGroup", () => {
  const options = [
    {
      value: "react",
      label: "React",
    },
    {
      value: "vue",
      label: "Vue",
    },
    {
      value: "svelte",
      label: "Svelte",
    },
  ];

  it("renders all options", () => {
    render(
      <CheckboxGroup
        label="Frameworks"
        options={options}
      />,
    );

    expect(
      screen.getByLabelText("React"),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Vue"),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Svelte"),
    ).toBeInTheDocument();
  });

  it("supports controlled values", () => {
    render(
      <CheckboxGroup
        label="Frameworks"
        options={options}
        value={["react"]}
      />,
    );

    expect(
      screen.getByLabelText("React"),
    ).toBeChecked();

    expect(
      screen.getByLabelText("Vue"),
    ).not.toBeChecked();
  });

  it("calls onValueChange", () => {
    const onValueChange = vi.fn();

    render(
      <CheckboxGroup
        label="Frameworks"
        options={options}
        onValueChange={
          onValueChange
        }
      />,
    );

    fireEvent.click(
      screen.getByLabelText("React"),
    );

    expect(
      onValueChange,
    ).toHaveBeenCalledWith([
      "react",
    ]);
  });

  it("disables the whole group", () => {
    render(
      <CheckboxGroup
        disabled
        label="Frameworks"
        options={options}
      />,
    );

    expect(
      screen.getByLabelText("React"),
    ).toBeDisabled();

    expect(
      screen.getByLabelText("Vue"),
    ).toBeDisabled();
  });
});
