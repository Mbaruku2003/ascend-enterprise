# @ascend-enterprise/ui

Shared component library for the Ascend Enterprise monorepo, built on top of
[shadcn/ui](https://ui.shadcn.com) conventions (see `components.json`).

## Structure

```
src/
  components/   # One folder per component (button, card, input, ...)
  providers/    # Context providers (theme, etc.)
  hooks/        # Shared React hooks
  icons/        # Icon components
  lib/          # Utilities (e.g. cn() class merger)
  styles/       # Global CSS, CSS variables
  tokens/       # Design tokens (color, spacing, typography)
  animations/   # Shared framer-motion variants
```

## Adding a component via shadcn CLI

From this directory:

```bash
pnpm dlx shadcn@latest add <component>
```

This respects the aliases configured in `components.json` and drops new
components into `src/components/<name>`.

## Usage from an app

```ts
import { Button } from "@ascend-enterprise/ui";
```

Make sure the consuming app's Tailwind config extends this package's
`tailwind.config.ts` and includes `../../packages/ui/src/**/*.{ts,tsx}` in
its `content` glob.
