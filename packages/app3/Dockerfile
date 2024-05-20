FROM node:16

WORKDIR /usr/src/app

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock

RUN yarn install

COPY . .

EXPOSE 8083

CMD yarn start