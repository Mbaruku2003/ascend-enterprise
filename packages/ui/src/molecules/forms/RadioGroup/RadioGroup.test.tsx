import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";

import { RadioGroup } from "./RadioGroup";

describe("RadioGroup", () => {
  const options = [
    {
      value: "light",
      label: "Light",
    },
    {
      value: "dark",
      label: "Dark",
    },
    {
      value: "system",
      label: "System",
    },
  ];

  it("renders all options", () => {
    render(
      <RadioGroup
        label="Theme"
        options={options}
      />,
    );

    expect(
      screen.getByLabelText("Light"),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Dark"),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("System"),
    ).toBeInTheDocument();
  });

  it("supports controlled value", () => {
    render(
      <RadioGroup
        label="Theme"
        value="dark"
        options={options}
      />,
    );

    expect(
      screen.getByLabelText("Dark"),
    ).toBeChecked();
  });

  it("calls onValueChange", () => {
    const onValueChange = vi.fn();

    render(
      <RadioGroup
        label="Theme"
        options={options}
        onValueChange={
          onValueChange
        }
      />,
    );

    fireEvent.click(
      screen.getByLabelText("Dark"),
    );

    expect(
      onValueChange,
    ).toHaveBeenCalledWith(
      "dark",
    );
  });
});
