FROM node:lts-alpine3.16 as base
RUN apk update
WORKDIR /app
COPY ./app/package.json /app/package.json
COPY ./app/package-lock.json /app/package-lock.json
RUN apk add --upgrade tini && \
    npm install
COPY ./app/* /app/

FROM node:lts-alpine3.16 as dev
WORKDIR /app
COPY --from=base /sbin/tini /sbin/tini
COPY --from=base --chown=node:node /app /app
USER node
EXPOSE 3000