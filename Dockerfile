FROM node:20 as build

WORKDIR /

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN npm prune --production

FROM build as deploy

WORKDIR /dist

COPY --from=build /build /dist

CMD ["node", "index.js"]
