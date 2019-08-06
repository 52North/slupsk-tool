from wq.db import rest
from .models import Dishes
from .serializers import DishesSerializer


rest.router.register_model(
    Dishes,
    serializer=DishesSerializer,
    fields="__all__",
)
