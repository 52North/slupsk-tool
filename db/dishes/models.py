from django.contrib.gis.db import models


class Dishes(models.Model):
    dish_name = models.TextField(
        verbose_name="Name of dish",
    )
    toggle = models.CharField(
        choices=(
            ("gps", "Use GPS"),
            ("interactive", "Point on Map"),
            ("manual", "Enter Manually"),
        ),
        max_length=11,
        verbose_name="Location Mode",
    )
    geometry = models.PointField(
        srid=4326,
        verbose_name="Location",
    )
    latitude = models.FloatField(
        verbose_name="Latitude",
    )
    longitude = models.FloatField(
        verbose_name="Longitude",
    )
    accuracy = models.FloatField(
        verbose_name="GPS Accuracy",
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
            ("chicken_meat", "Chicken meat"),
        ),
        max_length=12,
        verbose_name="Ingredient",
    )
    quantity = models.FloatField(
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
