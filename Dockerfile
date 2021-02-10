FROM node:latest

WORKDIR /src/app

COPY . .
RUN npm install

EXPOSE 3000

CMD ["node", "server.js/server.js" ]