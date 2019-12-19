from django.contrib.gis.db import models
import pystache


class Producer(models.Model):
    name = models.TextField(
        null=True,
        blank=True,
        verbose_name="Name",
    )
    adress = models.TextField(
        null=True,
        blank=True,
        verbose_name="Adress",
    )
    toggle = models.CharField(
        choices=(
            ("gps", "Use GPS"),
            ("interactive", "Point on Map"),
            ("manual", "Enter Manually"),
        ),
        max_length=11,
        null=True,
        blank=True,
        verbose_name="Location Mode",
    )
    geometry = models.PointField(
        srid=4326,
        null=True,
        blank=True,
        verbose_name="Location",
    )
    latitude = models.FloatField(
        null=True,
        blank=True,
        verbose_name="Latitude",
    )
    longitude = models.FloatField(
        null=True,
        blank=True,
        verbose_name="Longitude",
    )
    accuracy = models.FloatField(
        null=True,
        blank=True,
        verbose_name="GPS Accuracy",
    )

    wq_label_template = "{{name}}"

    def __str__(self):
        return pystache.render(self.wq_label_template, self)

    class Meta:
        verbose_name = "producer"
        verbose_name_plural = "producers"


class Delivery(models.Model):
    producer = models.ForeignKey(
        Producer,
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
            ("organic_certificate", "Organic with certificate"),
            ("organic_no_certificate", "Organic without certificate"),
            ("traditional", "Traditional"),
            ("industrial", "Industrial"),
        ),
        max_length=22,
        null=True,
        blank=True,
        verbose_name="Mode of production",
    )
    distance_to_shop = models.FloatField(
        null=True,
        blank=True,
        verbose_name="Distance to shop",
        help_text="To calculate the distance you can use the line tool in the map above.",
    )
    biodegradable_product = models.CharField(
        choices=(
            ("yes", "Yes"),
            ("no", "No"),
            ("uncertain", "Don&#x27;t know"),
        ),
        max_length=9,
        null=True,
        blank=True,
        verbose_name="Was it biodegradable?",
    )
    recyclable_product_package = models.CharField(
        choices=(
            ("yes", "Yes"),
            ("no", "No"),
            ("uncertain", "Don&#x27;t know"),
        ),
        max_length=9,
        null=True,
        blank=True,
        verbose_name="Was it in recycling packages?",
    )

    class Meta:
        verbose_name = "delivery"
        verbose_name_plural = "deliverys"
