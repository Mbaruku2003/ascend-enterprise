# Ascend Enterprise

Recovery and habit-tracking platform with an AI coaching component, structured as a pnpm + Turborepo monorepo.

## Structure

```
apps/
  web/      # Main user-facing Next.js app
  api/      # Backend API service
  admin/    # Internal admin dashboard
  docs/     # Product / developer documentation site

packages/
  ui/         # Shared component library
  auth/       # Authentication logic, shared across apps
  database/   # Schema, migrations, client
  config/     # Shared config (eslint, tsconfig, etc. consumers)
  utils/      # Shared utility functions
  ai/         # AI coaching logic / provider integration
  types/      # Shared TypeScript types
  eslint/      # Shared ESLint config

infrastructure/
  docker/     # Dockerfiles, container configs
  scripts/    # Deployment / ops scripts
```

## Getting started

```bash
pnpm install
cp .env.example .env
docker compose up -d   # postgres + redis
pnpm dev
```

## Common commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Run all apps in dev mode via Turborepo |
| `pnpm build` | Build all apps and packages |
| `pnpm lint` | Lint the whole monorepo |
| `pnpm type-check` | Type-check the whole monorepo |
| `pnpm test` | Run tests across the monorepo |
