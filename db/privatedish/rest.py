from wq.db import rest
from .models import Privatedish
from .serializers import PrivatedishSerializer


rest.router.register_model(
    Privatedish,
    serializer=PrivatedishSerializer,
    fields="__all__",
    map=[{
        'mode': 'list',
        'autoLayers': True,
        'layers': [
            {
            'name': 'Shops',
            'type': 'geojson',
            'url': 'shops.geojson',
            'popup': 'shop',
            'cluster' : True,
            'icon' : 'green'
            },
        ],
    }, {
        'mode': 'detail',
        'autoLayers': True,
        'layers': [
            {
            'name': 'Shops',
            'type': 'geojson',
            'url': 'shops.geojson',
            'popup': 'shop',
            'cluster' : True,
            'icon' : 'green'
            },
        ],
    }, {
        'mode': 'edit',
        'layers': [{
            'type': 'geojson',
            'name': 'distance_calculator',
            'url': 'privatedishs/{{id}}/edit.geojson',
            'draw': {
                'circle': False,
                'circlemarker': False,
                'marker': False,
                'polyline': {},
                'polygon': False,
                'rectangle': False,
            },
            'geometryField': 'distance_calculator',
            'flatten': True,
        },
        {
            'name': 'Shops',
            'type': 'geojson',
            'url': 'shops.geojson',
            'popup': 'shop',
            'cluster' : True,
            'icon' : 'green'
        },
        ],
    }],
)
