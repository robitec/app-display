# Stage 1 - build react app first
FROM node:14 as build

RUN apt-get update -qq && apt-get install -y yarn
RUN npm i -g @vercel/ncc

WORKDIR /display

COPY package.json .
COPY yarn.lock .

RUN yarn
COPY . .

RUN yarn build


# Stage 2 - build the final image and copy the react build files
FROM nginx:1.17.8-alpine

COPY --from=build /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
