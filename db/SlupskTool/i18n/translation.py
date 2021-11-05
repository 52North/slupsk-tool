from .dictionary import Dictionary

# https://docs.djangoproject.com/en/3.1/topics/i18n/translation/#how-django-discovers-language-preference
# How django discovers language preference using request.LANGUAGE_CODE (needs django.middleware.locale.LocaleMiddleware)
#  1) language prefix in the requested URL
#  2) cookie (django_language)
#  3) Accept-Language HTTP header
#  4) global LANGUAGE_CODE setting
# Note: language preference is expected to be in the default language format (e.g. ro or en, not romanian or english)

# Get additional info on language
# get_language_info()

def translate(request):

    # alternative using cookie directly: language = request.COOKIES.get('django_language')
    return Dictionary().get_dict(request.LANGUAGE_CODE)
