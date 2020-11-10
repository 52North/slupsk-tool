# Generated by Django 2.2.3 on 2020-11-10 13:46

from django.db import migrations

def updateData(apps, schema_editor):
     Kindergarten = apps.get_model('kindergarten', 'Kindergarten')
     kindergarten = Kindergarten.objects.get(name="Przedszkole Miejskie nr 12 Niezapominajka")
     kindergarten.address = "Sławieńska 2, 76-200 Słupsk"
     kindergarten.save()

class Migration(migrations.Migration):

    dependencies = [
        ('kindergarten', '0003_auto_20201028_1447'),
    ]

    operations = [
        migrations.RunPython(updateData),
    ]