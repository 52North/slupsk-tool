from wq.db import rest
from .models import Shop


rest.router.register_model(
    Shop,
    fields="__all__",
    locate=True,
    map=[{
        'mode': 'list',
        'autoZoom' : False,
        'layers': [{
            'type': 'geojson',
            'name': 'Shops',
            'url': 'shops.geojson',
            'popup': 'shop',
            'cluster' : True,
            'icon' : 'shop',
        }],
    }, {
        'mode': 'detail',
        'autoZoom' : True,
        'layers': [{
            'type': 'geojson',
            'name': 'Shop',
            'url': 'shops/{{id}}.geojson',
            'popup': 'shop',
            'flatten': True,
            'icon' : 'shop',
        }],
    }, {
        'mode': 'edit',
        'autoZoom' : True,
        'layers': [{
            'type': 'geojson',
            'name': 'Shop',
            'url': 'shops/{{id}}/edit.geojson',
            'popup': 'shop',
            'geometryField': 'geometry',
            'flatten': True,
            'icon' : 'shop',
        }],
    }],
)
