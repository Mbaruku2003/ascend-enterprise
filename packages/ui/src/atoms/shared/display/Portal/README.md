# Portal

A low-level infrastructure component that renders its children into a DOM node outside the current React hierarchy.

## Features

- SSR-safe
- Custom mount container
- Disabled mode
- Uses `createPortal`
- No styling

## Usage

```tsx
<Portal>
  <Dialog />
</Portal>
```

```tsx
<Portal container={document.body}>
  <Tooltip />
</Portal>
```

```tsx
<Portal disabled>
  Inline content
</Portal>
```
