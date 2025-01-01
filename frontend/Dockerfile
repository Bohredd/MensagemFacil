FROM node:latest AS build

WORKDIR /app

COPY ./frontend ./

RUN npm install

RUN npm run build

EXPOSE 3000