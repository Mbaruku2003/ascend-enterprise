import type { Meta, StoryObj } from "@storybook/react";

import { Section } from "./Section";

const meta: Meta<typeof Section> = {
  title: "Layout/Section",
  component: Section,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: [
        "none",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
      ],
    },
    background: {
      control: "select",
      options: [
        "transparent",
        "default",
        "surface",
        "subtle",
        "muted",
        "primary",
        "secondary",
      ],
    },
    bordered: {
      control: "boolean",
    },
    fullHeight: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Section>;

const DemoContent = () => (
  <div
    style={{
      padding: "2rem",
      border: "1px dashed currentColor",
      borderRadius: "8px",
    }}
  >
    <h2>Section Content</h2>

    <p>
      This content demonstrates the spacing,
      background, and layout behavior of the
      Section component.
    </p>
  </div>
);

export const Default: Story = {
  render: (args) => (
    <Section {...args}>
      <DemoContent />
    </Section>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      {(
        [
          "none",
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "2xl",
          "3xl",
        ] as const
      ).map((size) => (
        <Section
          key={size}
          size={size}
        >
          <DemoContent />
        </Section>
      ))}
    </>
  ),
};

export const Backgrounds: Story = {
  render: () => (
    <>
      {(
        [
          "default",
          "surface",
          "subtle",
          "muted",
          "primary",
          "secondary",
        ] as const
      ).map((background) => (
        <Section
          key={background}
          background={background}
        >
          <DemoContent />
        </Section>
      ))}
    </>
  ),
};

export const Bordered: Story = {
  args: {
    bordered: true,
  },
  render: (args) => (
    <Section {...args}>
      <DemoContent />
    </Section>
  ),
};

export const FullHeight: Story = {
  args: {
    fullHeight: true,
  },
  render: (args) => (
    <Section {...args}>
      <DemoContent />
    </Section>
  ),
};

export const SemanticElements: Story = {
  render: () => (
    <>
      <Section as="header">
        <DemoContent />
      </Section>

      <Section as="main">
        <DemoContent />
      </Section>

      <Section as="footer">
        <DemoContent />
      </Section>
    </>
  ),
};

export const Playground: Story = {
  args: {
    size: "xl",
    background: "surface",
    bordered: false,
    fullHeight: false,
  },
  render: (args) => (
    <Section {...args}>
      <DemoContent />
    </Section>
  ),
};
