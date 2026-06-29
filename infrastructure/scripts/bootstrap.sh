#!/bin/bash

echo "Installing dependencies..."

pnpm install

cp .env.example .env

docker compose up -d

echo "Ascend ready."
