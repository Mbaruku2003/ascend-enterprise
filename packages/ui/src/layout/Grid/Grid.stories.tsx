import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "../Box";
import { Grid } from "./Grid";

const meta = {
  title: "Layout/Grid",
  component: Grid,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    gap: {
      control: "number",
    },

    columns: {
      control: "number",
    },

    rows: {
      control: "number",
    },

    justify: {
      control: "select",
      options: [
        "start",
        "center",
        "end",
        "between",
        "around",
        "evenly",
      ],
    },

    align: {
      control: "select",
      options: [
        "start",
        "center",
        "end",
        "stretch",
        "baseline",
      ],
    },
  },

  args: {
    gap: 4,
  },
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

function Item({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      p={4}
      rounded="md"
      style={{
        border: "1px solid #d1d5db",
        textAlign: "center",
      }}
    >
      {children}
    </Box>
  );
}

/* -------------------------------------------------------------------------- */
/* Default                                                                    */
/* -------------------------------------------------------------------------- */

export const Default: Story = {
  render: (args) => (
    <Grid
      {...args}
      style={{
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        width: 500,
      }}
    >
      <Item>1</Item>
      <Item>2</Item>
      <Item>3</Item>
      <Item>4</Item>
      <Item>5</Item>
      <Item>6</Item>
    </Grid>
  ),
};

/* -------------------------------------------------------------------------- */
/* Dashboard Cards                                                            */
/* -------------------------------------------------------------------------- */

export const Dashboard: Story = {
  render: () => (
    <Grid
      gap={4}
      style={{
        gridTemplateColumns: "repeat(4, 1fr)",
        width: 800,
      }}
    >
      <Item>Revenue</Item>
      <Item>Users</Item>
      <Item>Sales</Item>
      <Item>Growth</Item>
    </Grid>
  ),
};

/* -------------------------------------------------------------------------- */
/* Image Gallery                                                              */
/* -------------------------------------------------------------------------- */

export const Gallery: Story = {
  render: () => (
    <Grid
      gap={3}
      style={{
        gridTemplateColumns: "repeat(3, 1fr)",
        width: 600,
      }}
    >
      {Array.from({ length: 9 }, (_, i) => (
        <Box
          key={i}
          style={{
            aspectRatio: "1",
            background: "#f3f4f6",
            border: "1px solid #ddd",
          }}
        />
      ))}
    </Grid>
  ),
};

/* -------------------------------------------------------------------------- */
/* Pricing Cards                                                              */
/* -------------------------------------------------------------------------- */

export const PricingTable: Story = {
  render: () => (
    <Grid
      gap={5}
      style={{
        gridTemplateColumns: "repeat(3, 1fr)",
        width: 900,
      }}
    >
      {["Starter", "Pro", "Enterprise"].map((plan) => (
        <Box
          key={plan}
          p={6}
          rounded="xl"
          shadow="md"
          style={{
            border: "1px solid #ddd",
          }}
        >
          <h3>{plan}</h3>

          <p>
            Build modern applications faster with
            Ascend Enterprise UI.
          </p>

          <button>Select Plan</button>
        </Box>
      ))}
    </Grid>
  ),
};

/* -------------------------------------------------------------------------- */
/* KPI Dashboard                                                              */
/* -------------------------------------------------------------------------- */

export const KPICards: Story = {
  render: () => (
    <Grid
      gap={4}
      style={{
        gridTemplateColumns: "repeat(2, 1fr)",
        width: 700,
      }}
    >
      <Item>Active Users</Item>
      <Item>Monthly Revenue</Item>
      <Item>Conversion Rate</Item>
      <Item>New Signups</Item>
    </Grid>
  ),
};

/* -------------------------------------------------------------------------- */
/* Mixed Layout                                                               */
/* -------------------------------------------------------------------------- */

export const MixedLayout: Story = {
  render: () => (
    <Grid
      gap={4}
      style={{
        gridTemplateColumns: "2fr 1fr",
        width: 900,
      }}
    >
      <Box
        p={6}
        rounded="lg"
        style={{
          border: "1px solid #ddd",
        }}
      >
        Main Content
      </Box>

      <Box
        p={6}
        rounded="lg"
        style={{
          border: "1px solid #ddd",
        }}
      >
        Sidebar
      </Box>
    </Grid>
  ),
};
