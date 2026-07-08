import type { Meta, StoryObj } from "@storybook/react";

import { VisuallyHidden } from "./VisuallyHidden";

const meta = {
  title: "Accessibility/VisuallyHidden",
  component: VisuallyHidden,

  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "VisuallyHidden hides content visually while keeping it available to assistive technologies such as screen readers.",
      },
    },
  },

  tags: ["autodocs"],

  argTypes: {
    as: {
      control: "select",
      options: [
        "span",
        "label",
        "h1",
        "h2",
        "div",
      ],
    },
  },

  args: {
    children: "Screen reader only text",
  },
} satisfies Meta<typeof VisuallyHidden>;

export default meta;

type Story = StoryObj<typeof meta>;

/* -------------------------------------------------------------------------- */
/* Default                                                                    */
/* -------------------------------------------------------------------------- */

export const Default: Story = {};

/* -------------------------------------------------------------------------- */
/* Icon Button                                                                */
/* -------------------------------------------------------------------------- */

export const IconButton: Story = {
  render: () => (
    <button
      type="button"
      style={{
        padding: 12,
        fontSize: 20,
      }}
    >
      🔍

      <VisuallyHidden>
        Search
      </VisuallyHidden>
    </button>
  ),
};

/* -------------------------------------------------------------------------- */
/* Hidden Form Label                                                          */
/* -------------------------------------------------------------------------- */

export const HiddenLabel: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: 280,
      }}
    >
      <VisuallyHidden
        as="label"
        htmlFor="email"
      >
        Email Address
      </VisuallyHidden>

      <input
        id="email"
        type="email"
        placeholder="john@example.com"
      />
    </div>
  ),
};

/* -------------------------------------------------------------------------- */
/* Hidden Heading                                                             */
/* -------------------------------------------------------------------------- */

export const HiddenHeading: Story = {
  render: () => (
    <section
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 16,
        width: 320,
      }}
    >
      <VisuallyHidden as="h2">
        Notifications
      </VisuallyHidden>

      <p>
        You have 3 unread notifications.
      </p>
    </section>
  ),
};

/* -------------------------------------------------------------------------- */
/* Live Region                                                                */
/* -------------------------------------------------------------------------- */

export const LiveRegion: Story = {
  render: () => (
    <VisuallyHidden
      aria-live="polite"
    >
      Upload complete.
    </VisuallyHidden>
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
      <VisuallyHidden>
        Default span
      </VisuallyHidden>

      <VisuallyHidden as="label">
        Hidden label
      </VisuallyHidden>

      <VisuallyHidden as="h2">
        Hidden heading
      </VisuallyHidden>

      <VisuallyHidden as="div">
        Hidden div
      </VisuallyHidden>
    </div>
  ),
};
