
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
COPY bun.lockb ./
RUN bun install

COPY . .
RUN bun run build

FROM node:18-alpine as production

WORKDIR /app

# Copy package manager files
COPY package*.json ./
COPY bun.lockb ./

# Install production dependencies
RUN bun install --production

# Copy built assets and necessary source files from build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/server.js ./
COPY --from=build /app/src ./src

EXPOSE 3235

CMD ["node", "server.js"]
