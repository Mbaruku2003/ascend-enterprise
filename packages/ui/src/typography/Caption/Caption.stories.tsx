import type { Meta, StoryObj } from "@storybook/react";

import { Caption } from "./Caption";

const meta = {
  title: "Typography/Caption",
  component: Caption,

  parameters: {
    layout: "padded",
  },

  tags: ["autodocs"],

  argTypes: {
    as: {
      control: "select",
      options: [
        "figcaption",
        "p",
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

    truncate: {
      control: "boolean",
    },

    noWrap: {
      control: "boolean",
    },
  },

  args: {
    children: "Uploaded 5 minutes ago",
  },
} satisfies Meta<typeof Caption>;

export default meta;

type Story = StoryObj<typeof meta>;

/* -------------------------------------------------------------------------- */
/* Default                                                                    */
/* -------------------------------------------------------------------------- */

export const Default: Story = {};

/* -------------------------------------------------------------------------- */
/* Figure Caption                                                             */
/* -------------------------------------------------------------------------- */

export const FigureCaption: Story = {
  render: () => (
    <figure
      style={{
        margin: 0,
        maxWidth: 420,
      }}
    >
      <div
        style={{
          width: "100%",
          height: 180,
          borderRadius: 8,
          background: "#e5e7eb",
        }}
      />

      <Caption>
        Figure 1. Dashboard analytics overview.
      </Caption>
    </figure>
  ),
};

/* -------------------------------------------------------------------------- */
/* Metadata                                                                    */
/* -------------------------------------------------------------------------- */

export const Metadata: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <Caption>Uploaded 5 minutes ago</Caption>
      <Caption>Updated yesterday</Caption>
      <Caption>Version 2.3.1</Caption>
      <Caption>Created by Ascend AI</Caption>
    </div>
  ),
};

/* -------------------------------------------------------------------------- */
/* Helper Text                                                                */
/* -------------------------------------------------------------------------- */

export const HelperText: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        maxWidth: 360,
      }}
    >
      <label htmlFor="email">
        Email Address
      </label>

      <input
        id="email"
        type="email"
        placeholder="john@example.com"
      />

      <Caption>
        We'll never share your email with anyone else.
      </Caption>
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
        gap: 8,
      }}
    >
      <Caption color="default">Default</Caption>
      <Caption color="muted">Muted</Caption>
      <Caption color="primary">Primary</Caption>
      <Caption color="secondary">Secondary</Caption>
      <Caption color="success">Success</Caption>
      <Caption color="warning">Warning</Caption>
      <Caption color="danger">Danger</Caption>
      <Caption color="info">Info</Caption>
    </div>
  ),
};

/* -------------------------------------------------------------------------- */
/* Typography                                                                  */
/* -------------------------------------------------------------------------- */

export const Typography: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <Caption size="xs">Extra Small</Caption>
      <Caption size="sm">Small</Caption>
      <Caption size="md">Medium</Caption>
      <Caption size="lg">Large</Caption>

      <Caption weight="light">
        Light Weight
      </Caption>

      <Caption weight="medium">
        Medium Weight
      </Caption>

      <Caption weight="bold">
        Bold Weight
      </Caption>
    </div>
  ),
};

/* -------------------------------------------------------------------------- */
/* Truncated                                                                  */
/* -------------------------------------------------------------------------- */

export const Truncated: Story = {
  render: () => (
    <div
      style={{
        width: 240,
      }}
    >
      <Caption truncate>
        This caption demonstrates truncation when the text exceeds the available width of its container.
      </Caption>
    </div>
  ),
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
      <Caption>
        Default figcaption
      </Caption>

      <Caption as="span">
        Rendered as span
      </Caption>

      <Caption as="div">
        Rendered as div
      </Caption>

      <Caption as="p">
        Rendered as paragraph
      </Caption>
    </div>
  ),
};
