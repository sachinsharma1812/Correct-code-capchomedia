# Use Node.js as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the project files into the container
COPY . .

# Build the project for production
RUN npm run build

# Install a lightweight web server to serve the built files
RUN npm install -g serve

# Specify the command to run the server
CMD ["serve", "-s", "dist"]

# Expose the default port used by the application
EXPOSE 3000

