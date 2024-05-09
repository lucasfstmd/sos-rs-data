FROM node:20-alpine


# Create web-app directory
RUN mkdir -p /usr/src/sos-data
WORKDIR /usr/src/sos-data

COPY . /usr/src/sos-data

RUN npm install
EXPOSE 8080

ENTRYPOINT npm run build \
&& export NODE_OPTIONS="--max-old-space-size=2560" \
&& npm run start:prod
