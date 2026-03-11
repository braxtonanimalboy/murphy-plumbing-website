#!/bin/bash
set -e

echo "Installing pnpm..."
npm install -g pnpm@10.4.1

echo "Installing dependencies..."
pnpm install --frozen-lockfile

echo "Building project..."
pnpm build

echo "Build complete!"
