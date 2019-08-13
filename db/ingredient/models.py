from django.db import models


class Ingredient(models.Model):
    name = models.TextField(
        verbose_name="Name of ingredient",
    )

    class Meta:
        verbose_name = "ingredient"
        verbose_name_plural = "ingredients"
