FROM node:18.16-slim as builder

RUN yarn global add pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY tsconfig.json ./
COPY packages packages

RUN pnpm install --frozen-lockfile
RUN yarn build:action

FROM node:18.16-slim

RUN yarn global add pnpm

WORKDIR /action-release

# RUN pnpm install canvas@2.10.2 gifsicle@5.3.0

COPY --from=builder /app/packages/action/dist/ /action-release/

CMD ["node", "/action-release/index.js"]
