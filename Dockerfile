FROM node:18.16.0

ENV APP_ROOT /src
ENV HOST 0.0.0.0
WORKDIR ${APP_ROOT}
COPY . ${APP_ROOT}
RUN npm ci && \
   npm run builder


# WORKDIR ${APP_ROOT}
# COPY package*.json /src/
# ENV APP_ROOT /src
# ENV NODE_ENV=production
# RUN npm install --production
# COPY . ${APP_ROOT}