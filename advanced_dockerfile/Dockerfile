FROM node:alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM node:alpine
WORKDIR /app
COPY --from=builder node_modules ./node_modules
COPY --from=builder app.js ./
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 CMD wget -qO- http://localhost:3000/health || exit 1
USER node
CMD ["node", "app.js"]