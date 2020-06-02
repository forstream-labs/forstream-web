FROM keymetrics/pm2:12-alpine

WORKDIR /usr/src/forstream-web

COPY dist dist/
COPY server server/
COPY package.json .
COPY ecosystem.config.js .

ENV NPM_CONFIG_LOGLEVEL warn

RUN npm install --production && touch server/configs.yml

EXPOSE 4000

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
