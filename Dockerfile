FROM node:18-alpine
WORKDIR /app
RUN apk add --update-cache sqlite
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
USER node
CMD npm install
