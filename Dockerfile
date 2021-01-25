# Step 1 : Builder image
FROM node:15-alpine AS builder

# Install yarn
RUN apk --no-cache add yarn --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community

# Create app user
RUN addgroup -S app && adduser -S -G app -s /bin/false app
ENV HOME=/home/app

# Create app directory
COPY --chown=app:app .pnp.js $HOME/node/.pnp.js
COPY --chown=app:app .yarn $HOME/node/.yarn
COPY --chown=app:app .yarnrc.yml $HOME/node/.yarnrc.yml
COPY --chown=app:app package.json $HOME/node/package.json
COPY --chown=app:app yarn.lock $HOME/node/yarn.lock

# Install app dependencies
USER app
WORKDIR $HOME/node
RUN yarn install

# Bundle app source
USER root
COPY --chown=app:app . $HOME/node/

USER app
RUN yarn build

# Step 2 : Run image
FROM nginx:latest

RUN rm -rf /etc/nginx/conf.d
COPY nginx /etc/nginx

# Copy of build directory
COPY --from=builder /home/app/node/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
