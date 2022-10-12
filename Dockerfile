FROM node:16.17.0-alpine3.16

WORKDIR /app/

RUN mkdir -p /app/

COPY package.json /app/

RUN yarn cache clean \
  rm yarn.lock \
  rm -rf node_modules \
  yarn install

COPY . . 

EXPOSE 3000

CMD [ "yarn", "start:dev" ]