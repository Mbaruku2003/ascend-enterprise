import { render } from "@testing-library/react";

import FocusRing from "./FocusRing";

describe("FocusRing", () => {
  it("renders correctly", () => {
    const { container } = render(
      <FocusRing />
    );

    expect(
      container.firstChild,
    ).toBeInTheDocument();
  });

  it("accepts custom className", () => {
    const { container } = render(
      <FocusRing className="custom" />
    );

    expect(
      container.firstChild,
    ).toHaveClass("custom");
  });

  it("supports disabled", () => {
    const { container } = render(
      <FocusRing disabled />
    );

    expect(
      container.firstChild,
    ).toBeInTheDocument();
  });
});
