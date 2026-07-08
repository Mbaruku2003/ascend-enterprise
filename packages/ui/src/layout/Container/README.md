# Container

The `Container` component is a foundational layout primitive used to constrain
content width, provide consistent horizontal spacing, and center page content.

It is intended to be the outer wrapper for major application sections such as
landing pages, dashboards, settings pages, authentication flows, and
documentation.

> Container manages **horizontal layout only**.
>
> Vertical spacing should be handled by the `Section` component.

---

## Features

- Responsive maximum widths
- Optional full-width (fluid) layout
- Configurable horizontal padding
- Semantic HTML support
- Polymorphic rendering via the `as` prop
- Built on top of the `Box` component
- Theme-aware
- Design-token driven
- Server-side rendering compatible

---

## Basic Usage

```tsx
import { Container } from "@ascend/ui";

export function Example() {
  return (
    <Container>
      Content
    </Container>
  );
}
```

---

## Sizes

```tsx
<Container size="xs" />
<Container size="sm" />
<Container size="md" />
<Container size="lg" />
<Container size="xl" />
<Container size="2xl" />
```

The size presets map to design tokens.

| Size | Typical Usage |
|-------|---------------|
| xs | Narrow reading layouts |
| sm | Forms |
| md | Settings pages |
| lg | Documentation |
| xl | Dashboards |
| 2xl | Landing pages |

---

## Fluid Layout

Use `fluid` when content should occupy the full available width.

```tsx
<Container fluid>
    ...
</Container>
```

---

## Semantic Elements

Container supports semantic HTML through the `as` prop.

```tsx
<Container as="main">
    ...
</Container>

<Container as="section">
    ...
</Container>

<Container as="article">
    ...
</Container>

<Container as="header">
    ...
</Container>

<Container as="footer">
    ...
</Container>
```

---

## Custom Width

A custom maximum width can be supplied when required.

```tsx
<Container maxWidth="1600px">
    ...
</Container>
```

---

## Padding

Horizontal padding can be customized.

```tsx
<Container padding="none" />

<Container padding="sm" />

<Container padding="md" />

<Container padding="lg" />
```

Padding values resolve through the Ascend spacing token system.

---

## Accessibility

Container has no built-in accessibility requirements because it is a layout
primitive.

Accessibility should instead be provided through the semantic element rendered
via the `as` prop.

Examples include:

- `main`
- `section`
- `article`
- `header`
- `footer`

---

## Best Practices

✅ Wrap entire pages inside a single `Container`.

✅ Combine `Container` with `Section` for page spacing.

✅ Use size presets instead of hardcoded widths.

✅ Prefer design tokens over custom pixel values.

---

## Anti-Patterns

Avoid using Container for:

- Flexbox layout
- Grid layout
- Vertical spacing
- Alignment of individual elements
- Visual styling such as borders or backgrounds

Instead, use:

- `Flex`
- `Grid`
- `Stack`
- `Section`
- `Box`

---

## Architecture

```text
Design Tokens
        │
        ▼
Box
        │
        ▼
Container
        │
        ▼
Section
        │
        ▼
Templates
        │
        ▼
Applications
```

Container is intentionally lightweight and delegates most rendering behavior to
the `Box` component.

---

## Related Components

- Box
- Flex
- Grid
- Stack
- Section
- Spacer

---

## API

| Prop | Type | Default |
|------|------|---------|
| `as` | `ElementType` | `"div"` |
| `size` | `ContainerSize` | `"xl"` |
| `fluid` | `boolean` | `false` |
| `centered` | `boolean` | `true` |
| `padding` | `ResponsiveValue<ContainerPadding>` | `"md"` |
| `maxWidth` | `CSSProperties["maxWidth"]` | Size preset |
| `width` | `CSSProperties["width"]` | `"100%"` |

---

## Testing

Container is tested for:

- Rendering
- Semantic elements
- Width resolution
- Fluid layouts
- Custom widths
- Centering
- Prop forwarding
- Class name forwarding

---

## Version

Current Version: **1.0.0**
