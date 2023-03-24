from .base import *
import os

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('SLUPSK_SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# wq: Determine if we are running off django's testing server
DEBUG_WITH_RUNSERVER = False

ALLOWED_HOSTS = ["creatinginterfaces.demo.52north.org"]


# Database
# https://docs.djangoproject.com/en/2.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': os.environ.get('SLUPSK_DB', 'slupsktool'),
        'USER': os.environ.get('SLUPSK_DB_USER', 'slupsktool'),
        'PASSWORD': os.environ.get('SLUPSK_DB_PW'),
        'HOST': os.environ.get('SLUPSK_DB_HOST', 'db-slupsk'),
        'PORT': os.environ.get('SLUPSK_DB_PORT', ''),
    }
}

#SPATIALITE_LIBRARY_PATH = 'mod_spatialite.so'
