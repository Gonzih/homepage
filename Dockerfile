FROM alpine
MAINTAINER Max Gonzih <gonzih at gmail dot com>

RUN apk update && apk add git make bash curl \
    && curl -sL https://github.com/gohugoio/hugo/releases/download/v0.48/hugo_0.48_Linux-64bit.tar.gz > /tmp/hugo.tar.gz \
    && cd /tmp && tar xvzf /tmp/hugo.tar.gz && mv /tmp/hugo /usr/bin && rm /tmp/hugo.tar.gz

RUN mkdir -p /var/website
VOLUME /var/website

EXPOSE 1313

ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

WORKDIR /var/website
