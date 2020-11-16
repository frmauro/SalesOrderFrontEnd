# stage1 as builder
FROM node:12.16.1-alpine As builder
WORKDIR /app
# copy the package.json to install dependencies
COPY package.json package-lock.json /app/
RUN npm i npm@latest -g
RUN npm install
COPY ./ /app/
ARG env=prod
RUN npm run build


# Estagio 2 - Será responsavel por expor a aplicação
FROM nginx:1.13
COPY --from=builder /app/dist/salesorderfrontend /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
