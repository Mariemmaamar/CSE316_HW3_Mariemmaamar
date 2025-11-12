FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --no-audit --no-fund
COPY src ./src
EXPOSE 8080
CMD ["npm","run","dev"]
