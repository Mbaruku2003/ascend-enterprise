import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "./Box";

const meta = {
  title: "Layout/Box",
  component: Box,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    as: {
      control: "select",
      options: [
        "div",
        "section",
        "article",
        "main",
        "aside",
        "header",
        "footer",
        "span",
      ],
    },

    display: {
      control: "select",
      options: [
        "block",
        "inline",
        "inline-block",
        "flex",
        "inline-flex",
        "grid",
        "inline-grid",
        "contents",
        "none",
      ],
    },

    rounded: {
      control: "select",
      options: [
        "none",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "full",
      ],
    },

    shadow: {
      control: "select",
      options: [
        "none",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
      ],
    },
  },

  args: {
    children: "Box",
    p: 4,
  },
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

/* -------------------------------------------------------------------------- */
/* Default                                                                    */
/* -------------------------------------------------------------------------- */

export const Default: Story = {};

/* -------------------------------------------------------------------------- */
/* Spacing                                                                    */
/* -------------------------------------------------------------------------- */

export const Spacing: Story = {
  render: () => (
    <Box
      p={6}
      m={4}
      rounded="lg"
      shadow="sm"
      style={{
        border: "1px solid #ddd",
      }}
    >
      Padding = 6<br />
      Margin = 4
    </Box>
  ),
};

/* -------------------------------------------------------------------------- */
/* Flex                                                                       */
/* -------------------------------------------------------------------------- */

export const FlexLayout: Story = {
  render: () => (
    <Box
      display="flex"
      justify="between"
      align="center"
      gap={4}
      p={4}
      style={{
        border: "1px solid #ddd",
        width: 500,
      }}
    >
      <Box
        p={2}
        rounded="md"
        style={{ border: "1px solid #ddd" }}
      >
        Left
      </Box>

      <Box
        p={2}
        rounded="md"
        style={{ border: "1px solid #ddd" }}
      >
        Right
      </Box>
    </Box>
  ),
};

/* -------------------------------------------------------------------------- */
/* Grid                                                                       */
/* -------------------------------------------------------------------------- */

export const GridLayout: Story = {
  render: () => (
    <Box
      display="grid"
      gap={4}
      style={{
        gridTemplateColumns: "repeat(3, 1fr)",
        width: 420,
      }}
    >
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Box
          key={item}
          p={3}
          rounded="md"
          style={{
            border: "1px solid #ddd",
            textAlign: "center",
          }}
        >
          {item}
        </Box>
      ))}
    </Box>
  ),
};

/* -------------------------------------------------------------------------- */
/* Card                                                                       */
/* -------------------------------------------------------------------------- */

export const Card: Story = {
  render: () => (
    <Box
      p={6}
      rounded="xl"
      shadow="lg"
      style={{
        border: "1px solid #e5e5e5",
        width: 360,
      }}
    >
      <h3
        style={{
          marginTop: 0,
        }}
      >
        Dashboard
      </h3>

      <p>
        Box is the foundation of every surface component in
        Ascend Enterprise UI.
      </p>
    </Box>
  ),
};

/* -------------------------------------------------------------------------- */
/* Polymorphic                                                                */
/* -------------------------------------------------------------------------- */

export const Polymorphic: Story = {
  render: () => (
    <>
      <Box as="section" p={3}>
        Section
      </Box>

      <Box as="article" p={3}>
        Article
      </Box>

      <Box as="aside" p={3}>
        Aside
      </Box>

      <Box as="footer" p={3}>
        Footer
      </Box>
    </>
  ),
};
