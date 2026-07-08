# Section

The `Section` component is a foundational layout primitive used to create
consistent vertical spacing between major areas of an application.

Unlike `Container`, which controls horizontal layout and maximum width,
`Section` is responsible for vertical rhythm, semantic grouping, optional
backgrounds, and visual separation.

---

## Responsibilities

The `Section` component is responsible for:

- Vertical spacing
- Semantic page grouping
- Optional background variants
- Optional dividers
- Full-height sections

The `Section` component is **not** responsible for:

- Horizontal layout
- Maximum width
- Grid layout
- Flex layout
- Content alignment

Those responsibilities belong to `Container`, `Grid`, `Flex`, and `Stack`.

---

## Features

- Semantic HTML support
- Responsive spacing
- Theme-aware backgrounds
- Optional section dividers
- Optional viewport-height sections
- Design-token driven
- Built on top of `Box`
- SSR compatible

---

## Basic Usage

```tsx
import { Section } from "@ascend/ui";

export function Example() {
  return (
    <Section>
      Content
    </Section>
  );
}
```

---

## Typical Page Structure

```tsx
<Container>

  <Section>
    Hero
  </Section>

  <Section background="surface">
    Features
  </Section>

  <Section bordered>
    Pricing
  </Section>

  <Section>
    FAQ
  </Section>

</Container>
```

Notice that:

- `Container` controls width.
- `Section` controls vertical spacing.

---

## Section Sizes

```tsx
<Section size="none" />
<Section size="xs" />
<Section size="sm" />
<Section size="md" />
<Section size="lg" />
<Section size="xl" />
<Section size="2xl" />
<Section size="3xl" />
```

These values resolve through the Ascend design token system.

---

## Background Variants

```tsx
<Section background="default" />

<Section background="surface" />

<Section background="subtle" />

<Section background="muted" />

<Section background="primary" />

<Section background="secondary" />
```

Background colors should always come from theme tokens rather than hardcoded
values.

---

## Borders

```tsx
<Section bordered>
    ...
</Section>
```

Adds a semantic divider below the section.

---

## Full Height

```tsx
<Section fullHeight>
    ...
</Section>
```

Useful for:

- Landing page hero sections
- Authentication layouts
- Marketing pages
- Empty states

---

## Semantic Elements

The component supports semantic HTML.

```tsx
<Section as="section" />

<Section as="main" />

<Section as="article" />

<Section as="header" />

<Section as="footer" />
```

---

## Accessibility

`Section` has minimal accessibility requirements because it is primarily a
layout primitive.

Use semantic elements through the `as` prop whenever appropriate.

For example:

```tsx
<Section as="main">

<Section as="article">

<Section as="section">
```

This improves document structure for assistive technologies.

---

## Best Practices

✅ Wrap large page areas in `Section`.

✅ Use `Container` inside or around `Section` to constrain content width.

✅ Prefer semantic background variants.

✅ Use design-token spacing sizes.

---

## Anti-Patterns

Avoid using `Section` for:

- Card layouts
- Grid layouts
- Flex alignment
- Width constraints
- Individual component spacing

Instead use:

- `Container`
- `Grid`
- `Flex`
- `Stack`
- `Spacer`

---

## Architecture

```text
Page

↓

Container

↓

Section

↓

Grid / Flex / Stack

↓

Cards

↓

Content
```

Every page in Ascend should generally follow this hierarchy.

---

## Related Components

- Box
- Container
- Flex
- Grid
- Stack
- Spacer

---

## API

| Prop | Type | Default |
|------|------|---------|
| `as` | `ElementType` | `"section"` |
| `size` | `SectionSize` | `"xl"` |
| `paddingY` | `ResponsiveValue<SectionSize>` | — |
| `paddingTop` | `ResponsiveValue<SectionSize>` | — |
| `paddingBottom` | `ResponsiveValue<SectionSize>` | — |
| `background` | `SectionBackground` | `"transparent"` |
| `bordered` | `boolean` | `false` |
| `fullHeight` | `boolean` | `false` |

---

## Testing

The component includes automated tests covering:

- Rendering
- Semantic elements
- Full-height layout
- Borders
- Prop forwarding
- Custom styling
- Snapshot regression

---

## Version

Current Version: **1.0.0**
