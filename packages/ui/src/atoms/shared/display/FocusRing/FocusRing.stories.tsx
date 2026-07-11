import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import FocusRing from "./FocusRing";

const meta: Meta<typeof FocusRing> = {
  title: "Shared/Display/FocusRing",
  component: FocusRing,

  args: {
    children: "Focusable",
    tabIndex: 0,
  },

  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story =
  StoryObj<typeof FocusRing>;

export const Default: Story = {};

export const Inset: Story = {
  args: {
    variant: "inset",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
