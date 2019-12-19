from django.db import models
import pystache

class Dish(models.Model):
    name = models.TextField(
        verbose_name="Name of dish",
    )
    type = models.CharField(
        choices=(
            ("institutional", "Institutional"),
            ("private", "Private"),
        ),
        max_length=13,
        null=True,
        blank=True,
        verbose_name="Type of dish",
    )
    kindergarten = models.ForeignKey(
        "kindergarten.Kindergarten",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        verbose_name="Kindergarten",
        related_name='dish_kindergarten',
    )

    wq_label_template = "{{name}}"

    def __str__(self):
        return pystache.render(self.wq_label_template, self)

    class Meta:
        verbose_name = "dish"
        verbose_name_plural = "dishes"


class Composition(models.Model):
    dish = models.ForeignKey(
        Dish,
        on_delete=models.CASCADE,
        related_name="compositions",
    )
    ingredient = models.ForeignKey(
        "ingredient.Ingredient",
        on_delete=models.CASCADE,
        verbose_name="Ingredient",
        related_name='dish_ingredient',
    )
    quantity_gram = models.FloatField(
        null=True,
        blank=True,
        verbose_name="Quantity (in grams)",
    )
    origin = models.CharField(
        choices=(
            ("local", "Local"),
            ("regional", "Regional"),
            ("global", "Global"),
        ),
        max_length=8,
        null=True,
        blank=True,
        verbose_name="Place of origin",
    )
    shop = models.ForeignKey(
        "shop.Shop",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        verbose_name="Shop",
    )

    class Meta:
        verbose_name = "composition"
        verbose_name_plural = "compositions"


class Photo(models.Model):
    dish = models.ForeignKey(
        Dish,
        on_delete=models.CASCADE,
        related_name="photos",
    )
    photo = models.ImageField(
        upload_to="dishes",
        null=True,
        blank=True,
        verbose_name="Photo",
    )

    def __label__(self):
        return self.photo and self.photo.name

    class Meta:
        verbose_name = "photo"
        verbose_name_plural = "photos"
