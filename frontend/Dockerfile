# frontend/Dockerfile
FROM node:14-alpine as build

WORKDIR /app

COPY package.json  ./
RUN npm install

COPY . .
# RUN npm run start

# Expose port 3000 for the development server
# EXPOSE 3000
# FROM nginx:alpine

# COPY --from=build /app/build /usr/share/nginx/html


# Start the development server using npm start in the background
CMD ["npm", "start"]
