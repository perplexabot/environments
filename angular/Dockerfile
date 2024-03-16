FROM node:20

RUN npm install -g @angular/cli

WORKDIR /usr/src/

ENV NG_CLI_ANALYTICS="false"
RUN ng new --defaults --skip-git --minimal --skip-tests testing

WORKDIR /usr/src/testing
ENTRYPOINT ["ng", "serve", \
            "--port", "8080", \
            "--host", "0.0.0.0", \
            "--verbose", \
            "--live-reload", "true"]
