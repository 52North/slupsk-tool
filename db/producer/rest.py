from wq.db import rest
from .models import Producer
from .serializers import ProducerSerializer


rest.router.register_model(
    Producer,
    serializer=ProducerSerializer,
    fields="__all__",
    locate=True,
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
        'autoZoom' : True,
        'layers': [{
            'type': 'geojson',
            'name': 'Producer',
            'url': 'producers/{{id}}/edit.geojson',
            'popup': 'producer',
            'draw': {
                'circle': False,
                'marker': False,
                'circlemarker': False,
                'polyline': True,
                'polygon': False,
                'rectangle': False,
                },
            'geometryField': 'geometry',
            'flatten': True,
            'icon' : 'orange',
            },
            {
            'name': 'Shops',
            'type': 'geojson',
            'url': 'shops.geojson',
            'popup': 'shop',
            'cluster' : True,
            'icon' : 'green'
            }],
    }],
)
