from wq.db import rest
from .models import Institution


rest.router.register_model(
    Institution,
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
            'url': 'institutions/{{id}}/edit.geojson',
            'geometryField': 'geometry',
            'flatten': True,
        }],
    }],
)
