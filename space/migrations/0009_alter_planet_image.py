# Generated by Django 3.2.9 on 2021-12-09 16:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('space', '0008_alter_planet_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='planet',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
