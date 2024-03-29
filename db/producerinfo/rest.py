from wq.db import rest
from .models import Producerinfo
from .serializers import ProducerinfoSerializer


rest.router.register_model(
    Producerinfo,
    serializer=ProducerinfoSerializer,
    fields="__all__",
    cache="all",
    map=[{
        'mode': 'list',
        'autoZoom' : False,
        'layers': [{
            'type': 'geojson',
            'name': '<span style="padding-right: 5px;">Producenci</span><img style="height: 20px;" src="images/producer.png">',
            'url': 'producers.geojson',
            'popup': 'producer',
            'icon' : 'producer',
        }],
    }, {
        'mode': 'detail',
        'autoZoom' : True,
        'layers': [{
            'type': 'geojson',
            'name': '<span style="padding-right: 5px;">Producent</span><img style="height: 20px;" src="images/producer.png">',
            'url': 'producers/{{id}}.geojson',
            'popup': 'producer',
            'flatten': True,
            'icon' : 'producer',
        }],
    }, {
        'mode': 'edit',
        'layers': [{
            'type': 'geojson',
            'name': 'kalkulator odległości',
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
            'icon': 'producer',
            },
            {
            'type': 'geojson',
            'name': '<span style="padding-right: 5px;">Producenci</span><img style="height: 20px;" src="images/producer.png">',
            'url': 'producers.geojson',
            'popup': 'producer',
            'icon' : 'producer',
            },
            {
            'name': '<span style="padding-right: 5px";>Sklepy</span><img style="height: 20px;" src="images/shop.png">',
            'type': 'geojson',
            'url': 'shops.geojson',
            'popup': 'shop',
            'icon' : 'shop'
            },
        ],
    }],
)
