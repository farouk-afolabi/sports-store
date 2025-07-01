# Use a lightweight Node.js image
FROM node:18-alpine

WORKDIR /usr/src/sportsstore

COPY package.json ./package.json
COPY server.js ./
COPY authMiddleware.js ./
COPY serverdata.json ./
COPY ssl ./ssl


RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]
