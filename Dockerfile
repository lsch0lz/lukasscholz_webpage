# Use a Node.js base image with the desired version
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm ci --production

# Copy the rest of the project files to the container
COPY . .

# Build the project
RUN npm run build

# Use a lightweight Node.js base image for the production environment
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the built files from the build stage
COPY --from=build /app/build .

# Install serve globally to run the production server
RUN npm install -g serve

# Expose the desired port (e.g., 80)
EXPOSE 3000

# Start the production server
CMD ["serve", "-p", "3000", "-s", "."]
