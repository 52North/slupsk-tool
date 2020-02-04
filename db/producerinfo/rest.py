from wq.db import rest
from .models import Producerinfo
from .serializers import ProducerinfoSerializer


rest.router.register_model(
    Producerinfo,
    serializer=ProducerinfoSerializer,
    fields="__all__",
    map=[{
        'mode': 'list',
        'autoZoom' : False,
        'layers': [{
            'type': 'geojson',
            'name': 'Producers',
            'url': 'producers.geojson',
            'popup': 'producer',
            'cluster' : True,
            'icon' : 'orange',
        }],
    }, {
        'mode': 'detail',
        'autoZoom' : True,
        'layers': [{
            'type': 'geojson',
            'name': 'Producer',
            'url': 'producers/{{id}}.geojson',
            'popup': 'producer',
            'flatten': True,
            'icon' : 'orange',
        }],
    }, {
        'mode': 'edit',
        'layers': [{
            'type': 'geojson',
            'name': 'distance_calculator',
            'url': 'producerinfos/{{id}}/edit.geojson',
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
