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
            'name': '<span style="padding-right: 5px;">Kindergartens</span><img style="height: 20px;" src="images/kindergarten.png">',
            'url': 'kindergartens.geojson',
            'popup': 'kindergarten',
            'cluster' : True,
            'icon': 'kindergarten',
        }],
    }, {
        'mode': 'detail',
        'autoZoom' : True,
        'layers': [{
            'type': 'geojson',
            'name': '<span style="padding-right: 5px;">Kindergarten</span><img style="height: 20px;" src="images/kindergarten.png">',
            'url': 'kindergartens/{{id}}.geojson',
            'popup': 'kindergarten',
            'flatten': True,
            'icon': 'kindergarten',
        }],
    }, {
        'mode': 'edit',
        'autoZoom' : True,
        'layers': [{
            'type': 'geojson',
            'name': '<span style="padding-right: 5px;">Kindergarten</span><img style="height: 20px;" src="images/kindergarten.png">',
            'url': 'kindergartens/{{id}}/edit.geojson',
            'popup': 'kindergarten',
            'geometryField': 'geometry',
            'flatten': True,
            'icon': 'kindergarten',
        }],
    }],
)
