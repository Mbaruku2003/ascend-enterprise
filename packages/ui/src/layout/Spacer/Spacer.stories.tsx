import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from "../Flex";
import { Box } from "../Box";
import { Spacer } from "./Spacer";

const meta: Meta<typeof Spacer> = {
  title: "Layout/Spacer",
  component: Spacer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: [
        "none",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
      ],
    },
    axis: {
      control: "inline-radio",
      options: ["vertical", "horizontal"],
    },
    grow: {
      control: "boolean",
    },
    shrink: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Spacer>;

const DemoBox = ({ children }: { children: React.ReactNode }) => (
  <Box
    padding="md"
    background="surface"
    borderRadius="md"
    style={{
      border: "1px solid var(--color-border)",
      minWidth: 80,
      textAlign: "center",
    }}
  >
    {children}
  </Box>
);

export const Vertical: Story = {
  args: {
    size: "lg",
    axis: "vertical",
  },
  render: (args) => (
    <Box>
      <DemoBox>Top</DemoBox>

      <Spacer {...args} />

      <DemoBox>Bottom</DemoBox>
    </Box>
  ),
};

export const Horizontal: Story = {
  args: {
    size: "lg",
    axis: "horizontal",
  },
  render: (args) => (
    <Flex align="center">
      <DemoBox>Left</DemoBox>

      <Spacer {...args} />

      <DemoBox>Right</DemoBox>
    </Flex>
  ),
};

export const FlexGrow: Story = {
  args: {
    grow: true,
  },
  render: (args) => (
    <Flex
      align="center"
      style={{
        width: 500,
        border: "1px dashed var(--color-border)",
        padding: 16,
      }}
    >
      <DemoBox>Logo</DemoBox>

      <Spacer {...args} />

      <DemoBox>Profile</DemoBox>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Box>
      {(
        [
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "2xl",
          "3xl",
        ] as const
      ).map((size) => (
        <Flex
          key={size}
          align="center"
          style={{ marginBottom: 16 }}
        >
          <DemoBox>{size}</DemoBox>

          <Spacer
            axis="horizontal"
            size={size}
          />

          <DemoBox>{size}</DemoBox>
        </Flex>
      ))}
    </Box>
  ),
};

export const Playground: Story = {
  args: {
    size: "md",
    axis: "horizontal",
    grow: false,
    shrink: true,
  },
  render: (args) => (
    <Flex align="center">
      <DemoBox>A</DemoBox>

      <Spacer {...args} />

      <DemoBox>B</DemoBox>
    </Flex>
  ),
};
