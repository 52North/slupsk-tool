from wq.db import rest
from .models import Kindergartendish
from .serializers import KindergartendishSerializer


rest.router.register_model(
    Kindergartendish,
    serializer=KindergartendishSerializer,
    fields="__all__",
)
