# Generated by Django 2.2.3 on 2020-06-22 09:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kindergartendish', '0003_auto_20200219_1242'),
    ]

    operations = [
        migrations.AddField(
            model_name='kindergartendish',
            name='picture',
            field=models.ImageField(blank=True, null=True, upload_to='kindergartendishs', verbose_name='Picture of the dish'),
        ),
    ]
