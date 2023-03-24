FROM python:3.7-buster

RUN apt-get update \
 && apt-get install -y \
    python-gdal \
    apache2 \
    libapache2-mod-wsgi-py3 \
    apache2-utils

RUN mkdir /var/www/slupsk-tool/

WORKDIR /var/www/slupsk-tool/

COPY . /var/www/slupsk-tool/

RUN python3 -m venv venv

RUN . venv/bin/activate && pip install --upgrade --requirement requirements.txt

COPY ./docker-entrypoint.sh /usr/bin/docker-entrypoint.sh

RUN chown -R :www-data /var/www/slupsk-tool/media/

RUN chmod ug+w /var/www/slupsk-tool/media/

RUN chmod 777 /var/www/slupsk-tool/conf/

RUN rm /etc/apache2/sites-enabled/000-default.conf

RUN a2enmod expires
RUN a2enmod ssl

EXPOSE 80

ARG GIT_COMMIT
LABEL org.opencontainers.image.revision "${GIT_COMMIT}"

ARG BUILD_DATE
LABEL org.opencontainers.image.created "${BUILD_DATE}"

ARG VERSION=1
LABEL org.opencontainers.image.version="${VERSION}"

ENTRYPOINT [ "/usr/bin/docker-entrypoint.sh" ]

CMD ["apachectl", "-D", "FOREGROUND"]
