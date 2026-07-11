import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import Portal from "./Portal";

const meta: Meta<
  typeof Portal
> = {
  title: "Shared/Display/Portal",

  component: Portal,

  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story =
  StoryObj<typeof Portal>;

export const Default: Story = {
  render: () => (
    <Portal>
      <div
        style={{
          position: "fixed",
          top: 32,
          right: 32,
          padding: 16,
          background: "#fff",
          border: "1px solid #ccc",
        }}
      >
        Portal Content
      </div>
    </Portal>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Portal disabled>
      Portal rendered inline.
    </Portal>
  ),
};
