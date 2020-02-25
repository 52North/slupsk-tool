from wq.db import rest
from .models import Privatedish
from .serializers import PrivatedishSerializer


rest.router.register_model(
    Privatedish,
    serializer=PrivatedishSerializer,
    fields="__all__",
    map=[{
        'mode': 'list',
        'layers': [
            {
            'name': '<span style="padding-right: 5px";>Shops</span><img style="height: 20px;" src="images/shop.png">',
            'type': 'geojson',
            'url': 'shops.geojson',
            'popup': 'shop',
            'cluster' : True,
            'icon' : 'shop'
            },
            {
            'name': '<span style="padding-right: 5px";>Producers</span><img style="height: 20px;" src="images/producer.png">',
            'type': 'geojson',
            'url': 'producers.geojson',
            'popup': 'producer',
            'cluster' : True,
            'icon' : 'producer'
            },
        ],
    }, {
        'mode': 'detail',
        'layers': [
            {
            'name': '<span style="padding-right: 5px";>Shops</span><img style="height: 20px;" src="images/shop.png">',
            'type': 'geojson',
            'url': 'shops.geojson',
            'popup': 'shop',
            'cluster' : True,
            'icon' : 'shop'
            },
            {
            'name': '<span style="padding-right: 5px";>Producers</span><img style="height: 20px;" src="images/producer.png">',
            'type': 'geojson',
            'url': 'producers.geojson',
            'popup': 'producer',
            'cluster' : True,
            'icon' : 'producer'
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
            'flatten': True,
            },
            {
            'name': '<span style="padding-right: 5px";>Shops</span><img style="height: 20px;" src="images/shop.png">',
            'type': 'geojson',
            'url': 'shops.geojson',
            'popup': 'shop',
            'cluster' : True,
            'icon' : 'shop'
            },
            {
            'name': '<span style="padding-right: 5px";>Producers</span><img style="height: 20px;" src="images/producer.png">',
            'type': 'geojson',
            'url': 'producers.geojson',
            'popup': 'producer',
            'cluster' : True,
            'icon' : 'producer'
            },
        ],
    }],
)
