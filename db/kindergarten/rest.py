from wq.db import rest
from .models import Kindergarten


def filter(qs, request):

    # Define participating kindergartens
    kindergartens = ['Przedszkole Miejskie nr 12 Niezapominajka', 'Przedszkole Miejskie nr 24 Słupski Niedźwiadek Szczęścia']
    # Filter queryset
    qs_filtered = Kindergarten.objects.filter(name__in=kindergartens)
    return qs_filtered

rest.router.register_model(
    Kindergarten,
    fields="__all__",
    filter=filter,
    locate=True,
    map=[{
        'mode': 'list',
        'autoZoom' : False,
        'layers': [{
            'type': 'geojson',
            'name': '<span style="padding-right: 5px;">Przedszkola</span><img style="height: 20px;" src="images/kindergarten.png">',
            'url': 'kindergartens.geojson',
            'popup': 'kindergarten',
            'icon': 'kindergarten',
        }],
    }, {
        'mode': 'detail',
        'autoZoom' : True,
        'layers': [{
            'type': 'geojson',
            'name': '<span style="padding-right: 5px;">Przedszkole</span><img style="height: 20px;" src="images/kindergarten.png">',
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
            'name': '<span style="padding-right: 5px;">Przedszkole</span><img style="height: 20px;" src="images/kindergarten.png">',
            'url': 'kindergartens/{{id}}/edit.geojson',
            'popup': 'kindergarten',
            'geometryField': 'geometry',
            'flatten': True,
            'icon': 'kindergarten',
        }],
    }],
)
