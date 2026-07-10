import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { Input } from "../../../atoms/forms/Input";

import { FormField } from "./FormField";

const meta: Meta<
  typeof FormField
> = {
  title: "Molecules/FormField",
  component: FormField,
};

export default meta;

type Story = StoryObj<
  typeof FormField
>;

export const Default: Story = {
  render: () => (
    <FormField
      label="Email"
      helperText="We'll never share your email."
    >
      <Input
        placeholder="you@example.com"
      />
    </FormField>
  ),
};

export const WithAction: Story = {
  render: () => (
    <FormField
      label="Password"
      action={
        <button>
          Forgot password?
        </button>
      }
    >
      <Input
        type="password"
      />
    </FormField>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <FormField
      label="Username"
      description="This name will be visible to other users."
    >
      <Input />
    </FormField>
  ),
};
