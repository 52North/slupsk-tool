# Generated by Django 2.2.3 on 2020-11-10 14:06

from django.db import migrations

def updateData(apps, schema_editor):
     Kindergarten = apps.get_model('kindergarten', 'Kindergarten')

     kindergarten = Kindergarten.objects.get(name="Przedszkole Miejskie nr 12 Niezapominajka")
     kindergarten.phone = "513 787 398"
     kindergarten.email = "pm12slupsk@wp.pl"
     kindergarten.website = "https://edu.slupsk.eu/placowki/514/"
     kindergarten.facebook = "www.facebook.com/PM12niezapominajka"
     kindergarten.save()

     kindergarten = Kindergarten.objects.get(name="Przedszkole Miejskie nr 25 im. Kubusia Puchatka")
     kindergarten.phone = "514 830 863"
     kindergarten.email = "pm25slupsk@wp.pl"
     kindergarten.website = "www.puchatek.slupsk.pl"
     kindergarten.facebook = "https://www.facebook.com/Przedszkole-Miejskie-nr-25-Kubu%C5%9B-Puchatek-w-S%C5%82upsku-1910201105972534/"
     kindergarten.save()

class Migration(migrations.Migration):

    dependencies = [
        ('kindergarten', '0005_auto_20201110_1406'),
    ]

    operations = [
        migrations.RunPython(updateData),
    ]
