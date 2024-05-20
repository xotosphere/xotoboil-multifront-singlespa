FROM node:16

WORKDIR /usr/src/app

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock

RUN yarn install

COPY . .

EXPOSE 8082

CMD yarn start