from django.db import models
import pystache


class Kindergartendish(models.Model):
    kindergarten = models.ForeignKey(
        "kindergarten.Kindergarten",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        default="",
        verbose_name="Kindergarten",
        related_name='kindergartendish_kindergarten',
    )
    date = models.DateField(
        null=False,
        blank=False,
        verbose_name="Choose the particular date",
    )
    name = models.TextField(
        null=False,
        blank=False,
        verbose_name="Enter the name of the dish",
    )
    type = models.CharField(
        choices=(
            ("breakfast_en", "Breakfast"),
            ("lunch_en", "Lunch"),
            ("afternoon_tea_en", "Afternoon tea"),
            ("breakfast_pl", "Śniadanie"),
            ("lunch_pl", "Obiad"),
            ("afternoon_tea_pl", "Podwieczorek"),
        ),
        max_length=16,
        null=True,
        blank=True,
        verbose_name="Type of meal",
    )
    calories = models.FloatField(
        null=True,
        blank=True,
        verbose_name="Calories per portion",
    )
    allergens = models.TextField(
        null=True,
        blank=True,
        verbose_name="Allergens in the dish",
    )
    waste = models.CharField(
        choices=(
            ("less5_en", "Less than 5 %"),
            ("5to10_en", "From 5 % to 10 %"),
            ("11to25_en", "From 11 % to 25 %"),
            ("more25_en", "More than 25 %"),
            ("less5_pl", "mniej niż 5 %"),
            ("5to10_pl", "od 5 % do 10 %"),
            ("11to25_pl", "od 11 % do 25 %"),
            ("more25_pl", "więcej niż 25 %"),
        ),
        max_length=9,
        null=True,
        blank=True,
        verbose_name="What percentage of food becomes waste during food preparation?",
    )
    picture = models.ImageField(
        upload_to="kindergartendishs",
        null=True,
        blank=True,
        verbose_name="Picture of the dish",
    )

    wq_label_template = "{{name}}"

    def __str__(self):
        return pystache.render(self.wq_label_template, self)

    class Meta:
        verbose_name = "kindergartendish"
        verbose_name_plural = "kindergartendishs"


class Composition(models.Model):
    kindergartendish = models.ForeignKey(
        Kindergartendish,
        on_delete=models.CASCADE,
        related_name="compositions",
    )
    ingredient = models.ForeignKey(
        "ingredient.Ingredient",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        verbose_name="Choose an ingredient from the list",
        related_name='kindergartendish_ingredient',
    )
    weight_grams = models.FloatField(
        null=True,
        blank=True,
        verbose_name="Enter the weight of the ingredient (grams)",
    )
    from_producer = models.CharField(
        choices=(
            ("local", "Produkt lokalny (ze Słupska lub okolic w granicach 100 km)"),
            ("regional", "Produkt regionalny (z województwa pomorskiego)"),
            ("national", "Produkt krajowy"),
            ("inside_europe", "Produkt z Europy"),
            ("outside_europe", "Produkt spoza Europy"),
            ("uncertain", "Nie wiem"),
        ),
        max_length=14,
        null=True,
        blank=True,
        verbose_name="Was the ingredient bought directly from the producer?",
    )

    class Meta:
        verbose_name = "composition"
        verbose_name_plural = "compositions"
