import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import {
  Button,
} from "../../../atoms/actions/Button";

import {
  FormActions,
} from "./FormActions";

const meta: Meta<
  typeof FormActions
> = {
  title:
    "Molecules/Forms/FormActions",

  component: FormActions,
};

export default meta;

type Story =
  StoryObj<typeof FormActions>;

export const Default: Story = {
  render: () => (
    <FormActions>
      <Button
        variant="outline"
      >
        Cancel
      </Button>

      <Button>
        Save
      </Button>
    </FormActions>
  ),
};

export const Center: Story = {
  render: () => (
    <FormActions align="center">
      <Button
        variant="outline"
      >
        Previous
      </Button>

      <Button>
        Next
      </Button>
    </FormActions>
  ),
};

export const Between: Story = {
  render: () => (
    <FormActions align="between">
      <Button
        variant="outline"
      >
        Delete
      </Button>

      <Button>
        Save
      </Button>
    </FormActions>
  ),
};

export const Vertical: Story = {
  render: () => (
    <FormActions
      direction="vertical"
      responsive={false}
    >
      <Button>
        Save
      </Button>

      <Button
        variant="outline"
      >
        Cancel
      </Button>
    </FormActions>
  ),
};
