import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import {
  Input,
} from "../../../atoms/forms/Input";

import {
  Select,
} from "../../../atoms/forms/Select";

import {
  CheckboxGroup,
} from "../CheckboxGroup";

import {
  Fieldset,
} from "./Fieldset";

const meta: Meta<
  typeof Fieldset
> = {
  title:
    "Molecules/Forms/Fieldset",

  component: Fieldset,
};

export default meta;

type Story =
  StoryObj<typeof Fieldset>;

export const Default: Story = {
  render: () => (
    <Fieldset
      legend="Profile"
      description="Update your profile information."
    >
      <Input label="First Name" />

      <Input label="Last Name" />

      <Select
        label="Country"
        options={[
          {
            label: "Kenya",
            value: "ke",
          },
          {
            label: "Uganda",
            value: "ug",
          },
        ]}
      />
    </Fieldset>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Fieldset
      legend="Notifications"
      description="Choose how you receive updates."
      actions={
        <button>
          Reset
        </button>
      }
    >
      <CheckboxGroup
        options={[
          {
            value: "email",
            label: "Email",
          },
          {
            value: "sms",
            label: "SMS",
          },
        ]}
      />
    </Fieldset>
  ),
};

export const Borderless: Story = {
  render: () => (
    <Fieldset
      legend="Simple"
      borderless
    >
      <Input label="Name" />
    </Fieldset>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Fieldset
      legend="Disabled"
      disabled
    >
      <Input label="Username" />
    </Fieldset>
  ),
};
