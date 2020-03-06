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
            'name': '<span style="padding-right: 5px;">Producers</span><img style="height: 20px;" src="images/producer.png">',
            'url': 'producers.geojson',
            'popup': 'producer',
            'icon' : 'producer',
        }],
    }, {
        'mode': 'detail',
        'autoZoom' : True,
        'layers': [{
            'type': 'geojson',
            'name': '<span style="padding-right: 5px;">Producer</span><img style="height: 20px;" src="images/producer.png">',
            'url': 'producers/{{id}}.geojson',
            'popup': 'producer',
            'flatten': True,
            'icon' : 'producer',
        }],
    }, {
        'mode': 'edit',
        'autoZoom' : True,
        'layers': [{
            'type': 'geojson',
            'name': '<span style="padding-right: 5px;">Producer</span><img style="height: 20px;" src="images/producer.png">',
            'url': 'producers/{{id}}/edit.geojson',
            'popup': 'producer',
            'geometryField': 'geometry',
            'flatten': True,
            'icon' : 'producer',
        }],
    }],
)
