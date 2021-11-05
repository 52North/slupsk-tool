from django.db import models
import pystache

class Ingredient(models.Model):
    name = models.TextField(
        verbose_name="Name of ingredient",
    )

    wq_label_template = "{{name}}"

    def __str__(self):
        return pystache.render(self.wq_label_template, self)

    class Meta:
        verbose_name = "ingredient"
        verbose_name_plural = "ingredients"
