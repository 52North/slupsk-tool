# Generated by Django 2.2.3 on 2019-12-18 08:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('kindergarten', '0002_auto_20190822_1210'),
        ('ingredient', '0002_auto_20191217_1637'),
    ]

    operations = [
        migrations.CreateModel(
            name='Kindergartendish',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(blank=False, null=False, verbose_name='Choose the particular date')),
                ('name', models.TextField(blank=False, null=False, verbose_name='Enter the name of the dish')),
                ('ingredient_list', models.TextField(blank=True, help_text='Please enter the name of the ingredients separated by a comma.', null=True, verbose_name='Ingredients')),
                ('kindergarten', models.ForeignKey(blank=False, null=False, default="", on_delete=django.db.models.deletion.CASCADE, to='kindergarten.Kindergarten', verbose_name='Kindergarten')),
            ],
            options={
                'verbose_name': 'kindergartendish',
                'verbose_name_plural': 'kindergartendishs',
            },
        ),
        migrations.CreateModel(
            name='Composition',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity_pieces', models.IntegerField(blank=True, null=True, verbose_name='Enter the quantity of the ingredient (pieces)')),
                ('weight_grams', models.FloatField(blank=True, null=True, verbose_name='Enter the weight of the ingredient (grams)')),
                ('calories', models.FloatField(blank=True, null=True, verbose_name='Enter the number of calories per ingredient in the dish (calories)')),
                ('from_producer', models.CharField(blank=True, choices=[('yes', 'Tak'), ('no', 'Nie'), ('uncertain', 'Nie wiem')], max_length=9, null=True, verbose_name='Was the ingredient bought directly from the producer?')),
                ('waste', models.CharField(blank=True, choices=[('less25', 'Less than 25 %'), ('25to75', 'From 25 % to 75 %'), ('more75', 'More than 75 %')], max_length=6, null=True, verbose_name='Food waste – how many of the dish you have to dump into the garbage?')),
                ('ingredient', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='ingredient.Ingredient', verbose_name='Choose an ingredient from the list')),
                ('kindergartendish', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='compositions', to='kindergartendish.Kindergartendish')),
            ],
            options={
                'verbose_name': 'composition',
                'verbose_name_plural': 'compositions',
            },
        ),
    ]
