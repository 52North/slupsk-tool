from django.contrib.auth.models import User
import re

def route_base_url(request):
     return {'rt': '/slupsk-tool'}


def link_visibility(request):

    if request.user.is_superuser == True:
        return {'can_add_producer_info': True, 'can_add_kindergarten_dish': True}
    if request.user.is_staff == True:
        return {'can_add_producer_info': True, 'can_add_kindergarten_dish': True}
    if request.user.groups.filter(name = "producer").exists():
        return {'can_add_producer_info': True, 'can_add_kindergarten_dish': False}
    if  re.match("producer", request.user.get_username()):
        return {'can_add_producer_info': True, 'can_add_kindergarten_dish': False}
    return {'can_add_producer_info': False, 'can_add_kindergarten_dish': False}
