# Generated by Django 2.2.3 on 2019-08-22 13:40

from django.db import migrations

def insertData(apps, schema_editor):
     Institution = apps.get_model('producer', 'Producer')
     institution = Institution(name = "Gospodarstwo Rolne Jolanta Szmichowska’s", adress = "Ul. Sportowa 53, 76-200 Słupsk", latitude = 54.482612, longitude = 17.046469, accuracy=250)
     institution.save()
     institution = Institution(name = " Piekarnia LEWNA", adress = " Ul. Sierpinka 2, 76-200 Słupsk", latitude = 54.465434, longitude = 17.042003, accuracy=250)
     institution.save()
     institution = Institution(name = "Boks Handlowy nr 60 Piotr Dymyter", adress = "Bazar na ulicy Banacha, 76-200 Słupsk", latitude = 54.469731, longitude = 17.00425, accuracy=250)
     institution.save()

class Migration(migrations.Migration):

    dependencies = [
        ('producer', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(insertData),
    ]