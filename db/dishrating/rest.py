from wq.db import rest
from .models import Dishrating


rest.router.register_model(
    Dishrating,
    fields="__all__",
)
