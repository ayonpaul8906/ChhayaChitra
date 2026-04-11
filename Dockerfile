# Stage 1: Install dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
# Install production dependencies only
RUN npm ci --omit=dev

# Stage 2: Build the Next.js application
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Set NODE_ENV to production for the build process
ENV NODE_ENV=production
# Build the Next.js application
RUN npm run build

# Stage 3: Run the Next.js application
FROM node:20-alpine AS runner
WORKDIR /app
# Set NODE_ENV to production for the runtime
ENV NODE_ENV=production
# Disable Next.js telemetry in production
ENV NEXT_TELEMETRY_DISABLED 1

# Copy necessary files from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port Next.js runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]