import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import Divider from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Shared/Display/Divider",
  component: Divider,

  parameters: {
    layout: "padded",
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    style: {
      height: "120px",
    },
  },
};

export const Dashed: Story = {
  args: {
    variant: "dashed",
  },
};

export const Dotted: Story = {
  args: {
    variant: "dotted",
  },
};

export const Decorative: Story = {
  args: {
    decorative: true,
  },
};
