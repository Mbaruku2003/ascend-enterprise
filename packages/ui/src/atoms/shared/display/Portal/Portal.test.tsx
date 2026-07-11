import {
  render,
  screen,
} from "@testing-library/react";

import Portal from "./Portal";

describe("Portal", () => {
  it("renders inline when disabled", () => {
    render(
      <Portal disabled>
        Portal Content
      </Portal>,
    );

    expect(
      screen.getByText(
        "Portal Content",
      ),
    ).toBeInTheDocument();
  });

  it("renders into a custom container", () => {
    const container =
      document.createElement("div");

    document.body.appendChild(
      container,
    );

    render(
      <Portal container={container}>
        Portal Content
      </Portal>,
    );

    expect(
      container).toHaveTextContent(
      "Portal Content",
    );
  });
});
