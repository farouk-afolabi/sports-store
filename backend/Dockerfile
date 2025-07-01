# Use a lightweight Node.js image
FROM node:18-alpine

WORKDIR /usr/src/sportsstore

COPY backend/package.json ./package.json
COPY backend/server.js ./
COPY backend/authMiddleware.js ./
COPY backend/serverdata.json ./
COPY backend/ssl ./ssl

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]
