from django.db import models
import pystache
from datetime import datetime


class Feedback(models.Model):
    rank_info_menu = models.IntegerField(
        null=True,
        blank=True,
        verbose_name="Menu in Slupsk kindergartens",
    )
    rank_info_product = models.IntegerField(
        null=True,
        blank=True,
        verbose_name="Information on individual products used preparing of meals in kindergartens",
    )
    rank_info_producer = models.IntegerField(
        null=True,
        blank=True,
        verbose_name="Information on local food producers/sellers",
    )
    rank_info_place_of_origin = models.IntegerField(
        null=True,
        blank=True,
        verbose_name="Information on the place of origin of the products from which meals in kindergartens are prepared",
    )
    rank_info_meal_rating = models.IntegerField(
        null=True,
        blank=True,
        verbose_name="Evaluations of meals in kindergartens made by other users",
    )
    rank_info_private_dish = models.IntegerField(
        null=True,
        blank=True,
        verbose_name="Information about meals prepared by other users",
    )
    rank_feature_see_menu = models.IntegerField(
        null=True,
        blank=True,
        verbose_name="Access to menu information in kindergartens",
    )
    rank_feature_see_producer = models.IntegerField(
        null=True,
        blank=True,
        verbose_name="Access to information on local food producers/sellers",
    )
    rank_feature_see_product = models.IntegerField(
        null=True,
        blank=True,
        verbose_name="Access to information on products used for preparing meals in kindergartens",
    )
    rank_feature_add_rating = models.IntegerField(
        null=True,
        blank=True,
        verbose_name="Possibility to evaluate meals prepared in kindergartens",
    )
    rank_feature_add_private_dish = models.IntegerField(
        null=True,
        blank=True,
        verbose_name="Possibility to add your own dish",
    )
    rank_feature_add_producer = models.IntegerField(
        null=True,
        blank=True,
        verbose_name="Possibility to add a local food producer/seller",
    )
    rank_feature_see_rating = models.IntegerField(
        null=True,
        blank=True,
        verbose_name="Possibility to see the evaluations of meals prepared in kindergartens by other users",
    )
    rank_feature_add_comment = models.IntegerField(
        null=True,
        blank=True,
        verbose_name="Leave a comment (open question)",
    )
    usability = models.CharField(
        choices=(
            ("strong_agree_en", "I strongly agree"),
            ("rather_agree_en", "I&#x27;d rather agree"),
            ("undecided_en", "Neither disagree nor agree"),
            ("rather_disagree_en", "I&#x27;d rather disagree"),
            ("strong_disagree_en", "I strongly disagree"),
            ("strong_agree_pl", "Zdecydowanie się zgadzam"),
            ("rather_agree_pl", "Raczej się zgadzam"),
            ("undecided_pl", "Nie mam zdania"),
            ("rather_disagree_pl", "Raczej się nie zgadzam"),
            ("strong_disagree_pl", "Zdecydowanie się nie zgadzam"),
        ),
        max_length=18,
        null=True,
        blank=True,
        verbose_name="The application is easy to use",
    )
    attractiveness = models.CharField(
        choices=(
            ("strong_agree_en", "I strongly agree"),
            ("rather_agree_en", "I&#x27;d rather agree"),
            ("undecided_en", "Neither disagree nor agree"),
            ("rather_disagree_en", "I&#x27;d rather disagree"),
            ("strong_disagree_en", "I strongly disagree"),
            ("strong_agree_pl", "Zdecydowanie się zgadzam"),
            ("rather_agree_pl", "Raczej się zgadzam"),
            ("undecided_pl", "Nie mam zdania"),
            ("rather_disagree_pl", "Raczej się nie zgadzam"),
            ("strong_disagree_pl", "Zdecydowanie się nie zgadzam"),
        ),
        max_length=18,
        null=True,
        blank=True,
        verbose_name="The application is visually (graphically) attractive",
    )
    maps = models.CharField(
        choices=(
            ("strong_agree_en", "I strongly agree"),
            ("rather_agree_en", "I&#x27;d rather agree"),
            ("undecided_en", "Neither disagree nor agree"),
            ("rather_disagree_en", "I&#x27;d rather disagree"),
            ("strong_disagree_en", "I strongly disagree"),
            ("strong_agree_pl", "Zdecydowanie się zgadzam"),
            ("rather_agree_pl", "Raczej się zgadzam"),
            ("undecided_pl", "Nie mam zdania"),
            ("rather_disagree_pl", "Raczej się nie zgadzam"),
            ("strong_disagree_pl", "Zdecydowanie się nie zgadzam"),
        ),
        max_length=18,
        null=True,
        blank=True,
        verbose_name="Maps help to use the application",
    )
    clarity = models.CharField(
        choices=(
            ("strong_agree_en", "I strongly agree"),
            ("rather_agree_en", "I&#x27;d rather agree"),
            ("undecided_en", "Neither disagree nor agree"),
            ("rather_disagree_en", "I&#x27;d rather disagree"),
            ("strong_disagree_en", "I strongly disagree"),
            ("strong_agree_pl", "Zdecydowanie się zgadzam"),
            ("rather_agree_pl", "Raczej się zgadzam"),
            ("undecided_pl", "Nie mam zdania"),
            ("rather_disagree_pl", "Raczej się nie zgadzam"),
            ("strong_disagree_pl", "Zdecydowanie się nie zgadzam"),
        ),
        max_length=18,
        null=True,
        blank=True,
        verbose_name="Instruction on how to use the application is easy to understand",
    )
    usefulness = models.CharField(
        choices=(
            ("definitely_yes_en", "Definitely yes"),
            ("rather_yes_en", "Rather yes"),
            ("no_opinion_en", "I have no opinion"),
            ("rather_not_en", "Rather not"),
            ("definitely_not_en", "Definitely not"),
            ("definitely_yes_pl", "Zdecydowanie tak"),
            ("rather_yes_pl", "Raczej tak"),
            ("no_opinion_pl", "Nie mam zdania"),
            ("rather_not_pl", "Raczej nie"),
            ("definitely_not_pl", "Zdecydowanie nie"),
        ),
        max_length=17,
        null=True,
        blank=True,
        verbose_name="Do you think that the data collected through the application can be useful for arranging the menu in kindergartens?",
    )
    comment = models.TextField(
        null=True,
        blank=True,
        verbose_name="What other functions should the application have?",
    )

    wq_label_template = "Feedback from / komentarz od " + datetime.today().strftime('%Y-%m-%d')

    def __str__(self):
        return pystache.render(self.wq_label_template, self)

    class Meta:
        verbose_name = "feedback"
        verbose_name_plural = "feedbacks"
