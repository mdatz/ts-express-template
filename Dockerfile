FROM node:20 as build

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

FROM build as production

ENV NODE_PATH=./build

RUN npm run build
