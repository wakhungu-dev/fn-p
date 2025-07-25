# Production-ready Dockerfile for Next.js (TypeScript + Tailwind)
FROM node:20-alpine AS builder
WORKDIR /app
# Copy lock files first (use your specific package manager)
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile --prefer-offline
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -u 1001 -S nextjs -G nodejs

# Copy production dependencies and config files
COPY --from=builder --chown=nextjs:nodejs /app/package.json /app/package-lock.json ./
COPY --from=builder --chown=nextjs:nodejs /app/next.config.mjs ./
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

# Install only production dependencies
RUN npm install --frozen-lockfile --omit=dev

USER nextjs
EXPOSE 3000
CMD ["npm", "start"]