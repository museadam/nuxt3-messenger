# FROM node:18.16.0

# ENV APP_ROOT /src
# ENV HOST 0.0.0.0
# WORKDIR ${APP_ROOT}
# COPY . ${APP_ROOT}
# RUN apt-get update && \
#   npm ci && \
#   npm run build

ARG NODE_VERSION=18.16.0

FROM node:${NODE_VERSION}-slim as base

ARG PORT=3000

ENV NODE_ENV=production

WORKDIR /src
# Build
FROM base as build



COPY --link package.json package-lock.json ./
COPY --link prisma ./
RUN apt-get update -y && apt-get install -y openssl

ENV OPENSSL_VERSION="1.0.2p"

RUN set -x \
  ### BUILD OpenSSL
  && wget --no-check-certificate -O /tmp/openssl-${OPENSSL_VERSION}.tar.gz "https://www.openssl.org/source/openssl-${OPENSSL_VERSION}.tar.gz" \
  && tar -xvf /tmp/openssl-${OPENSSL_VERSION}.tar.gz -C /tmp/ \
  && rm -rf /tmp/openssl-${OPENSSL_VERSION}.tar.gz \ 
  && cd /tmp/openssl-${OPENSSL_VERSION} \
  && ./Configure linux-x86_64 shared\
  && make \
  && make test \
  && make install \
  && cd .. \
  && rm -rf openssl-${OPENSSL_VERSION}

ENV PATH /usr/local/ssl/bin:$PATH

RUN npm install --production=false

COPY --link . .

RUN npm run builder
RUN npm prune

# Run
FROM base

ENV PORT=$PORT

COPY --from=build /src/.output /src/.output
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /src/node_modules /src/node_modules

CMD [ "node", ".output/server/index.mjs" ]