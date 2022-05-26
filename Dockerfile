FROM node:13.10.1-alpine3.11 as builder
RUN mkdir /app
WORKDIR /app
COPY nginx/default.conf /etc/nginx/conf.d/
COPY src src
COPY package-lock.json package-lock.json
COPY package.json package.json
COPY webpack.common.js webpack.common.js
COPY webpack.dev.js webpack.dev.js
COPY webpack.prod.js webpack.prod.js
RUN npm install
CMD ["npm", "install"]

FROM nginx:1.13.3-alpine
COPY . .
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder . .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


