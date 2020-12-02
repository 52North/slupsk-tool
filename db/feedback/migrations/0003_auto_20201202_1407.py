# Generated by Django 2.2.3 on 2020-12-02 14:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feedback', '0002_auto_20201202_1034'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedback',
            name='attractiveness',
            field=models.CharField(blank=True, choices=[('strong_agree_en', 'I strongly agree'), ('rather_agree_en', 'I&#x27;d rather agree'), ('undecided_en', 'Neither disagree nor agree'), ('rather_disagree_en', 'I&#x27;d rather disagree'), ('strong_disagree_en', 'I strongly disagree'), ('strong_agree_pl', 'Zdecydowanie się zgadzam'), ('rather_agree_pl', 'Raczej się zgadzam'), ('undecided_pl', 'Nie mam zdania'), ('rather_disagree_pl', 'Raczej się nie zgadzam'), ('strong_disagree_pl', 'Zdecydowanie się nie zgadzam')], max_length=18, null=True, verbose_name='The application is visually (graphically) attractive'),
        ),
        migrations.AlterField(
            model_name='feedback',
            name='clarity',
            field=models.CharField(blank=True, choices=[('strong_agree_en', 'I strongly agree'), ('rather_agree_en', 'I&#x27;d rather agree'), ('undecided_en', 'Neither disagree nor agree'), ('rather_disagree_en', 'I&#x27;d rather disagree'), ('strong_disagree_en', 'I strongly disagree'), ('strong_agree_pl', 'Zdecydowanie się zgadzam'), ('rather_agree_pl', 'Raczej się zgadzam'), ('undecided_pl', 'Nie mam zdania'), ('rather_disagree_pl', 'Raczej się nie zgadzam'), ('strong_disagree_pl', 'Zdecydowanie się nie zgadzam')], max_length=18, null=True, verbose_name='Instruction on how to use the application is easy to understand'),
        ),
        migrations.AlterField(
            model_name='feedback',
            name='maps',
            field=models.CharField(blank=True, choices=[('strong_agree_en', 'I strongly agree'), ('rather_agree_en', 'I&#x27;d rather agree'), ('undecided_en', 'Neither disagree nor agree'), ('rather_disagree_en', 'I&#x27;d rather disagree'), ('strong_disagree_en', 'I strongly disagree'), ('strong_agree_pl', 'Zdecydowanie się zgadzam'), ('rather_agree_pl', 'Raczej się zgadzam'), ('undecided_pl', 'Nie mam zdania'), ('rather_disagree_pl', 'Raczej się nie zgadzam'), ('strong_disagree_pl', 'Zdecydowanie się nie zgadzam')], max_length=18, null=True, verbose_name='Maps help to use the application'),
        ),
        migrations.AlterField(
            model_name='feedback',
            name='usability',
            field=models.CharField(blank=True, choices=[('strong_agree_en', 'I strongly agree'), ('rather_agree_en', 'I&#x27;d rather agree'), ('undecided_en', 'Neither disagree nor agree'), ('rather_disagree_en', 'I&#x27;d rather disagree'), ('strong_disagree_en', 'I strongly disagree'), ('strong_agree_pl', 'Zdecydowanie się zgadzam'), ('rather_agree_pl', 'Raczej się zgadzam'), ('undecided_pl', 'Nie mam zdania'), ('rather_disagree_pl', 'Raczej się nie zgadzam'), ('strong_disagree_pl', 'Zdecydowanie się nie zgadzam')], max_length=18, null=True, verbose_name='The application is easy to use'),
        ),
        migrations.AlterField(
            model_name='feedback',
            name='usefulness',
            field=models.CharField(blank=True, choices=[('definitely_yes_en', 'Definitely yes'), ('rather_yes_en', 'Rather yes'), ('no_opinion_en', 'I have no opinion'), ('rather_not_en', 'Rather not'), ('definitely_not_en', 'Definitely not'), ('definitely_yes_pl', 'Zdecydowanie tak'), ('rather_yes_pl', 'Raczej tak'), ('no_opinion_pl', 'Nie mam zdania'), ('rather_not_pl', 'Raczej nie'), ('definitely_not_pl', 'Zdecydowanie nie')], max_length=17, null=True, verbose_name='Do you think that the data collected through the application can be useful for arranging the menu in kindergartens?'),
        ),
    ]