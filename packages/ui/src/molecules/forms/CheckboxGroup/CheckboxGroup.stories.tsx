import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { CheckboxGroup } from "./CheckboxGroup";

const meta: Meta<
  typeof CheckboxGroup
> = {
  title:
    "Molecules/Forms/CheckboxGroup",

  component: CheckboxGroup,

  args: {
    label: "Skills",

    options: [
      {
        value: "react",
        label: "React",
      },
      {
        value: "next",
        label: "Next.js",
      },
      {
        value: "typescript",
        label: "TypeScript",
      },
    ],
  },
};

export default meta;

type Story =
  StoryObj<typeof CheckboxGroup>;

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

export const Preselected: Story =
  {
    args: {
      value: [
        "react",
        "typescript",
      ],
    },
  };
