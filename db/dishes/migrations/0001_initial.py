# Generated by Django 2.2.3 on 2019-08-08 14:04

import django.contrib.gis.db.models.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dishes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dish_name', models.TextField(verbose_name='Name of dish')),
                ('toggle', models.CharField(choices=[('gps', 'Use GPS'), ('interactive', 'Point on Map'), ('manual', 'Enter Manually')], max_length=11, verbose_name='Location Mode')),
                ('geometry', django.contrib.gis.db.models.fields.PointField(srid=4326, verbose_name='Location')),
                ('latitude', models.FloatField(verbose_name='Latitude')),
                ('longitude', models.FloatField(verbose_name='Longitude')),
                ('accuracy', models.FloatField(verbose_name='GPS Accuracy')),
            ],
            options={
                'verbose_name': 'dishes',
                'verbose_name_plural': 'dishes',
            },
        ),
        migrations.CreateModel(
            name='Photo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo', models.ImageField(upload_to='dishes', verbose_name='Photo')),
                ('dishes', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='photos', to='dishes.Dishes')),
            ],
            options={
                'verbose_name': 'photo',
                'verbose_name_plural': 'photos',
            },
        ),
        migrations.CreateModel(
            name='Ingredient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ingredient', models.CharField(choices=[('potatoes', 'Potatoes'), ('cucumber', 'Cucumber'), ('chicken_meat', 'Chicken meat')], max_length=12, verbose_name='Ingredient')),
                ('quantity', models.FloatField(verbose_name='Quantity (in gramms)')),
                ('origin', models.CharField(choices=[('local', 'Local'), ('non-local', 'Non-local')], max_length=9, verbose_name='Place of origin')),
                ('dishes', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ingredients', to='dishes.Dishes')),
            ],
            options={
                'verbose_name': 'ingredient',
                'verbose_name_plural': 'ingredients',
            },
        ),
    ]
