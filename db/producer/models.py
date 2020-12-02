from django.contrib.gis.db import models
import pystache


class Producer(models.Model):
    name = models.TextField(
        null=False,
        blank=False,
        verbose_name="Name",
    )
    short_description = models.TextField(
        null=True,
        blank=True,
        verbose_name="Short description",
    )
    product = models.TextField(
        null=True,
        blank=True,
        verbose_name="Main product(s)",
    )
    kindergarten_supplier = models.CharField(
        choices=(
            ("yes_en", "Yes"),
            ("no_en", "No"),
            ("yes_pl", "Tak"),
            ("no_pl", "Nie"),
        ),
        max_length=3,
        null=True,
        blank=True,
        verbose_name="Do kindergartens use products from here?",
    )
    address = models.TextField(
        null=False,
        blank=False,
        verbose_name="Address",
    )
    phone = models.TextField(
        null=True,
        blank=True,
        verbose_name="Telephone",
    )
    email = models.TextField(
        null=True,
        blank=True,
        verbose_name="E-mail",
    )
    website = models.TextField(
        null=True,
        blank=True,
        verbose_name="Website",
    )
    toggle = models.CharField(
        choices=(
            ("gps", "Użyj GPS / Use GPS"),
            ("interactive", "Wybierz punkt na mapie / Point on Map"),
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
