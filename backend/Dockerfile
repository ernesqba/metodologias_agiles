FROM node:16.15.1-alpine3.16

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 3000

RUN npm build

CMD ["npm", "start"]
