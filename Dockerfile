# Production-ready Dockerfile for Next.js (with TypeScript and Tailwind)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN npm install --frozen-lockfile --prefer-offline
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/tailwind.config.ts ./tailwind.config.ts
COPY --from=builder /app/postcss.config.mjs ./postcss.config.mjs
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/src ./src
EXPOSE 3000
CMD ["npm", "start"]
