import type { Meta, StoryObj } from "@storybook/react";

import { Code } from "./Code";

const meta = {
  title: "Typography/Code",
  component: Code,

  parameters: {
    layout: "padded",
  },

  tags: ["autodocs"],

  argTypes: {
    as: {
      control: "select",
      options: [
        "code",
        "span",
        "div",
      ],
    },

    block: {
      control: "boolean",
    },

    preserveWhitespace: {
      control: "boolean",
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
        "normal",
        "medium",
        "semibold",
        "bold",
      ],
    },

    color: {
      control: "select",
      options: [
        "default",
        "muted",
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
    children: "npm install @ascend/ui",
  },
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;

/* -------------------------------------------------------------------------- */
/* Default                                                                    */
/* -------------------------------------------------------------------------- */

export const Default: Story = {};

/* -------------------------------------------------------------------------- */
/* Inline Code                                                                */
/* -------------------------------------------------------------------------- */

export const Inline: Story = {
  render: () => (
    <p>
      Install the package using{" "}
      <Code>npm install @ascend/ui</Code>{" "}
      and then restart your development server.
    </p>
  ),
};

/* -------------------------------------------------------------------------- */
/* Block Code                                                                 */
/* -------------------------------------------------------------------------- */

export const Block: Story = {
  render: () => (
    <Code block>
{`npm install

npm run dev

npm run build`}
    </Code>
  ),
};

/* -------------------------------------------------------------------------- */
/* TypeScript Example                                                         */
/* -------------------------------------------------------------------------- */

export const TypeScript: Story = {
  render: () => (
    <Code block>
{`import { Button } from "@ascend/ui";

export default function App() {
  return <Button>Click Me</Button>;
}`}
    </Code>
  ),
};

/* -------------------------------------------------------------------------- */
/* Typography                                                                 */
/* -------------------------------------------------------------------------- */

export const Typography: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <Code size="xs">Extra Small</Code>
      <Code size="sm">Small</Code>
      <Code size="md">Medium</Code>
      <Code size="lg">Large</Code>

      <Code weight="normal">
        Normal Weight
      </Code>

      <Code weight="medium">
        Medium Weight
      </Code>

      <Code weight="bold">
        Bold Weight
      </Code>
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
      <Code color="default">Default</Code>
      <Code color="muted">Muted</Code>
      <Code color="primary">Primary</Code>
      <Code color="secondary">Secondary</Code>
      <Code color="success">Success</Code>
      <Code color="warning">Warning</Code>
      <Code color="danger">Danger</Code>
      <Code color="info">Info</Code>
    </div>
  ),
};

/* -------------------------------------------------------------------------- */
/* Preserve Whitespace                                                        */
/* -------------------------------------------------------------------------- */

export const PreserveWhitespace: Story = {
  render: () => (
    <Code block preserveWhitespace>
{`function greet(name) {
    console.log("Hello", name);
}`}
    </Code>
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
      <Code>
        Default code element
      </Code>

      <Code as="span">
        Rendered as span
      </Code>

      <Code as="div">
        Rendered as div
      </Code>
    </div>
  ),
};
