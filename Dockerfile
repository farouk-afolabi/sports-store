# Step 1: Build Angular app
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Step 2: Set up custom Node server
FROM node:18-alpine

WORKDIR /usr/src/sportsstore

# Copy server files
COPY ssl ./ssl
COPY authMiddleware.js ./
COPY serverdata.json ./
COPY server.js ./
COPY deploy-package.json ./package.json
RUN npm install

# Copy built Angular dist files
COPY --from=builder /app/dist/SportsStore ./dist/SportsStore

EXPOSE 80
CMD ["node", "server.js"]
