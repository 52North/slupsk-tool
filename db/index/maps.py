from django.conf import settings

basemaps = [
    {
        'name': "Stamen Terrain",
        'type': 'tile',
        'url': '//stamen-tiles-{s}.a.ssl.fastly.net/{layer}/{z}/{x}/{y}.jpg',
        'layer': 'terrain',
        'attribution': 'Map tiles by Stamen Design ...'
    }
];

index_map = [{
    'autoZoom' : False,
    'layers': [{
        'name': '<span style="padding-right: 5px;">Kindergartens</span><img style="height: 20px;" src="images/kindergarten.png">',
        'type': 'geojson',
        'url': 'kindergartens.geojson',
        'popup': 'kindergarten',
        'icon': 'kindergarten',
    },
    {
        'name': '<span style="padding-right: 5px";>Shops</span><img style="height: 20px;" src="images/shop.png">',
        'type': 'geojson',
        'url': 'shops.geojson',
        'popup': 'shop',
        'icon' : 'shop',
    },
    {
        'name': '<span style="padding-right: 5px;">Producers</span><img style="height: 20px;" src="images/producer.png">',
        'type': 'geojson',
        'url': 'producers.geojson',
        'popup': 'producer',
        'icon' : 'producer',
    }]
}]
