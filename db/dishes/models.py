from django.db import models


class Dishes(models.Model):
    dish_name = models.TextField(
        verbose_name="Name of dish",
    )

    class Meta:
        verbose_name = "dishes"
        verbose_name_plural = "dishes"


class Ingredient(models.Model):
    dishes = models.ForeignKey(
        Dishes,
        on_delete=models.CASCADE,
        related_name="ingredients",
    )
    ingredient = models.CharField(
        choices=(
            ("potatoes", "Potatoes"),
            ("cucumber", "Cucumber"),
            ("meat", "Meat"),
        ),
        max_length=8,
        verbose_name="Ingredient",
    )
    quantitty = models.FloatField(
        verbose_name="Quantity (in gramms)",
    )
    origin = models.CharField(
        choices=(
            ("local", "Local"),
            ("non-local", "Non-local"),
        ),
        max_length=9,
        verbose_name="Place of origin",
    )

    class Meta:
        verbose_name = "ingredient"
        verbose_name_plural = "ingredients"


class Photo(models.Model):
    dishes = models.ForeignKey(
        Dishes,
        on_delete=models.CASCADE,
        related_name="photos",
    )
    photo = models.ImageField(
        upload_to="dishes",
        verbose_name="Photo",
    )

    class Meta:
        verbose_name = "photo"
        verbose_name_plural = "photos"
