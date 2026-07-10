# Surface

A low-level visual primitive used throughout Ascend UI.

Surface provides consistent styling for:

- Cards
- Dialogs
- Drawers
- Popovers
- Menus
- Tooltips
- Panels

## Usage

```tsx
<Surface>
    Content
</Surface>
```

Outlined

```tsx
<Surface variant="outlined">
```

Elevated

```tsx
<Surface
    variant="elevated"
    elevation="lg"
/>
```

Interactive

```tsx
<Surface interactive>
```

## Props

| Prop | Default |
|-------|----------|
| variant | filled |
| elevation | none |
| radius | lg |
| padding | md |
| interactive | false |

## Accessibility

Surface is presentation-only.

Interactive behavior should be provided by the consuming component.
