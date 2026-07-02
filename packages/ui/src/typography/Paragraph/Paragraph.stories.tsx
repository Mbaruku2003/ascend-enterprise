import type { Meta, StoryObj } from "@storybook/react";

import { Paragraph } from "./Paragraph";

const meta = {
  title: "Typography/Paragraph",
  component: Paragraph,

  parameters: {
    layout: "padded",
  },

  tags: ["autodocs"],

  argTypes: {
    as: {
      control: "select",
      options: ["p", "div", "blockquote", "span"],
    },

    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
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
      options: ["left", "center", "right", "justify", "start", "end"],
    },

    truncate: {
      control: "boolean",
    },

    noWrap: {
      control: "boolean",
    },
  },

  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

/* -------------------------------------------------------------------------- */
/* Default                                                                    */
/* -------------------------------------------------------------------------- */

export const Default: Story = {};

/* -------------------------------------------------------------------------- */
/* Variants                                                                   */
/* -------------------------------------------------------------------------- */

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        maxWidth: 500,
      }}
    >
      <Paragraph size="sm">
        Small paragraph text for compact UI.
      </Paragraph>

      <Paragraph size="md">
        Medium paragraph text for standard content.
      </Paragraph>

      <Paragraph size="lg">
        Large paragraph text for emphasis or readability.
      </Paragraph>
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
        gap: 16,
        maxWidth: 500,
      }}
    >
      <Paragraph color="default">Default paragraph text</Paragraph>
      <Paragraph color="muted">Muted paragraph text</Paragraph>
      <Paragraph color="primary">Primary paragraph text</Paragraph>
      <Paragraph color="secondary">Secondary paragraph text</Paragraph>
      <Paragraph color="success">Success paragraph text</Paragraph>
      <Paragraph color="warning">Warning paragraph text</Paragraph>
      <Paragraph color="danger">Danger paragraph text</Paragraph>
      <Paragraph color="info">Info paragraph text</Paragraph>
    </div>
  ),
};

/* -------------------------------------------------------------------------- */
/* Alignment                                                                  */
/* -------------------------------------------------------------------------- */

export const Alignment: Story = {
  render: () => (
    <div
      style={{
        maxWidth: 500,
      }}
    >
      <Paragraph align="left">Left aligned text</Paragraph>
      <Paragraph align="center">Center aligned text</Paragraph>
      <Paragraph align="right">Right aligned text</Paragraph>
      <Paragraph align="justify">
        Justified paragraph text that spreads across the full width of the container for a clean block layout appearance.
      </Paragraph>
    </div>
  ),
};

/* -------------------------------------------------------------------------- */
/* Truncate                                                                   */
/* -------------------------------------------------------------------------- */

export const Truncated: Story = {
  render: () => (
    <div style={{ width: 250 }}>
      <Paragraph truncate>
        This is a very long paragraph that should be truncated with an ellipsis when it exceeds the container width.
      </Paragraph>
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
        gap: 16,
      }}
    >
      <Paragraph as="p">
        Rendered as &lt;p&gt;
      </Paragraph>

      <Paragraph as="div">
        Rendered as &lt;div&gt;
      </Paragraph>

      <Paragraph as="blockquote">
        Rendered as &lt;blockquote&gt;
      </Paragraph>

      <Paragraph as="span">
        Rendered as &lt;span&gt;
      </Paragraph>
    </div>
  ),
};
