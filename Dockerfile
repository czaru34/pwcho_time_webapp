FROM node:14.15.0-alpine
WORKDIR /app
COPY . /app
RUN npm install --no-optional
CMD [ "node", "index.js" ]