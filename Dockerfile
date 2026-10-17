
FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache sqlite

COPY --chown=node:node package*.json ./

RUN mkdir -p /app/node_modules && chown -R node:node /app

USER node

RUN npm install

COPY --chown=node:node . .

CMD ["npm", "run", "dev"]
