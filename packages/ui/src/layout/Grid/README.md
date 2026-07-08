# Grid

The `Grid` component is the Ascend UI primitive for building two-dimensional layouts using CSS Grid.

It extends the `Box` component and provides a responsive, type-safe, and design-token-driven API for creating rows, columns, areas, and complex page layouts.

Use `Grid` whenever content needs to be arranged in both horizontal and vertical dimensions.

---

# Responsibilities

The `Grid` component is responsible for:

- Two-dimensional layouts
- Responsive column layouts
- Responsive row layouts
- Grid gaps
- Grid alignment
- Dashboard layouts
- Card layouts
- Analytics layouts

The `Grid` component is **not** responsible for:

- One-dimensional layouts (use `Flex`)
- Vertical stacks (use `Stack`)
- Page width constraints (use `Container`)
- Section spacing (use `Section`)
- Decorative spacing (use `Spacer`)

---

# Features

- Built on top of `Box`
- CSS Grid powered
- Responsive layouts
- Design-token driven gaps
- Theme aware
- Type-safe
- Accessible
- SSR compatible
- ForwardRef support

---

# Basic Usage

```tsx
import { Grid } from "@ascend/ui";

export function Example() {
    return (
        <Grid columns={3}>
            <Card />
            <Card />
            <Card />
        </Grid>
    );
}
```

---

# Columns

```tsx
<Grid columns={2} />

<Grid columns={3} />

<Grid columns={4} />

<Grid columns={12} />
```

---

# Rows

```tsx
<Grid rows={2} />

<Grid rows={4} />
```

---

# Gap

```tsx
<Grid gap="sm" />

<Grid gap="md" />

<Grid gap="lg" />

<Grid gap="xl" />
```

Gap values resolve through the Ascend Design Tokens.

---

# Responsive Grid

```tsx
<Grid
    columns={{
        base: 1,
        md: 2,
        lg: 4,
    }}
    gap={{
        base: "sm",
        lg: "xl",
    }}
>
    ...
</Grid>
```

---

# Dashboard Example

```tsx
<Grid
    columns={4}
    gap="lg"
>
    <AnalyticsCard />
    <GoalsCard />
    <CalendarCard />
    <InsightsCard />
</Grid>
```

---

# Pricing Example

```tsx
<Grid
    columns={{
        base: 1,
        md: 3,
    }}
    gap="xl"
>
    <StarterPlan />

    <ProfessionalPlan />

    <EnterprisePlan />
</Grid>
```

---

# Analytics Example

```tsx
<Grid
    columns={12}
    gap="lg"
>
    <RevenueChart />

    <ActivityFeed />

    <GoalsPanel />

    <Calendar />
</Grid>
```

---

# Accessibility

`Grid` does not automatically assign ARIA roles.

Choose semantic HTML using the `as` prop.

Examples:

```tsx
<Grid as="section">

<Grid as="main">

<Grid as="article">
```

---

# Best Practices

✅ Use Grid for two-dimensional layouts.

✅ Use responsive column definitions.

✅ Use design-token gaps.

✅ Keep layouts semantic.

---

# Anti-Patterns

Avoid using Grid for:

- Navigation bars (use `Flex`)
- Toolbars (use `Flex`)
- Vertical forms (use `Stack`)
- Simple alignment (use `Flex`)
- Decorative spacing (use `Spacer`)

---

# Architecture

```text
Box
│
└── Grid
    │
    ├── Dashboard
    ├── Analytics
    ├── Pricing
    ├── Calendar
    ├── Gallery
    ├── Settings
    └── Reports
```

Grid is the primary layout component for feature-rich application screens.

---

# Related Components

- Box
- Flex
- Stack
- Container
- Section
- Spacer

---

# API

The complete API is defined in:

- `Grid.tsx`
- `Grid.types.ts`

Key props include:

| Prop | Description |
|------|-------------|
| `columns` | Number or responsive number of columns |
| `rows` | Number or responsive number of rows |
| `gap` | Space between grid items |
| `columnGap` | Horizontal spacing |
| `rowGap` | Vertical spacing |
| `alignItems` | Cross-axis alignment |
| `justifyItems` | Main-axis alignment |

---

# Testing

The component includes automated tests covering:

- Rendering
- Column configuration
- Row configuration
- Responsive behavior
- Gap handling
- Accessibility
- Prop forwarding

---

# Version

Current Version: **1.0.0**

Status: **Production Ready**
