# Build stage: build Angular app
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Fix for OpenSSL issue in Node 17+
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm run build


# Serve stage: serve built app with nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
