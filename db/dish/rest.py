from wq.db import rest
from .models import Dish
from .serializers import DishSerializer


rest.router.register_model(
    Dish,
    serializer=DishSerializer,
    fields="__all__",
)
