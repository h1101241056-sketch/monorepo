FROM oven/bun:1 AS base
WORKDIR /app

# Copy workspace manifests dulu (layer caching)
COPY package.json bun.lock ./
COPY apps/backend/package.json ./apps/backend/
COPY packages/shared/package.json ./packages/shared/

# Install dependencies
RUN bun install

# Copy source SEMUA sekaligus setelah install
COPY apps/backend ./apps/backend
COPY packages/shared ./packages/shared

# Generate Prisma client (prisma/schema.prisma sudah ada)
WORKDIR /app/apps/backend
RUN bunx prisma generate

EXPOSE 3000
CMD ["bun", "run", "src/index.ts"]