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

# Copy built Angular app
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom NGINX config to proxy /api to backend
COPY nginx.conf /etc/nginx/conf.d/default.conf  # <-- ADD THIS LINE

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]