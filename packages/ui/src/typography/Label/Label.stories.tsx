import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "./Label";

const meta = {
  title: "Typography/Label",
  component: Label,

  parameters: {
    layout: "padded",
  },

  tags: ["autodocs"],

  argTypes: {
    as: {
      control: "select",
      options: [
        "label",
        "span",
        "div",
      ],
    },

    size: {
      control: "select",
      options: [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
      ],
    },

    weight: {
      control: "select",
      options: [
        "thin",
        "extralight",
        "light",
        "normal",
        "medium",
        "semibold",
        "bold",
        "extrabold",
        "black",
      ],
    },

    color: {
      control: "select",
      options: [
        "default",
        "muted",
        "subtle",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "inherit",
      ],
    },

    disabled: {
      control: "boolean",
    },
  },

  args: {
    children: "Email Address",
    htmlFor: "email",
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

/* -------------------------------------------------------------------------- */
/* Default                                                                    */
/* -------------------------------------------------------------------------- */

export const Default: Story = {};

/* -------------------------------------------------------------------------- */
/* Form Example                                                               */
/* -------------------------------------------------------------------------- */

export const FormField: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        maxWidth: 320,
      }}
    >
      <Label htmlFor="email">
        Email Address
      </Label>

      <input
        id="email"
        type="email"
        placeholder="john@example.com"
      />
    </div>
  ),
};

/* -------------------------------------------------------------------------- */
/* Typography Variants                                                        */
/* -------------------------------------------------------------------------- */

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <Label size="xs">Extra Small</Label>
      <Label size="sm">Small</Label>
      <Label size="md">Medium</Label>
      <Label size="lg">Large</Label>
      <Label size="xl">Extra Large</Label>
    </div>
  ),
};

/* -------------------------------------------------------------------------- */
/* Colors                                                                     */
/* -------------------------------------------------------------------------- */

export const Colors: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <Label color="default">Default</Label>
      <Label color="muted">Muted</Label>
      <Label color="primary">Primary</Label>
      <Label color="secondary">Secondary</Label>
      <Label color="success">Success</Label>
      <Label color="warning">Warning</Label>
      <Label color="danger">Danger</Label>
      <Label color="info">Info</Label>
    </div>
  ),
};

/* -------------------------------------------------------------------------- */
/* Disabled                                                                   */
/* -------------------------------------------------------------------------- */

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Label",
  },
};

/* -------------------------------------------------------------------------- */
/* Polymorphic                                                                */
/* -------------------------------------------------------------------------- */

export const Polymorphic: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <Label>
        Default Label
      </Label>

      <Label as="span">
        Rendered as span
      </Label>

      <Label as="div">
        Rendered as div
      </Label>
    </div>
  ),
};

/* -------------------------------------------------------------------------- */
/* Real-world Example                                                         */
/* -------------------------------------------------------------------------- */

export const RegistrationForm: Story = {
  render: () => (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        maxWidth: 360,
      }}
    >
      <div>
        <Label htmlFor="name">
          Full Name
        </Label>

        <input
          id="name"
          placeholder="John Doe"
        />
      </div>

      <div>
        <Label htmlFor="email">
          Email Address
        </Label>

        <input
          id="email"
          type="email"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <Label htmlFor="password">
          Password
        </Label>

        <input
          id="password"
          type="password"
        />
      </div>
    </form>
  ),
};
