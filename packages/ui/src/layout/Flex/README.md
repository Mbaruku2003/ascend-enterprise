# Flex

The `Flex` component is the Ascend UI primitive for building one-dimensional layouts using CSS Flexbox.

It extends the `Box` component and provides a type-safe, token-driven API for arranging elements horizontally or vertically while supporting alignment, justification, wrapping, spacing, and responsive behavior.

Use `Flex` whenever content needs to flow along a single axis.

---

# Responsibilities

The `Flex` component is responsible for:

- Horizontal layouts
- Vertical layouts
- Alignment
- Distribution of space
- Wrapping
- Responsive flex layouts
- Flex growth and shrink behavior

The `Flex` component is **not** responsible for:

- Two-dimensional layouts (use `Grid`)
- Automatically spacing vertical children (use `Stack`)
- Page width constraints (use `Container`)
- Page section spacing (use `Section`)
- Decorative spacing (use `Spacer`)

---

# Features

- Built on top of `Box`
- Responsive props
- Design-token driven
- Theme aware
- Type-safe
- Accessible
- SSR compatible
- ForwardRef support
- Fully composable

---

# Basic Usage

```tsx
import { Flex } from "@ascend/ui";

export function Example() {
    return (
        <Flex>
            <Card />
            <Card />
        </Flex>
    );
}
```

---

# Direction

```tsx
<Flex direction="row">

<Flex direction="column">

<Flex direction="row-reverse">

<Flex direction="column-reverse">
```

---

# Alignment

```tsx
<Flex align="center">

<Flex align="start">

<Flex align="end">

<Flex align="stretch">

<Flex align="baseline">
```

---

# Justification

```tsx
<Flex justify="start">

<Flex justify="center">

<Flex justify="end">

<Flex justify="between">

<Flex justify="around">

<Flex justify="evenly">
```

---

# Wrapping

```tsx
<Flex wrap="wrap">

<Flex wrap="nowrap">

<Flex wrap="wrap-reverse">
```

---

# Gap

```tsx
<Flex gap="sm">

<Flex gap="md">

<Flex gap="lg">

<Flex gap="xl">
```

Gap values resolve through the Ascend Design Tokens.

---

# Responsive Layout

```tsx
<Flex
    direction={{
        base: "column",
        md: "row",
    }}
    gap={{
        base: "sm",
        lg: "xl",
    }}
>
    ...
</Flex>
```

---

# Navigation Example

```tsx
<Flex
    align="center"
    justify="between"
>
    <Logo />

    <Navigation />

    <UserMenu />
</Flex>
```

---

# Card Layout Example

```tsx
<Flex
    direction="column"
    gap="lg"
>
    <Heading />

    <Text />

    <Button />
</Flex>
```

---

# Accessibility

`Flex` does not assign ARIA roles automatically.

Use the `as` prop to render the appropriate semantic element.

Example:

```tsx
<Flex as="nav">

<Flex as="header">

<Flex as="main">

<Flex as="section">
```

---

# Best Practices

✅ Use `Flex` for one-dimensional layouts.

✅ Use `gap` instead of manual margins.

✅ Use responsive props for adaptive layouts.

✅ Prefer semantic HTML.

---

# Anti-Patterns

Avoid using `Flex` for:

- Complex two-dimensional layouts (use `Grid`)
- Simple vertical spacing between siblings (use `Stack`)
- Decorative empty space (use `Spacer`)
- Page sections (use `Section`)

---

# Architecture

```text
Box
│
└── Flex
    │
    ├── Navbar
    ├── Toolbar
    ├── Dashboard Header
    ├── Billing Header
    ├── Pricing Card
    ├── Settings Panels
    └── AI Chat Layout
```

`Flex` is one of the core building blocks used throughout the Ascend platform.

---

# Related Components

- Box
- Grid
- Stack
- Container
- Section
- Spacer

---

# API

The complete API is defined in:

- `Flex.tsx`
- `Flex.types.ts`

Key props include:

| Prop | Description |
|------|-------------|
| `direction` | Flex direction |
| `align` | Cross-axis alignment |
| `justify` | Main-axis alignment |
| `wrap` | Wrapping behavior |
| `gap` | Space between children |
| `inline` | Render as inline-flex |

---

# Testing

The component includes automated tests covering:

- Rendering
- Direction
- Alignment
- Justification
- Wrapping
- Responsive props
- Accessibility
- Prop forwarding

---

# Version

Current Version: **1.0.0**

Status: **Production Ready**
