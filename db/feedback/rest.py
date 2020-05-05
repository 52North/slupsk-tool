from wq.db import rest
from .models import Feedback


rest.router.register_model(
    Feedback,
    fields="__all__",
)
