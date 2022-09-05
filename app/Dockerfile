FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

FROM  nginx:alpine
WORKDIR /app
COPY default.conf /etc/nginx/conf.d/

COPY --from=builder /app/dist/ /app

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
