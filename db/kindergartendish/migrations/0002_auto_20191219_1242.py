# Generated by Django 2.2.3 on 2019-12-19 12:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('kindergartendish', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='composition',
            name='ingredient',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='kindergartendish_ingredient', to='ingredient.Ingredient', verbose_name='Choose an ingredient from the list'),
        ),
        migrations.AlterField(
            model_name='kindergartendish',
            name='kindergarten',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='kindergartendish_kindergarten', to='kindergarten.Kindergarten', verbose_name='Kindergarten'),
        ),
    ]