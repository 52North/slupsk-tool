from wq.db import rest
from .models import Institution


rest.router.register_model(
    Institution,
    fields="__all__",
    locate=True,
    map=[{
        'mode': 'list',
        'autoZoom' : False,
        'layers': [{
            'type': 'geojson',
            'name': 'Institutions',
            'url': 'institutions.geojson',
            'popup': 'institution',
            'cluster' : True
        }],
    }, {
        'mode': 'detail',
        'autoZoom' : True,
        'layers': [{
            'type': 'geojson',
            'name': 'Institution',
            'url': 'institutions/{{id}}.geojson',
            'popup': 'institution',
            'flatten': True,
        }],
    }, {
        'mode': 'edit',
        'autoZoom' : True,
        'layers': [{
            'type': 'geojson',
            'name': 'Institution',
            'url': 'institutions/{{id}}/edit.geojson',
            'popup': 'institution',
            'geometryField': 'geometry',
            'flatten': True,
        }],
    }],
)
