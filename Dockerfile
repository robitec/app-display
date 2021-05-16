FROM node:14

RUN apt-get update -qq && apt-get install -y yarn
RUN npm i -g @vercel/ncc

WORKDIR /display

ENV SOCKET_PORT=172.24.78.6
ENV SOCKET_IP=3001

COPY package.json .
COPY yarn.lock .

RUN yarn
COPY . .

RUN yarn build

RUN rm -rf src

EXPOSE 3001

CMD ["yarn", "eject"]
