#!/usr/bin/env bash
#
# setup-ui-package.sh
# Scaffolds packages/ui inside the ascend-enterprise monorepo.
# Run from the repo root. Safe to re-run — existing files are never
# overwritten unless you pass --force.
#
set -euo pipefail

FORCE=false
if [[ "${1:-}" == "--force" ]]; then
  FORCE=true
fi

GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m'

created=()
skipped=()

ROOT="packages/ui"

# ---------- helpers ----------

keep_dir() {
  mkdir -p "$1"
  if [[ -z "$(ls -A "$1" 2>/dev/null)" ]]; then
    touch "$1/.gitkeep"
  fi
}

write_file() {
  local path="$1"
  local content="$2"

  if [[ -f "$path" && "$FORCE" == false ]]; then
    skipped+=("$path")
    return
  fi

  mkdir -p "$(dirname "$path")"
  printf '%s' "$content" > "$path"
  created+=("$path")
}

# ---------- directories ----------
# Add new component folders to this array as the library grows.
components=(button card input badge avatar sidebar navbar)

for c in "${components[@]}"; do
  keep_dir "$ROOT/src/components/$c"
done

keep_dir "$ROOT/src/providers"
keep_dir "$ROOT/src/hooks"
keep_dir "$ROOT/src/icons"
keep_dir "$ROOT/src/lib"
keep_dir "$ROOT/src/styles"
keep_dir "$ROOT/src/tokens"
keep_dir "$ROOT/src/animations"

# ---------- files ----------

write_file "$ROOT/package.json" '{
  "name": "@ascend-enterprise/ui",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts",
    "./styles.css": "./src/styles/globals.css"
  },
  "scripts": {
    "lint": "eslint . --max-warnings 0",
    "type-check": "tsc --noEmit",
    "clean": "rm -rf .turbo node_modules"
  },
  "dependencies": {
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.0",
    "lucide-react": "^0.456.0",
    "framer-motion": "^11.11.0"
  },
  "peerDependencies": {
    "react": "^18.3.0 || ^19.0.0",
    "react-dom": "^18.3.0 || ^19.0.0"
  },
  "devDependencies": {
    "typescript": "^5.6.0",
    "tailwindcss": "^3.4.0",
    "tailwindcss-animate": "^1.0.7",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0"
  }
}
'

write_file "$ROOT/tsconfig.json" '{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
'

write_file "$ROOT/components.json" '{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/styles/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "ui": "@/components",
    "utils": "@/lib/utils",
    "hooks": "@/hooks"
  }
}
'

write_file "$ROOT/tailwind.config.ts" 'import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
'

write_file "$ROOT/src/index.ts" '// Barrel file — uncomment exports as components/hooks/utils land.

// Components
// export * from "./components/button";
// export * from "./components/card";
// export * from "./components/input";
// export * from "./components/badge";
// export * from "./components/avatar";
// export * from "./components/sidebar";
// export * from "./components/navbar";

// Providers
// export * from "./providers";

// Hooks
// export * from "./hooks";

// Lib
// export * from "./lib/utils";

// Tokens
// export * from "./tokens";
'

write_file "$ROOT/README.md" '# @ascend-enterprise/ui

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

Make sure the consuming app'"'"'s Tailwind config extends this package'"'"'s
`tailwind.config.ts` and includes `../../packages/ui/src/**/*.{ts,tsx}` in
its `content` glob.
'

# ---------- cleanup ----------
# Earlier scaffolding may have left a .gitkeep directly in packages/ui/ —
# remove it now that the directory has real files.
if [[ -f "$ROOT/.gitkeep" ]]; then
  rm "$ROOT/.gitkeep"
fi

# ---------- summary ----------

echo ""
if [[ ${#created[@]} -gt 0 ]]; then
  echo -e "${GREEN}Created:${NC}"
  for f in "${created[@]}"; do echo "  + $f"; done
fi

if [[ ${#skipped[@]} -gt 0 ]]; then
  echo -e "${YELLOW}Skipped (already exist, use --force to overwrite):${NC}"
  for f in "${skipped[@]}"; do echo "  - $f"; done
fi

echo ""
echo "packages/ui scaffolded. Component folders are empty placeholders —"
echo "add files via the shadcn CLI or by hand, then uncomment the matching"
echo "export in src/index.ts."
