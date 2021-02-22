FROM node:12-alpine as builder
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn build

FROM node:12-alpine
WORKDIR /dir
COPY --from=builder /app /dir
CMD ["yarn", "start"]