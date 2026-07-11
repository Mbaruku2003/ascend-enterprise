import { render } from "@testing-library/react";

import ScrollArea from "./ScrollArea";

describe("ScrollArea", () => {
  it("renders children", () => {
    const { getByText } = render(
      <ScrollArea>
        Content
      </ScrollArea>,
    );

    expect(
      getByText("Content"),
    ).toBeInTheDocument();
  });

  it("supports custom className", () => {
    const { container } = render(
      <ScrollArea className="custom" />
    );

    expect(
      container.firstChild,
    ).toHaveClass("custom");
  });

  it("renders horizontal scrolling", () => {
    const { container } = render(
      <ScrollArea
        orientation="horizontal"
      />
    );

    expect(
      container.firstChild,
    ).toHaveClass(
      "overflow-x-auto",
    );
  });
});
