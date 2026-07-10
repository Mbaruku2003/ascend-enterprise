import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import {
  Button,
} from "../../../atoms/actions/Button";

import {
  FormHeader,
} from "./FormHeader";

const meta: Meta<
  typeof FormHeader
> = {
  title:
    "Molecules/Forms/FormHeader",

  component:
    FormHeader,
};

export default meta;

type Story =
  StoryObj<
    typeof FormHeader
  >;

export const Default: Story = {
  render: () => (
    <FormHeader
      title="Create Account"
      description="Create your Ascend account."
    />
  ),
};

export const WithSubtitle: Story =
  {
    render: () => (
      <FormHeader
        subtitle="Step 1 of 4"
        title="Personal Information"
        description="Tell us a little about yourself."
      />
    ),
  };

export const WithActions: Story =
  {
    render: () => (
      <FormHeader
        title="Profile"
        description="Manage your personal information."
        actions={
          <Button
            variant="outline"
          >
            Edit
          </Button>
        }
      />
    ),
  };

export const Centered: Story =
  {
    render: () => (
      <FormHeader
        align="center"
        title="Welcome to Ascend"
        description="Let's begin your journey."
      />
    ),
  };
