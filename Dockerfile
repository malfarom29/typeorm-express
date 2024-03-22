FROM node:lts-bullseye-slim
USER node

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY --chown=node:node . /usr/src/app

ENTRYPOINT [ "sh/entrypoint.sh" ]

EXPOSE 3000

CMD ["npm", "start"]
