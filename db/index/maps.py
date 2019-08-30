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
        'name': 'Institutions',
        'type': 'geojson',
        'url': 'institutions.geojson',
        'popup': 'institution'
    },
    {
        'name': 'Producers',
        'type': 'geojson',
        'url': 'producers.geojson',
        'popup': 'producer'
    }]
}]
