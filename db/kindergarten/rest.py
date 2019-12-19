from wq.db import rest
from .models import Kindergarten


rest.router.register_model(
    Kindergarten,
    fields="__all__",
    locate=True,
    map=[{
        'mode': 'list',
        'autoZoom' : False,
        'layers': [{
            'type': 'geojson',
            'name': 'Kindergartens',
            'url': 'kindergartens.geojson',
            'popup': 'kindergarten',
            'cluster' : True
        }],
    }, {
        'mode': 'detail',
        'autoZoom' : True,
        'layers': [{
            'type': 'geojson',
            'name': 'Kindergarten',
            'url': 'kindergartens/{{id}}.geojson',
            'popup': 'kindergarten',
            'flatten': True,
        }],
    }, {
        'mode': 'edit',
        'autoZoom' : True,
        'layers': [{
            'type': 'geojson',
            'name': 'Kindergarten',
            'url': 'kindergartens/{{id}}/edit.geojson',
            'popup': 'kindergarten',
            'geometryField': 'geometry',
            'flatten': True,
        }],
    }],
)
