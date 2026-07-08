import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "../Box";
import { Stack } from "./Stack";

const meta = {
  title: "Layout/Stack",
  component: Stack,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    direction: {
      control: "select",
      options: [
        "column",
        "row",
        "column-reverse",
        "row-reverse",
      ],
    },

    gap: {
      control: "number",
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

    inline: {
      control: "boolean",
    },
  },

  args: {
    gap: 4,
  },
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof meta>;

function Item({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      p={3}
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
    <Stack {...args}>
      <Item>One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
    </Stack>
  ),
};

/* -------------------------------------------------------------------------- */
/* Vertical Form                                                              */
/* -------------------------------------------------------------------------- */

export const VerticalForm: Story = {
  render: () => (
    <Stack
      gap={4}
      style={{ width: 320 }}
    >
      <input placeholder="Full Name" />
      <input placeholder="Email" />
      <input placeholder="Password" />
      <button>Create Account</button>
    </Stack>
  ),
};

/* -------------------------------------------------------------------------- */
/* Settings Panel                                                             */
/* -------------------------------------------------------------------------- */

export const SettingsPanel: Story = {
  render: () => (
    <Stack
      gap={3}
      p={5}
      rounded="lg"
      shadow="md"
      style={{
        width: 320,
        border: "1px solid #e5e7eb",
      }}
    >
      <h3 style={{ margin: 0 }}>Settings</h3>

      <Item>Profile</Item>
      <Item>Notifications</Item>
      <Item>Security</Item>
      <Item>Billing</Item>
    </Stack>
  ),
};

/* -------------------------------------------------------------------------- */
/* Sidebar                                                                    */
/* -------------------------------------------------------------------------- */

export const Sidebar: Story = {
  render: () => (
    <Stack
      gap={2}
      p={4}
      style={{
        width: 220,
        border: "1px solid #ddd",
      }}
    >
      <Item>Dashboard</Item>
      <Item>Projects</Item>
      <Item>Analytics</Item>
      <Item>Reports</Item>
      <Item>Settings</Item>
    </Stack>
  ),
};

/* -------------------------------------------------------------------------- */
/* Horizontal Stack                                                           */
/* -------------------------------------------------------------------------- */

export const Horizontal: Story = {
  render: () => (
    <Stack
      direction="row"
      gap={4}
    >
      <Item>Save</Item>
      <Item>Cancel</Item>
      <Item>Delete</Item>
    </Stack>
  ),
};

/* -------------------------------------------------------------------------- */
/* Centered Stack                                                             */
/* -------------------------------------------------------------------------- */

export const Centered: Story = {
  render: () => (
    <Stack
      align="center"
      justify="center"
      gap={4}
      style={{
        width: 400,
        height: 260,
        border: "1px solid #ddd",
      }}
    >
      <Item>Logo</Item>
      <Item>Welcome</Item>
      <Item>Continue</Item>
    </Stack>
  ),
};

/* -------------------------------------------------------------------------- */
/* Card Layout                                                                */
/* -------------------------------------------------------------------------- */

export const Card: Story = {
  render: () => (
    <Stack
      gap={4}
      p={6}
      rounded="xl"
      shadow="lg"
      style={{
        width: 360,
        border: "1px solid #ddd",
      }}
    >
      <h2 style={{ margin: 0 }}>
        Ascend Enterprise
      </h2>

      <p style={{ margin: 0 }}>
        AI-powered growth platform for modern teams.
      </p>

      <button>Get Started</button>
    </Stack>
  ),
};

/* -------------------------------------------------------------------------- */
/* Inline Stack                                                               */
/* -------------------------------------------------------------------------- */

export const Inline: Story = {
  render: () => (
    <div>
      Before{" "}
      <Stack
        inline
        direction="row"
        gap={2}
      >
        <Item>A</Item>
        <Item>B</Item>
      </Stack>{" "}
      After
    </div>
  ),
};
