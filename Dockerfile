FROM python:3.7-buster

RUN apt-get update \
 && apt-get install -y \
    python-gdal \
    apache2 \
    libapache2-mod-wsgi-py3 \
    apache2-utils \
 && mkdir /var/www/slupsk-tool/

WORKDIR /var/www/slupsk-tool/

COPY . /var/www/slupsk-tool/

RUN python3 -m venv venv \
 && . venv/bin/activate \
 && pip install --upgrade --requirement requirements.txt

COPY ./docker-entrypoint.sh /usr/bin/docker-entrypoint.sh

RUN chown -R :www-data /var/www/slupsk-tool/media/ \
 && chmod ug+w /var/www/slupsk-tool/media/ \
 && chmod 777 /var/www/slupsk-tool/conf/ \
 && rm /etc/apache2/sites-enabled/000-default.conf \
 && cp -av ./conf/SlupskTool.conf /etc/apache2/sites-enabled/SlupskTool.conf \
 && a2enmod expires \
 && a2enmod ssl

EXPOSE 80

ARG GIT_COMMIT
LABEL org.opencontainers.image.revision "${GIT_COMMIT}"

ARG BUILD_DATE
LABEL org.opencontainers.image.created "${BUILD_DATE}"

ENV VERSION=1
LABEL org.opencontainers.image.version="${VERSION}"

ENTRYPOINT [ "/usr/bin/docker-entrypoint.sh" ]

CMD ["apachectl", "-D", "FOREGROUND"]
