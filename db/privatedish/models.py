from django.contrib.gis.db import models
import pystache


class Privatedish(models.Model):
    name = models.TextField(
        null=True,
        blank=True,
        verbose_name="Enter the name of the dish",
    )
    ingredient_list = models.TextField(
        null=True,
        blank=True,
        verbose_name="Ingredients",
        help_text="Please enter the name of the ingredients separated by a comma.",
    )
    distance_calculator = models.LineStringField(
        srid=4326,
        null=True,
        blank=True,
        verbose_name="Use the line tool in the map to estimate the distance.",
    )

    wq_label_template = "{{name}}"

    def __str__(self):
        return pystache.render(self.wq_label_template, self)

    class Meta:
        verbose_name = "privatedish"
        verbose_name_plural = "privatedishs"


class Composition(models.Model):
    privatedish = models.ForeignKey(
        Privatedish,
        on_delete=models.CASCADE,
        related_name="compositions",
    )
    ingredient = models.ForeignKey(
        "ingredient.Ingredient",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        verbose_name="Ingredient",
        related_name='privatedish_ingredient',
    )
    shop = models.ForeignKey(
        "shop.Shop",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        verbose_name="Where was it bought?",
        related_name='privatedish_shop',
    )
    origin = models.CharField(
        choices=(
            ("local", "Local"),
            ("non_local", "Non-local"),
        ),
        max_length=9,
        null=True,
        blank=True,
        verbose_name="Enter the place of origin",
    )
    production_mode = models.CharField(
        choices=(
            ("organic_certificate", "Organic with certificate"),
            ("organic_no_certificate", "Organic without certificate"),
            ("traditional", "Traditional"),
            ("industrial", "Industrial"),
        ),
        max_length=22,
        null=True,
        blank=True,
        verbose_name="Enter the mode of production",
    )
    price = models.FloatField(
        null=True,
        blank=True,
        verbose_name="Enter the price",
    )
    from_producer = models.CharField(
        choices=(
            ("yes", "Yes"),
            ("no", "No"),
        ),
        max_length=3,
        null=True,
        blank=True,
        verbose_name="Was the ingredient bought directly from the producer?",
    )
    distance = models.FloatField(
        null=True,
        blank=True,
        verbose_name="Enter the distance (km) from the shop to your house if bought in a shop. If bought directly from the producer, enter the distance (km) from the producer to your house.",
        help_text="You can use the line tool in the map below to estimate the distance.",
    )
    satisfaction = models.CharField(
        choices=(
            ("one", "1"),
            ("two", "2"),
            ("three", "3"),
            ("four", "4"),
            ("five", "5"),
        ),
        max_length=5,
        null=True,
        blank=True,
        verbose_name="Did you like it?",
        help_text="(1 = „it was awful&quot;, 5 = „it was delicious&quot;)",
    )
    health = models.CharField(
        choices=(
            ("one", "1"),
            ("two", "2"),
            ("three", "3"),
            ("four", "4"),
            ("five", "5"),
        ),
        max_length=5,
        null=True,
        blank=True,
        verbose_name="Do you think it is healthy?",
        help_text="(1 = „it is very bad for my health&quot;, 5 = „it is very healthy&quot;)",
    )
    quality = models.CharField(
        choices=(
            ("one", "1"),
            ("two", "2"),
            ("three", "3"),
            ("four", "4"),
            ("five", "5"),
        ),
        max_length=5,
        null=True,
        blank=True,
        verbose_name="Do you think it is a high quality product?",
        help_text="(1 = „bad quality&quot;, 5 = „high quality&quot;)",
    )

    class Meta:
        verbose_name = "composition"
        verbose_name_plural = "compositions"
