from wq.db import rest
from .models import Producer


rest.router.register_model(
    Producer,
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
            'icon' : 'green',
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
            'icon' : 'green',
        }],
    }, {
        'mode': 'edit',
        'autoZoom' : True,
        'layers': [{
            'type': 'geojson',
            'name': 'Producer',
            'url': 'producers/{{id}}/edit.geojson',
            'popup': 'producer',
            'geometryField': 'geometry',
            'flatten': True,
            'icon' : 'green',
        }],
    }],
)
