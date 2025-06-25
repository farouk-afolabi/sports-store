# Use a lightweight Node.js image
FROM node:18-alpine

# Create working directory
WORKDIR /usr/src/sportsstore

# Copy backend files
COPY backend/package.json ./package.json
COPY backend/server.js ./
COPY backend/authMiddleware.js ./
COPY backend/serverdata.json ./
COPY backend/ssl ./ssl

# Optional: Copy frontend build output (if serving frontend from backend)
COPY frontend/dist ./dist

# Install backend dependencies
RUN npm install

# Expose port
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
