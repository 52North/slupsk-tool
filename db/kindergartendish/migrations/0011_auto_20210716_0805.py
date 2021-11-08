# Generated by Django 2.2.3 on 2021-07-16 08:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kindergartendish', '0010_auto_20210709_1001'),
    ]

    operations = [
        migrations.AlterField(
            model_name='composition',
            name='from_producer',
            field=models.CharField(blank=True, choices=[('local', 'Produkt lokalny (ze Słupska lub okolic w granicach 100 km)'), ('regional', 'Produkt regionalny (z województwa pomorskiego)'), ('national', 'Produkt krajowy'), ('inside_europe', 'Produkt z Europy'), ('outside_europe', 'Produkt spoza Europy'), ('uncertain', 'Nie wiem')], max_length=14, null=True, verbose_name='Was the ingredient bought directly from the producer?'),
        ),
    ]