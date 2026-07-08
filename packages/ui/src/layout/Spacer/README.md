# Spacer

The `Spacer` component is a lightweight layout primitive used to create
consistent spacing between UI elements.

Instead of using arbitrary margins or empty `<div>` elements, `Spacer`
uses the Ascend Design System spacing scale to ensure consistency
throughout the application.

---

## Features

- Design token driven
- Vertical spacing
- Horizontal spacing
- Flex grow support
- Responsive sizes
- Accessible
- Theme compatible
- SSR compatible

---

## Basic Usage

```tsx
import { Spacer } from "@ascend/ui";

export function Example() {
    return (
        <>
            <Heading>
                Billing
            </Heading>

            <Spacer />

            <Text>
                Manage your subscription.
            </Text>
        </>
    );
}
```

---

## Sizes

```tsx
<Spacer size="none" />

<Spacer size="xs" />

<Spacer size="sm" />

<Spacer size="md" />

<Spacer size="lg" />

<Spacer size="xl" />

<Spacer size="2xl" />

<Spacer size="3xl" />
```

Spacing values resolve through the Ascend design token system.

---

## Horizontal Spacer

```tsx
<Flex align="center">

    <Avatar />

    <Spacer
        axis="horizontal"
        size="md"
    />

    <Text>
        Leonard
    </Text>

</Flex>
```

---

## Vertical Spacer

```tsx
<Heading>
    Dashboard
</Heading>

<Spacer size="lg" />

<Text>
    Welcome back.
</Text>
```

---

## Flex Grow

Spacer can consume all available space inside flex layouts.

```tsx
<Flex align="center">

    <Logo />

    <Spacer grow />

    <ProfileMenu />

</Flex>
```

This pattern is heavily used in:

- Navigation
- Dashboard
- Toolbars
- Billing
- Analytics
- AI Chat

---

## Responsive Spacer

```tsx
<Spacer
    size={{
        base: "sm",
        md: "lg",
        xl: "2xl",
    }}
/>
```

---

## Accessibility

Spacer is decorative.

It automatically renders with:

```html
aria-hidden="true"
```

Screen readers ignore it.

---

## Best Practices

✅ Use Spacer for intentional gaps between components.

✅ Use Stack when arranging multiple children.

✅ Use Section for page spacing.

✅ Use Container for page width.

---

## Avoid

Do not use Spacer:

- instead of padding
- instead of margin utilities
- instead of Section
- instead of Stack

Each component has a dedicated responsibility.

---

## Component Hierarchy

```text
Page

↓

Container

↓

Section

↓

Stack / Flex / Grid

↓

Spacer

↓

Content
```

---

## Related Components

- Box
- Flex
- Grid
- Stack
- Section
- Container

---

## API

| Prop | Type | Default |
|------|------|---------|
| as | ElementType | div |
| size | SpacerSize | md |
| axis | vertical \| horizontal | vertical |
| grow | boolean | false |
| shrink | boolean | true |

---

## Testing

The component includes automated tests covering:

- Rendering
- Semantic rendering
- Accessibility
- Flex grow
- Flex shrink
- Responsive behavior
- Snapshot regression

---

## Version

Current Version

**1.0.0**
