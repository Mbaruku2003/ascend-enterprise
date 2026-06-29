.RECIPEPREFIX := >
.PHONY: help install dev build lint test clean docker-up docker-down db-reset seed

help: ## Show available commands
>@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-14s\033[0m %s\n", $$1, $$2}'

install: ## Install all workspace dependencies
>pnpm install

dev: ## Run all apps in dev mode (Turborepo)
>pnpm dev

build: ## Build all apps and packages
>pnpm build

lint: ## Lint the whole monorepo
>pnpm lint

test: ## Run tests across the monorepo
>pnpm test

clean: ## Remove build artifacts, caches, and node_modules
>pnpm clean

docker-up: ## Start Postgres + Redis containers
>docker compose up -d

docker-down: ## Stop Postgres + Redis containers
>docker compose down

db-reset: ## Wipe local DB/cache volumes and re-run migrations
>docker compose down -v
>docker compose up -d postgres redis
>@echo "Waiting for postgres to accept connections..."
>@sleep 3
>pnpm --filter database run migrate

seed: ## Seed the database with fixture data
>pnpm --filter database run seed
