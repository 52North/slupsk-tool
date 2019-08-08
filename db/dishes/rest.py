from wq.db import rest
from .models import Dishes
from .serializers import DishesSerializer


rest.router.register_model(
    Dishes,
    serializer=DishesSerializer,
    fields="__all__",
    locate=True,
    map=[{
        'mode': 'list',
        'autoLayers': True,
        'layers': [],
    }, {
        'mode': 'detail',
        'autoLayers': True,
        'layers': [],
    }, {
        'mode': 'edit',
        'layers': [{
            'type': 'geojson',
            'name': 'geometry',
            'url': 'dishes/{{id}}/edit.geojson',
            'geometryField': 'geometry',
            'flatten': True,
        }],
    }],
)
