# Generated by Django 2.2.3 on 2020-12-02 10:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('privatedish', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='privatedish',
            name='from_producer',
            field=models.CharField(blank=True, choices=[('yes_en', 'Yes'), ('no_en', 'No'), ('yes_pl', 'Tak'), ('no_pl', 'Nie')], max_length=3, null=True, verbose_name='Did you buy at least one ingredient from a local producer?'),
        ),
    ]
