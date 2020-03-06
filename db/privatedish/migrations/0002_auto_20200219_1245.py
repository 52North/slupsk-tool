# Generated by Django 2.2.3 on 2020-02-19 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('privatedish', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='privatedish',
            name='cooking_time',
            field=models.IntegerField(blank=True, null=True, verbose_name='Enter the cooking time (minutes)'),
        ),
        migrations.AddField(
            model_name='privatedish',
            name='water_quantity',
            field=models.IntegerField(blank=True, null=True, verbose_name='Enter the quantity of water used (litres)'),
        ),
    ]