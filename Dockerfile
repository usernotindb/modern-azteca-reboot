
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:18-alpine as production

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/server.js ./
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3235

CMD ["node", "server.js"]
