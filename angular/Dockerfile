FROM node:20

RUN npm install -g @angular/cli


ENV NG_CLI_ANALYTICS="false"

WORKDIR /usr/src/app
ENTRYPOINT ["ng", "serve", \
            "--port", "8080", \
            "--host", "0.0.0.0", \
            "--verbose", \
            "--live-reload", "true"]
