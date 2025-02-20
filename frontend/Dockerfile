# Use Node.js official image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Build React app for production
RUN npm run build

# Expose the port
EXPOSE 3000

# Command to run the React app
CMD ["npm", "start"]
