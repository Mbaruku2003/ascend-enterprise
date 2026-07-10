import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import Surface from "./Surface";

const meta: Meta<typeof Surface> = {
  title: "Shared/Display/Surface",
  component: Surface,

  parameters: {
    layout: "centered",
  },

  args: {
    children: "Surface",
  },

  argTypes: {
    variant: {
      control: "select",
    },

    elevation: {
      control: "select",
    },

    radius: {
      control: "select",
    },

    padding: {
      control: "select",
    },

    interactive: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Surface>;

export const Default: Story = {};

export const Filled: Story = {
  args: {
    variant: "filled",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
    elevation: "lg",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Interactive: Story = {
  args: {
    interactive: true,
  },
};

export const LargePadding: Story = {
  args: {
    padding: "xl",
  },
};

export const Rounded: Story = {
  args: {
    radius: "full",
  },
};
