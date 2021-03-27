FROM node:14.0.0 as build

LABEL author="Mitch Chang"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

CMD ["npm", "start"]


