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
            'name': '<span style="padding-right: 5px";>Sklepy</span><img style="height: 20px;" src="images/shop.png">',
            'url': 'shops.geojson',
            'popup': 'shop',
            'icon' : 'shop',
        }],
    }, {
        'mode': 'detail',
        'autoZoom' : True,
        'layers': [{
            'type': 'geojson',
            'name': '<span style="padding-right: 5px";>Sklep</span><img style="height: 20px;" src="images/shop.png">',
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
            'name': '<span style="padding-right: 5px";>Sklep</span><img style="height: 20px;" src="images/shop.png">',
            'url': 'shops/{{id}}/edit.geojson',
            'popup': 'shop',
            'geometryField': 'geometry',
            'flatten': True,
            'icon' : 'shop',
        }],
    }],
)
