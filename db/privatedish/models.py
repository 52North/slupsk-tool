from django.contrib.gis.db import models
import pystache


class Privatedish(models.Model):
    name = models.TextField(
        null=False,
        blank=False,
        verbose_name="Enter the name of the dish",
    )
    picture = models.ImageField(
        upload_to="privatedishs",
        null=True,
        blank=True,
        verbose_name="Picture of the dish",
    )
    from_producer = models.CharField(
        choices=(
            ("yes_en", "Yes"),
            ("no_en", "No"),
            ("yes_pl", "Tak"),
            ("no_pl", "Nie"),
        ),
        max_length=6,
        null=True,
        blank=True,
        verbose_name="Did you buy at least one ingredient from a local producer?",
    )

    wq_label_template = "{{name}}"

    def __str__(self):
        return pystache.render(self.wq_label_template, self)

    class Meta:
        verbose_name = "privatedish"
        verbose_name_plural = "privatedishs"

class Localproducer(models.Model):
    privatedish = models.ForeignKey(
        Privatedish,
        on_delete=models.CASCADE,
        related_name="localproducers",
    )
    producer = models.ForeignKey(
        "producer.Producer",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        verbose_name="From which local producer did you buy an ingredient?",
        related_name='privatedish_producer',
    )

    class Meta:
        verbose_name = "localproducer"
        verbose_name_plural = "localproducers"
