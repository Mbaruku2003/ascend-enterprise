import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import ScrollArea from "./ScrollArea";

const meta: Meta<
  typeof ScrollArea
> = {
  title:
    "Shared/Display/ScrollArea",

  component: ScrollArea,

  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story =
  StoryObj<typeof ScrollArea>;

export const Vertical: Story = {
  render: () => (
    <ScrollArea
      style={{
        width: 300,
        height: 200,
      }}
    >
      {Array.from({
        length: 50,
      }).map((_, i) => (
        <div key={i}>
          Row {i + 1}
        </div>
      ))}
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  args: {
    orientation:
      "horizontal",
  },

  render: (args) => (
    <ScrollArea
      {...args}
      style={{
        width: 300,
      }}
    >
      <div
        style={{
          width: 1000,
        }}
      >
        Horizontal content
      </div>
    </ScrollArea>
  ),
};

export const Both: Story = {
  args: {
    orientation: "both",
  },

  render: (args) => (
    <ScrollArea
      {...args}
      style={{
        width: 300,
        height: 200,
      }}
    >
      <div
        style={{
          width: 800,
          height: 800,
        }}
      />
    </ScrollArea>
  ),
};
