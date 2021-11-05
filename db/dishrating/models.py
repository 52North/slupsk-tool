from django.db import models
import pystache


class Dishrating(models.Model):
    kindergarten = models.ForeignKey(
        "kindergarten.Kindergarten",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        verbose_name="Kindergarten",
    )
    date = models.DateField(
        null=True,
        blank=True,
        verbose_name="Date",
        help_text="Please select the date of the dish that you wish to comment on.",
    )
    dish = models.ForeignKey(
        "kindergartendish.KindergartenDish",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        verbose_name="Choose a dish",
    )
    children_satisfaction = models.CharField(
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
        verbose_name="Did your child like the dish?",
        help_text="(1 = „it was awful&quot;, 5 = „it was delicious&quot;)",
    )
    parent_satisfaction = models.CharField(
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
        verbose_name="Do you think it is proper for a kid?",
        help_text="(1 = „it is not&quot;, 5 = „it is&quot;)",
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
    comment = models.TextField(
        null=True,
        blank=True,
        verbose_name="Do you have any further comments?",
    )

    wq_label_template = "{{dish}}"

    def __str__(self):
        return pystache.render(self.wq_label_template, self)

    class Meta:
        verbose_name = "dishrating"
        verbose_name_plural = "dishratings"
