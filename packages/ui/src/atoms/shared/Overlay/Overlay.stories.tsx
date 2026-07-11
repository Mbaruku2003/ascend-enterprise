import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import Overlay from "./Overlay";

const meta: Meta<typeof Overlay> = {
  title: "Shared/Display/Overlay",

  component: Overlay,

  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story =
  StoryObj<typeof Overlay>;

export const Default: Story = {};

export const Transparent: Story = {
  args: {
    transparent: true,
  },
};

export const Blur: Story = {
  args: {
    blur: true,
  },
};

export const BlurTransparent: Story = {
  args: {
    blur: true,
    transparent: true,
  },
};
