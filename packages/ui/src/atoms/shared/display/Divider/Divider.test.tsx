import { render, screen } from "@testing-library/react";

import Divider from "./Divider";

describe("Divider", () => {
  it("renders a separator", () => {
    render(<Divider />);

    expect(
      screen.getByRole("separator"),
    ).toBeInTheDocument();
  });

  it("supports decorative mode", () => {
    render(<Divider decorative />);

    expect(
      screen.queryByRole("separator"),
    ).not.toBeInTheDocument();
  });

  it("renders a vertical divider", () => {
    render(
      <Divider orientation="vertical" />,
    );

    expect(
      screen.getByRole("separator"),
    ).toHaveAttribute(
      "aria-orientation",
      "vertical",
    );
  });

  it("applies custom className", () => {
    render(
      <Divider className="custom" />,
    );

    expect(
      screen.getByRole("separator"),
    ).toHaveClass("custom");
  });
});
