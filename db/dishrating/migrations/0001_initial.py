# Generated by Django 2.2.3 on 2019-12-18 08:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('kindergartendish', '0001_initial'),
        ('kindergarten', '0002_auto_20190822_1210'),
    ]

    operations = [
        migrations.CreateModel(
            name='Dishrating',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(blank=True, help_text='Please select the date of the dish that you wish to comment on.', null=True, verbose_name='Date')),
                ('children_satisfaction', models.CharField(blank=True, choices=[('one', '1'), ('two', '2'), ('three', '3'), ('four', '4'), ('five', '5')], help_text='(1 = „it was awful&quot;, 5 = „it was delicious&quot;)', max_length=5, null=True, verbose_name='Did your child like the dish?')),
                ('parent_satisfaction', models.CharField(blank=True, choices=[('one', '1'), ('two', '2'), ('three', '3'), ('four', '4'), ('five', '5')], help_text='(1 = „it is not&quot;, 5 = „it is&quot;)', max_length=5, null=True, verbose_name='Do you think it is proper for a kid?')),
                ('health', models.CharField(blank=True, choices=[('one', '1'), ('two', '2'), ('three', '3'), ('four', '4'), ('five', '5')], help_text='(1 = „it is very bad for my health&quot;, 5 = „it is very healthy&quot;)', max_length=5, null=True, verbose_name='Do you think it is healthy?')),
                ('comment', models.TextField(blank=True, null=True, verbose_name='Do you have any further comments?')),
                ('dish', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='kindergartendish.Kindergartendish', verbose_name='Choose a dish')),
                ('kindergarten', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='kindergarten.Kindergarten', verbose_name='Kindergarten')),
            ],
            options={
                'verbose_name': 'dishrating',
                'verbose_name_plural': 'dishratings',
            },
        ),
    ]
