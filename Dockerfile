FROM node:14 as client

WORKDIR /app/client

COPY client/package.json /app/client

RUN npm install

COPY client /app/client

RUN npm run build

FROM node:alpine

WORKDIR /app

COPY server/package.json /app

COPY server/nginx-conf/nginx.conf /etc/nginx/nginx.conf

RUN npm install

COPY server /app

COPY --from=client /app/client/build /app/client

EXPOSE 8081

CMD [ "npm", "start" ]