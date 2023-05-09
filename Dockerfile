FROM node:16

WORKDIR /webapp

COPY package.json .

COPY yarn.lock .

RUN yarn

COPY . .

EXPOSE 8080

CMD ["yarn", "serve"]