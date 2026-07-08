import type { Meta, StoryObj } from "@storybook/react";

import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
    },
    fluid: {
      control: "boolean",
    },
    centered: {
      control: "boolean",
    },
    padding: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: (args) => (
    <Container {...args}>
      <div
        style={{
          padding: "2rem",
          border: "1px dashed currentColor",
        }}
      >
        Default Container
      </div>
    </Container>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "1rem",
      }}
    >
      {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map(
        (size) => (
          <Container key={size} size={size}>
            <div
              style={{
                padding: "1rem",
                border: "1px dashed currentColor",
              }}
            >
              Container size: {size}
            </div>
          </Container>
        )
      )}
    </div>
  ),
};

export const Fluid: Story = {
  args: {
    fluid: true,
  },
  render: (args) => (
    <Container {...args}>
      <div
        style={{
          padding: "2rem",
          border: "1px dashed currentColor",
        }}
      >
        Fluid Container
      </div>
    </Container>
  ),
};

export const CustomWidth: Story = {
  args: {
    maxWidth: "1600px",
  },
  render: (args) => (
    <Container {...args}>
      <div
        style={{
          padding: "2rem",
          border: "1px dashed currentColor",
        }}
      >
        Custom Max Width
      </div>
    </Container>
  ),
};

export const SemanticElements: Story = {
  render: () => (
    <>
      <Container as="header">
        <div
          style={{
            padding: "1rem",
            border: "1px dashed currentColor",
          }}
        >
          Header Container
        </div>
      </Container>

      <Container as="main">
        <div
          style={{
            padding: "1rem",
            border: "1px dashed currentColor",
          }}
        >
          Main Container
        </div>
      </Container>

      <Container as="footer">
        <div
          style={{
            padding: "1rem",
            border: "1px dashed currentColor",
          }}
        >
          Footer Container
        </div>
      </Container>
    </>
  ),
};

export const Playground: Story = {
  args: {
    size: "xl",
    fluid: false,
    centered: true,
    padding: "md",
  },
  render: (args) => (
    <Container {...args}>
      <div
        style={{
          padding: "2rem",
          border: "1px dashed currentColor",
        }}
      >
        Interactive Playground
      </div>
    </Container>
  ),
};
