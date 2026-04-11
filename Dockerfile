# Use an official Node.js runtime as a parent image
FROM node:20-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Next.js application
# Use turbopack for faster builds if available and configured
RUN npm run build

# --- Production Stage ---
FROM node:20-alpine AS runner

# Set the working directory in the container
WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/components.json ./components.json
COPY --from=builder /app/tailwind.config.ts ./tailwind.config.ts
COPY --from=builder /app/postcss.config.mjs ./postcss.config.mjs
COPY --from=builder /app/tsconfig.json ./tsconfig.json

# Expose the port the application runs on
EXPOSE 9002

# Set environment variables for production
ENV NODE_ENV production
ENV PORT 9002

# Command to run the application
CMD ["npm", "start"]