
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
COPY bun.lockb ./
RUN bun install

COPY . .
RUN bun run build

FROM node:18-alpine as production

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/server.js ./
COPY --from=build /app/src ./src # Copy src directory for server imports

EXPOSE 3235

CMD ["node", "server.js"]
