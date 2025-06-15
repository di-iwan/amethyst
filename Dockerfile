FROM node:22-alpine AS builder
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run prepare
RUN npm run build
RUN npm prune --production

FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/drizzle drizzle/
COPY --from=builder /app/drizzle.config.ts .
COPY --from=builder /app/node_modules node_modules/
COPY --from=builder /app/package-lock.json .
COPY package.json . 
RUN npm i
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "sh", "-c", "npm run db:migrate && node build/index.js" ]