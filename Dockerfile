FROM node:16.6.2-alpine3.11 as build
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build --production

FROM node:16.6.2-alpine3.11 as main
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/build build/





EXPOSE 5000
ENTRYPOINT yarn react-env --env APP_ENV
CMD yarn start
