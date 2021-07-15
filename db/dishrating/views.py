import os
from wq.db.rest.views import ModelViewSet
from .models import Dishrating
from kindergartendish.models import Kindergartendish
from django.conf import settings


class DishratingViewSet(ModelViewSet):

    def list(self, request, *args, **kwargs):
        response = super(DishratingViewSet, self).list(request, *args, **kwargs)

        # Add picture (url) of the corresponding dish to the list
        for i in range(0, len(response.data['list'])):
            dish_id = response.data['list'][i]['dish_id']
            # Make sure the dishrating has a dish id
            if dish_id is None:
                continue
            else:
                dish = Kindergartendish.objects.get(id=dish_id)
                response.data['list'][i]['dish_picture'] = os.path.join(settings.BASE_DIR, dish.picture.url)

        return response
