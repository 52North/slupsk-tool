# Generated by Django 2.2.3 on 2020-11-10 14:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kindergarten', '0004_auto_20201110_1346'),
    ]

    operations = [
        migrations.AddField(
            model_name='kindergarten',
            name='email',
            field=models.TextField(blank=True, null=True, verbose_name='E-mail'),
        ),
        migrations.AddField(
            model_name='kindergarten',
            name='facebook',
            field=models.TextField(blank=True, null=True, verbose_name='Facebook'),
        ),
        migrations.AddField(
            model_name='kindergarten',
            name='phone',
            field=models.TextField(blank=True, null=True, verbose_name='Telephone'),
        ),
        migrations.AddField(
            model_name='kindergarten',
            name='website',
            field=models.TextField(blank=True, null=True, verbose_name='Website'),
        ),
    ]
