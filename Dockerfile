FROM nginx:1.13.8

LABEL maintainer="SiropOps <cyril@botalista.community>"

COPY ./docker/configs/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY ./dist/ch.portfolio /usr/share/nginx/html

RUN  sed -i "s|rel=stylesheet|rel=stylesheet type=text/css |g" /usr/share/nginx/html/index.html

