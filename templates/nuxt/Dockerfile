FROM node:14
WORKDIR /app

COPY package*.json /app/

RUN npm ci
COPY . /app

RUN npm run build
CMD npm run start
