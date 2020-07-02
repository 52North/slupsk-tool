# Generated by Django 2.2.3 on 2020-06-22 13:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kindergartendish', '0004_kindergartendish_picture'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='composition',
            name='quantity_pieces',
        ),
        migrations.RemoveField(
            model_name='composition',
            name='waste',
        ),
        migrations.RemoveField(
            model_name='kindergartendish',
            name='cooking_time',
        ),
        migrations.RemoveField(
            model_name='kindergartendish',
            name='ingredient_list',
        ),
        migrations.RemoveField(
            model_name='kindergartendish',
            name='water_quantity',
        ),
        migrations.AddField(
            model_name='kindergartendish',
            name='type',
            field=models.CharField(blank=True, choices=[('breakfast', 'Breakfast'), ('lunch', 'Lunch'), ('afternoon_tea', 'Afternoon tea')], max_length=13, null=True, verbose_name='Type of meal'),
        ),
        migrations.AddField(
            model_name='kindergartendish',
            name='waste',
            field=models.CharField(blank=True, choices=[('less25', 'Less than 25 %'), ('25to75', 'From 25 % to 75 %'), ('more75', 'More than 75 %')], max_length=6, null=True, verbose_name='Food waste – how much of the dish you have to dump into the garbage?'),
        ),
        migrations.AlterField(
            model_name='composition',
            name='calories',
            field=models.FloatField(blank=True, null=True, verbose_name='Enter the number of calories of the ingredient'),
        ),
    ]