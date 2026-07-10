import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import Grid from "./Grid";

/* -------------------------------------------------------------------------- */

const meta: Meta<typeof Grid> = {
  title: "Layout/Grid",

  component: Grid,

  tags: ["autodocs"],
};

export default meta;

type Story =
  StoryObj<typeof Grid>;

/* -------------------------------------------------------------------------- */

export const TwelveColumns: Story = {
  render: () => (
    <Grid
      columns={12}
      gap="md"
    >
      <Grid.Item span={8}>
        <div className="rounded bg-slate-200 p-6">
          Main Content
        </div>
      </Grid.Item>

      <Grid.Item span={4}>
        <div className="rounded bg-slate-100 p-6">
          Sidebar
        </div>
      </Grid.Item>
    </Grid>
  ),
};

export const Dashboard: Story = {
  render: () => (
    <Grid
      columns={4}
      gap="lg"
    >
      {Array.from({
        length: 8,
      }).map((_, index) => (
        <Grid.Item key={index}>
          <div className="rounded bg-slate-100 p-6">
            Card {index + 1}
          </div>
        </Grid.Item>
      ))}
    </Grid>
  ),
};

export const AutoFit: Story = {
  render: () => (
    <Grid
      minItemWidth="250px"
      gap="lg"
    >
      {Array.from({
        length: 10,
      }).map((_, index) => (
        <div
          key={index}
          className="rounded bg-slate-200 p-6"
        >
          Card {index + 1}
        </div>
      ))}
    </Grid>
  ),
};
