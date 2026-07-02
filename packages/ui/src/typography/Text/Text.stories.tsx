import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./Text";

const meta = {
  title: "Typography/Text",
  component: Text,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    as: {
      control: "select",
      options: [
        "span",
        "p",
        "div",
        "label",
        "strong",
        "em",
        "small",
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
        "2xl",
        "3xl",
        "4xl",
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

    align: {
      control: "select",
      options: [
        "left",
        "center",
        "right",
        "justify",
        "start",
        "end",
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
    children: "The quick brown fox jumps over the lazy dog.",
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

/* -------------------------------------------------------------------------- */
/* Default                                                                    */
/* -------------------------------------------------------------------------- */

export const Default: Story = {};

/* -------------------------------------------------------------------------- */
/* Sizes                                                                      */
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
      <Text size="xs">Extra Small</Text>
      <Text size="sm">Small</Text>
      <Text size="md">Medium</Text>
      <Text size="lg">Large</Text>
      <Text size="xl">Extra Large</Text>
      <Text size="2xl">2XL</Text>
      <Text size="3xl">3XL</Text>
      <Text size="4xl">4XL</Text>
    </div>
  ),
};

/* -------------------------------------------------------------------------- */
/* Weights                                                                    */
/* -------------------------------------------------------------------------- */

export const Weights: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <Text weight="thin">Thin</Text>
      <Text weight="light">Light</Text>
      <Text weight="normal">Normal</Text>
      <Text weight="medium">Medium</Text>
      <Text weight="semibold">Semibold</Text>
      <Text weight="bold">Bold</Text>
      <Text weight="black">Black</Text>
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
      <Text color="default">Default</Text>
      <Text color="muted">Muted</Text>
      <Text color="primary">Primary</Text>
      <Text color="secondary">Secondary</Text>
      <Text color="success">Success</Text>
      <Text color="warning">Warning</Text>
      <Text color="danger">Danger</Text>
      <Text color="info">Info</Text>
    </div>
  ),
};

/* -------------------------------------------------------------------------- */
/* Alignment                                                                  */
/* -------------------------------------------------------------------------- */

export const Alignment: Story = {
  args: {
    align: "center",
    children: "Centered Text",
  },
};

/* -------------------------------------------------------------------------- */
/* Truncate                                                                   */
/* -------------------------------------------------------------------------- */

export const Truncated: Story = {
  render: () => (
    <div style={{ width: 220 }}>
      <Text truncate>
        This is a very long sentence that should be truncated with an
        ellipsis when it exceeds the available width.
      </Text>
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
      <Text as="span">Rendered as span</Text>

      <Text as="p">
        Rendered as paragraph.
      </Text>

      <Text as="label">
        Rendered as label.
      </Text>

      <Text as="strong">
        Rendered as strong.
      </Text>

      <Text as="em">
        Rendered as emphasis.
      </Text>
    </div>
  ),
};
