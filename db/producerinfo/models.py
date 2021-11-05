from django.contrib.gis.db import models
import pystache


class Producerinfo(models.Model):
    producer = models.ForeignKey(
        "producer.Producer",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        verbose_name="Producer",
    )
    distance_calculator = models.LineStringField(
        srid=4326,
        null=True,
        blank=True,
        verbose_name="Use the map to check the location of producers and to estimate the distance to a shop (see question below).",
    )

    wq_label_template = "{{producer}}"

    def __str__(self):
        return pystache.render(self.wq_label_template, self)

    class Meta:
        verbose_name = "producerinfo"
        verbose_name_plural = "producerinfos"


class Delivery(models.Model):
    producerinfo = models.ForeignKey(
        Producerinfo,
        on_delete=models.CASCADE,
        related_name="deliverys",
    )
    product = models.ForeignKey(
        "ingredient.Ingredient",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        verbose_name="Product delivered",
    )
    shop = models.ForeignKey(
        "shop.Shop",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        verbose_name="Shop delivered",
    )
    quantity = models.FloatField(
        null=True,
        blank=True,
        verbose_name="Quantity (kg)",
    )
    frequency = models.TextField(
        null=True,
        blank=True,
        verbose_name="Frequency",
        help_text="If you deliver this product regularly, please insert the delivery frequency, e.g. once per week.",
    )
    price = models.FloatField(
        null=True,
        blank=True,
        verbose_name="Price per item/kg (PLN)",
    )
    production_mode = models.CharField(
        choices=(
            ("organic_certificate", "Organiczna z certyfikatem"),
            ("organic_no_certificate", "Organiczna bez certyfikatu"),
            ("traditional", "Tradycyjna"),
            ("industrial", "Przemysłowa"),
        ),
        max_length=22,
        null=True,
        blank=True,
        verbose_name="Mode of production",
    )
    distance_to_shop = models.FloatField(
        null=True,
        blank=True,
        verbose_name="Distance to shop (km)",
        help_text="To calculate the distance you can use the line tool in the map above.",
    )
    biodegradable_product = models.CharField(
        choices=(
            ("yes", "Tak"),
            ("no", "Nie"),
            ("uncertain", "Nie wiem"),
        ),
        max_length=9,
        null=True,
        blank=True,
        verbose_name="Was it biodegradable?",
    )
    recyclable_product_package = models.CharField(
        choices=(
            ("yes", "Tak"),
            ("no", "Nie"),
            ("uncertain", "Nie wiem"),
        ),
        max_length=9,
        null=True,
        blank=True,
        verbose_name="Was it in recycling packages?",
    )

    class Meta:
        verbose_name = "delivery"
        verbose_name_plural = "deliverys"
