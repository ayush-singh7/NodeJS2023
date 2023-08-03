FROM node:16.13.2-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT = 8080

EXPOSE 8080

CMD ["node" , "index"]