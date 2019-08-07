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
    'layers': [{
        'name': 'Locations',
        'type': 'geojson',
        'url': 'locations.geojson',
        'popup': 'location'
    }]
}]
