# Stage 1: Build the Next.js application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
# Using `npm ci` for clean install in CI/CD environments
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Next.js application
# It's highly recommended to set `output: 'standalone'` in next.config.ts
# for optimal Docker image size and performance.
# If not using 'standalone', you might need to copy more files in the final stage.
RUN npm run build

# Stage 2: Run the Next.js application
FROM node:20-alpine AS runner

# Set working directory
WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV production

# Copy standalone output from the builder stage
# This assumes `output: 'standalone'` is configured in next.config.ts
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Expose the port Next.js runs on
EXPOSE 3000

# Start the Next.js application
CMD ["node", "server.js"]