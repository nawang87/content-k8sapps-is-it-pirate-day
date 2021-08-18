FROM node:16.6.2-alpine3.11 as main
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build --production



EXPOSE 3000
CMD ["serve", "build"]
