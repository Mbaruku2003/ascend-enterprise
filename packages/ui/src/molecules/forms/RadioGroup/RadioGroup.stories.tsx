import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { RadioGroup } from "./RadioGroup";

const meta: Meta<
  typeof RadioGroup
> = {
  title:
    "Molecules/Forms/RadioGroup",

  component: RadioGroup,

  args: {
    label: "Theme",

    options: [
      {
        value: "light",
        label: "Light",
      },
      {
        value: "dark",
        label: "Dark",
      },
      {
        value: "system",
        label: "System",
      },
    ],
  },
};

export default meta;

type Story =
  StoryObj<typeof RadioGroup>;

export const Default: Story =
  {};

export const Horizontal: Story =
  {
    args: {
      orientation:
        "horizontal",
    },
  };

export const Disabled: Story =
  {
    args: {
      disabled: true,
    },
  };

export const Selected: Story =
  {
    args: {
      value: "dark",
    },
  };
