# Box

The `Box` component is the foundational layout primitive of the Ascend UI Design System.

Every layout component in the system—including `Flex`, `Grid`, `Stack`, `Container`, `Section`, and `Spacer`—is built on top of `Box`.

It provides a consistent, theme-aware interface for layout, spacing, sizing, positioning, borders, backgrounds, and responsive design while remaining lightweight and composable.

---

## Responsibilities

The `Box` component is responsible for:

- Rendering semantic HTML elements
- Applying spacing
- Applying sizing
- Applying borders
- Applying backgrounds
- Applying positioning
- Applying overflow behavior
- Applying responsive layout properties
- Acting as the foundation for all higher-level layout components

The `Box` component is **not** responsible for:

- Flexbox layout (use `Flex`)
- Grid layout (use `Grid`)
- Vertical stacking (use `Stack`)
- Page width constraints (use `Container`)
- Page section spacing (use `Section`)
- Decorative spacing (use `Spacer`)

---

# Features

- Semantic HTML rendering
- Responsive props
- Design-token driven styling
- Theme aware
- Light & Dark mode compatible
- Type-safe
- Accessible
- Server-side rendering compatible
- ForwardRef support
- Fully composable

---

# Basic Usage

```tsx
import { Box } from "@ascend/ui";

export function Example() {
    return (
        <Box>
            Hello Ascend
        </Box>
    );
}
```

---

# Rendering Different Elements

```tsx
<Box as="section" />

<Box as="article" />

<Box as="main" />

<Box as="header" />

<Box as="footer" />

<Box as="aside" />

<Box as="nav" />
```

Use semantic HTML whenever possible.

---

# Spacing

```tsx
<Box padding="lg">

<Box margin="md">

<Box paddingX="xl">

<Box paddingY="sm">
```

Spacing values resolve through the Ascend Design Tokens.

---

# Sizing

```tsx
<Box width="100%" />

<Box height="100vh" />

<Box maxWidth="xl" />

<Box minHeight="400px" />
```

---

# Backgrounds

```tsx
<Box background="surface" />

<Box background="primary" />

<Box background="secondary" />

<Box background="transparent" />
```

Always use design-token backgrounds instead of hardcoded colors.

---

# Borders

```tsx
<Box
    border
/>

<Box
    borderRadius="lg"
/>

<Box
    borderColor="primary"
/>
```

---

# Positioning

```tsx
<Box position="relative" />

<Box position="absolute" />

<Box position="fixed" />

<Box position="sticky" />
```

---

# Overflow

```tsx
<Box overflow="hidden" />

<Box overflow="auto" />

<Box overflowX="scroll" />
```

---

# Responsive Example

```tsx
<Box
    padding={{
        base: "sm",
        md: "lg",
        xl: "2xl",
    }}
>
    Responsive Content
</Box>
```

---

# Accessibility

The `Box` component does not add ARIA roles automatically.

Choose the appropriate semantic element using the `as` prop.

Example:

```tsx
<Box as="main">

<Box as="section">

<Box as="article">
```

---

# Best Practices

✅ Build reusable layouts with `Box`.

✅ Prefer semantic HTML.

✅ Use design tokens instead of hardcoded values.

✅ Build higher-level components on top of `Box`.

---

# Anti-Patterns

Avoid using `Box` as:

- A replacement for `Flex`
- A replacement for `Grid`
- A replacement for `Stack`

Choose the component that best expresses your layout intent.

---

# Architecture

```text
Box
│
├── Flex
├── Grid
├── Stack
│
├── Container
├── Section
└── Spacer
```

Every layout component ultimately depends on `Box`.

---

# Related Components

- Flex
- Grid
- Stack
- Container
- Section
- Spacer

---

# API

The exact API is defined in:

- `Box.tsx`
- `Box.types.ts`

The component supports layout, spacing, sizing, positioning, border, background, overflow, display, and responsive properties.

---

# Testing

The component includes tests covering:

- Rendering
- Responsive props
- Semantic rendering
- Styling
- Accessibility
- Prop forwarding

---

# Version

Current Version: **1.0.0**

Status: **Production Ready**
