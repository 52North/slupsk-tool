from wq.db import rest
from .models import Privatedish
from .serializers import PrivatedishSerializer


rest.router.register_model(
    Privatedish,
    serializer=PrivatedishSerializer,
    fields="__all__",
    cache="all",
)
