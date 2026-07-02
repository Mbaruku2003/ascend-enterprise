import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "./Heading";

const meta = {
  title: "Typography/Heading",
  component: Heading,

  parameters: {
    layout: "padded",
  },

  tags: ["autodocs"],

  argTypes: {
    level: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
    },

    as: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "div",
        "span",
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
  },

  args: {
    children: "Ascend Enterprise",
    level: 2,
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

/* -------------------------------------------------------------------------- */
/* Default                                                                    */
/* -------------------------------------------------------------------------- */

export const Default: Story = {};

/* -------------------------------------------------------------------------- */
/* Heading Levels                                                             */
/* -------------------------------------------------------------------------- */

export const Levels: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <Heading level={5}>Heading Level 5</Heading>
      <Heading level={6}>Heading Level 6</Heading>
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
      }}
    >
      <Heading color="default">Default</Heading>
      <Heading color="primary">Primary</Heading>
      <Heading color="secondary">Secondary</Heading>
      <Heading color="success">Success</Heading>
      <Heading color="warning">Warning</Heading>
      <Heading color="danger">Danger</Heading>
      <Heading color="info">Info</Heading>
      <Heading color="muted">Muted</Heading>
    </div>
  ),
};

/* -------------------------------------------------------------------------- */
/* Font Weights                                                               */
/* -------------------------------------------------------------------------- */

export const Weights: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <Heading weight="light">Light</Heading>
      <Heading weight="normal">Normal</Heading>
      <Heading weight="medium">Medium</Heading>
      <Heading weight="semibold">Semibold</Heading>
      <Heading weight="bold">Bold</Heading>
      <Heading weight="black">Black</Heading>
    </div>
  ),
};

/* -------------------------------------------------------------------------- */
/* Custom Sizes                                                               */
/* -------------------------------------------------------------------------- */

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <Heading size="md">Medium</Heading>
      <Heading size="lg">Large</Heading>
      <Heading size="xl">Extra Large</Heading>
      <Heading size="2xl">2XL</Heading>
      <Heading size="3xl">3XL</Heading>
      <Heading size="4xl">4XL</Heading>
    </div>
  ),
};

/* -------------------------------------------------------------------------- */
/* Polymorphic Rendering                                                      */
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
      <Heading as="div">
        Rendered as a div
      </Heading>

      <Heading as="span">
        Rendered as a span
      </Heading>

      <Heading level={1}>
        Semantic H1
      </Heading>

      <Heading level={2}>
        Semantic H2
      </Heading>
    </div>
  ),
};

/* -------------------------------------------------------------------------- */
/* Override Defaults                                                          */
/* -------------------------------------------------------------------------- */

export const CustomAppearance: Story = {
  args: {
    level: 1,
    size: "2xl",
    weight: "medium",
    color: "primary",
    children: "Customized Heading",
  },
};
