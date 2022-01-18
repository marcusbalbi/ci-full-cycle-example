FROM node:14-alpine3.10

WORKDIR /app

COPY . .

#RUN rm -rf node_modules/ package-lock.json
#RUN npm install

ENTRYPOINT [ "npm", "run", "build:start" ]