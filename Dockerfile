FROM ubuntu:20.04

RUN /bin/sh -c "apt update && apt upgrade -y && apt install -y curl &&\
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - &&\
    apt-get install -y nodejs"

WORKDIR /vivo

COPY package*.json ./

RUN ["npm", "install"]

COPY ./tests ./tests
COPY ./app ./app
COPY ./docs ./docs

CMD ["npm", "start"]

EXPOSE 3000
