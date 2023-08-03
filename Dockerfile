FROM node:16.13.2-alpine

WORKDIR /app/test

COPY package*.json ./

RUN npm i 

COPY . .

EXPOSE 7000

CMD ["npm","start"]