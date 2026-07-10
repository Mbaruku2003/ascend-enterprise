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
  FormGrid,
} from "./FormGrid";

const meta: Meta<
  typeof FormGrid
> = {
  title:
    "Molecules/Forms/FormGrid",

  component: FormGrid,
};

export default meta;

type Story =
  StoryObj<typeof FormGrid>;

export const TwoColumns: Story = {
  render: () => (
    <FormGrid>
      <Input label="First Name" />

      <Input label="Last Name" />

      <Input label="Email" />

      <Select
        label="Country"
        options={[
          {
            label: "Kenya",
            value: "ke",
          },
          {
            label: "Tanzania",
            value: "tz",
          },
        ]}
      />
    </FormGrid>
  ),
};

export const ThreeColumns: Story = {
  render: () => (
    <FormGrid columns={3}>
      <Input label="Field 1" />

      <Input label="Field 2" />

      <Input label="Field 3" />

      <Input label="Field 4" />

      <Input label="Field 5" />

      <Input label="Field 6" />
    </FormGrid>
  ),
};

export const FourColumns: Story = {
  render: () => (
    <FormGrid columns={4}>
      {Array.from({
        length: 8,
      }).map((_, index) => (
        <Input
          key={index}
          label={`Field ${
            index + 1
          }`}
        />
      ))}
    </FormGrid>
  ),
};
