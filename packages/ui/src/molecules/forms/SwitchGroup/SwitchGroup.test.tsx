import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";

import { SwitchGroup } from "./SwitchGroup";

describe("SwitchGroup", () => {
  const options = [
    {
      value: "email",
      label: "Email",
    },
    {
      value: "sms",
      label: "SMS",
    },
  ];

  it("renders all switches", () => {
    render(
      <SwitchGroup
        options={options}
      />,
    );

    expect(
      screen.getByLabelText("Email"),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("SMS"),
    ).toBeInTheDocument();
  });

  it("calls onValueChange", () => {
    const onValueChange = vi.fn();

    render(
      <SwitchGroup
        options={options}
        onValueChange={
          onValueChange
        }
      />,
    );

    fireEvent.click(
      screen.getByLabelText("Email"),
    );

    expect(
      onValueChange,
    ).toHaveBeenCalled();
  });
});
