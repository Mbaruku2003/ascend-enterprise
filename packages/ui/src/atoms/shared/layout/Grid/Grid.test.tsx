import {
  render,
  screen,
} from "@testing-library/react";

import Grid from "./Grid";

describe("Grid", () => {
  it("renders children", () => {
    render(
      <Grid>
        <div>
          Hello Grid
        </div>
      </Grid>,
    );

    expect(
      screen.getByText(
        "Hello Grid",
      ),
    ).toBeInTheDocument();
  });

  it("renders Grid.Item", () => {
    render(
      <Grid>
        <Grid.Item>
          Item
        </Grid.Item>
      </Grid>,
    );

    expect(
      screen.getByText(
        "Item",
      ),
    ).toBeInTheDocument();
  });
});
