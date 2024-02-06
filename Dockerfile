FROM node:14.21 AS build
WORKDIR /app
COPY package.json ./
# COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm run build:prod

FROM nginx:latest
COPY ./Docker/nginx_default.configuration.template /etc/nginx/conf.d/default.conf.template
COPY ./Docker/nginx_docker_entrypoint.sh /usr/local/bin/entrypoint.sh
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
