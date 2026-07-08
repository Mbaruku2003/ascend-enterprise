# Stack

The `Stack` component is an opinionated layout primitive for arranging elements in a single direction with consistent spacing.

Built on top of the `Flex` component, `Stack` simplifies the most common layout pattern in modern user interfaces: placing components one after another with uniform gaps.

Use `Stack` whenever you need predictable spacing between related UI elements.

---

# Responsibilities

The `Stack` component is responsible for:

- Vertical layouts
- Horizontal layouts
- Consistent spacing
- Responsive spacing
- Responsive direction
- Simple content grouping

The `Stack` component is **not** responsible for:

- Complex alignment (use `Flex`)
- Two-dimensional layouts (use `Grid`)
- Page width constraints (use `Container`)
- Section spacing (use `Section`)
- Decorative spacing (use `Spacer`)

---

# Features

- Built on top of `Flex`
- Consistent spacing
- Responsive direction
- Responsive spacing
- Design-token driven
- Theme aware
- Type-safe
- Accessible
- SSR compatible
- ForwardRef support

---

# Basic Usage

```tsx
import { Stack } from "@ascend/ui";

export function Example() {
    return (
        <Stack>
            <Heading />
            <Text />
            <Button />
        </Stack>
    );
}
```

---

# Vertical Stack

Vertical is the default direction.

```tsx
<Stack>

<Stack gap="lg">

<Stack gap="xl">
```

---

# Horizontal Stack

```tsx
<Stack
    direction="row"
>

<Avatar />

<Text />

<Badge />

</Stack>
```

---

# Responsive Direction

```tsx
<Stack
    direction={{
        base: "column",
        lg: "row",
    }}
>
    ...
</Stack>
```

---

# Responsive Gap

```tsx
<Stack
    gap={{
        base: "sm",
        md: "lg",
        xl: "2xl",
    }}
>
    ...
</Stack>
```

Spacing values resolve through the Ascend Design System tokens.

---

# Login Form Example

```tsx
<Stack gap="lg">

    <EmailInput />

    <PasswordInput />

    <Button>
        Sign In
    </Button>

</Stack>
```

---

# Dashboard Card Example

```tsx
<Stack gap="md">

    <Heading />

    <Chart />

    <Statistics />

</Stack>
```

---

# Settings Example

```tsx
<Stack gap="xl">

    <ProfileSettings />

    <NotificationSettings />

    <SecuritySettings />

</Stack>
```

---

# Accessibility

`Stack` does not automatically assign ARIA roles.

Use the `as` prop to render semantic HTML.

Examples:

```tsx
<Stack as="section">

<Stack as="article">

<Stack as="main">
```

---

# Best Practices

✅ Use `Stack` for vertical layouts.

✅ Use `gap` instead of manual margins.

✅ Use responsive spacing.

✅ Keep layouts semantic.

---

# Anti-Patterns

Avoid using `Stack` for:

- Complex alignment (use `Flex`)
- Multi-column layouts (use `Grid`)
- Page width management (use `Container`)
- Decorative empty space (use `Spacer`)

---

# Architecture

```text
Box
 │
 ▼
Flex
 │
 ▼
Stack
 │
 ├── Forms
 ├── Cards
 ├── Dialogs
 ├── Settings
 ├── Authentication
 ├── Billing
 └── Recovery
```

`Stack` is a convenience abstraction built on top of `Flex` for one of the most common layout patterns in the Ascend platform.

---

# Related Components

- Box
- Flex
- Grid
- Container
- Section
- Spacer

---

# API

The complete API is defined in:

- `Stack.tsx`
- `Stack.types.ts`

Common props include:

| Prop | Description |
|------|-------------|
| `direction` | Stack direction (`column` by default) |
| `gap` | Space between children |
| `align` | Cross-axis alignment |
| `justify` | Main-axis alignment |
| `wrap` | Wrapping behavior |

---

# Testing

The component includes automated tests covering:

- Rendering
- Direction
- Gap
- Alignment
- Responsive props
- Accessibility
- Prop forwarding

---

# Version

Current Version: **1.0.0**

Status: **Production Ready**
