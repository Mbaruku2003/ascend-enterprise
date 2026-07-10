import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import {
  SwitchGroup,
} from "./SwitchGroup";

const meta: Meta<
  typeof SwitchGroup
> = {
  title:
    "Molecules/Forms/SwitchGroup",

  component: SwitchGroup,

  args: {
    label:
      "Notifications",

    options: [
      {
        value: "email",
        label: "Email",
      },
      {
        value: "sms",
        label: "SMS",
      },
      {
        value: "push",
        label: "Push",
      },
    ],
  },
};

export default meta;

type Story =
  StoryObj<
    typeof SwitchGroup
  >;

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
