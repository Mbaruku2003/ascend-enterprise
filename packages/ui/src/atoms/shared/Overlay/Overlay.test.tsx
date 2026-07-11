import { render } from "@testing-library/react";

import Overlay from "./Overlay";

describe("Overlay", () => {
  it("renders", () => {
    const { container } = render(
      <Overlay />
    );

    expect(
      container.firstChild,
    ).toBeInTheDocument();
  });

  it("supports blur", () => {
    const { container } = render(
      <Overlay blur />
    );

    expect(
      container.firstChild,
    ).toHaveClass(
      "backdrop-blur-sm",
    );
  });

  it("supports transparency", () => {
    const { container } = render(
      <Overlay transparent />
    );

    expect(
      container.firstChild,
    ).toHaveClass(
      "bg-transparent",
    );
  });
});
