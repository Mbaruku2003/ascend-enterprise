import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "../Box";
import { Flex } from "./Flex";

const meta = {
  title: "Layout/Flex",
  component: Flex,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    inline: {
      control: "boolean",
    },

    direction: {
      control: "select",
      options: [
        "row",
        "row-reverse",
        "column",
        "column-reverse",
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

    wrap: {
      control: "select",
      options: [
        "nowrap",
        "wrap",
        "wrap-reverse",
      ],
    },
  },

  args: {
    gap: 4,
    children: "Flex",
  },
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

const Item = ({ children }: { children: React.ReactNode }) => (
  <Box
    p={3}
    rounded="md"
    style={{
      border: "1px solid #d1d5db",
      minWidth: 72,
      textAlign: "center",
    }}
  >
    {children}
  </Box>
);

/* -------------------------------------------------------------------------- */
/* Default                                                                    */
/* -------------------------------------------------------------------------- */

export const Default: Story = {
  render: (args) => (
    <Flex {...args}>
      <Item>One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
    </Flex>
  ),
};

/* -------------------------------------------------------------------------- */
/* Justify Content                                                            */
/* -------------------------------------------------------------------------- */

export const JustifyBetween: Story = {
  render: () => (
    <Flex
      justify="between"
      p={4}
      style={{
        width: 500,
        border: "1px solid #ddd",
      }}
    >
      <Item>Left</Item>
      <Item>Center</Item>
      <Item>Right</Item>
    </Flex>
  ),
};

/* -------------------------------------------------------------------------- */
/* Centered                                                                   */
/* -------------------------------------------------------------------------- */

export const Centered: Story = {
  render: () => (
    <Flex
      justify="center"
      align="center"
      gap={4}
      style={{
        width: 500,
        height: 180,
        border: "1px solid #ddd",
      }}
    >
      <Item>A</Item>
      <Item>B</Item>
      <Item>C</Item>
    </Flex>
  ),
};

/* -------------------------------------------------------------------------- */
/* Column                                                                     */
/* -------------------------------------------------------------------------- */

export const Column: Story = {
  render: () => (
    <Flex
      direction="column"
      gap={3}
      style={{
        width: 240,
      }}
    >
      <Item>Profile</Item>
      <Item>Settings</Item>
      <Item>Logout</Item>
    </Flex>
  ),
};

/* -------------------------------------------------------------------------- */
/* Wrapping                                                                   */
/* -------------------------------------------------------------------------- */

export const Wrapping: Story = {
  render: () => (
    <Flex
      wrap="wrap"
      gap={3}
      style={{
        width: 340,
      }}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <Item key={i}>{i + 1}</Item>
      ))}
    </Flex>
  ),
};

/* -------------------------------------------------------------------------- */
/* Inline Flex                                                                */
/* -------------------------------------------------------------------------- */

export const InlineFlex: Story = {
  render: () => (
    <div>
      Before{" "}
      <Flex
        inline
        gap={2}
        style={{
          border: "1px solid #ddd",
          padding: 8,
        }}
      >
        <Item>A</Item>
        <Item>B</Item>
      </Flex>{" "}
      After
    </div>
  ),
};

/* -------------------------------------------------------------------------- */
/* Navigation Bar                                                             */
/* -------------------------------------------------------------------------- */

export const NavigationBar: Story = {
  render: () => (
    <Flex
      justify="between"
      align="center"
      p={4}
      style={{
        width: 700,
        border: "1px solid #ddd",
      }}
    >
      <strong>Ascend</strong>

      <Flex gap={4}>
        <span>Dashboard</span>
        <span>Projects</span>
        <span>Analytics</span>
        <span>Settings</span>
      </Flex>
    </Flex>
  ),
};
