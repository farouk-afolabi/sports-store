# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Make sure this matches your Angular output path
RUN npm run build -- --output-path=dist/SportsStore

# Serve stage
FROM nginx:alpine
# Copy from the exact build output path
COPY --from=build /app/dist/SportsStore /usr/share/nginx/html
# Use our custom NGINX config
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]