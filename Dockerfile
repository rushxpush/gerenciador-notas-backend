FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# stop build if unit tests fail
RUN npm run test || exit 1
RUN npm run build
CMD ["npm", "run", "start:prod"]