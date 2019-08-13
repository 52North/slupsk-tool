from wq.db import rest
from .models import Ingredient


rest.router.register_model(
    Ingredient,
    fields="__all__",
)
