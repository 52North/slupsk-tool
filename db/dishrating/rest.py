from wq.db import rest
from .models import Dishrating
from .views import DishratingViewSet


rest.router.register_model(
    Dishrating,
    viewset=DishratingViewSet,
    fields="__all__",
    cache="all",
)
