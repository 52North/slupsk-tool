import os
import sys
from .base import *


# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('SLUPSK_SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# wq: Determine if we are running off django's testing server
DEBUG_WITH_RUNSERVER = 'manage.py' in sys.argv[0]

ALLOWED_HOSTS = ["creatinginterfaces.demo.52north.org"]

# Database
# https://docs.djangoproject.com/en/2.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': 'slupsktool',
        'USER': 'slupsktool',
        'PASSWORD': os.environ.get('SLUPSK_DB_PW'),
        'HOST': 'db-slupsk',
        'PORT': '',
    }
}

#SPATIALITE_LIBRARY_PATH = 'mod_spatialite.so'