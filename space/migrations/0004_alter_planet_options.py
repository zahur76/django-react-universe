# Generated by Django 3.2.9 on 2021-12-06 16:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('space', '0003_planet'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='planet',
            options={'verbose_name_plural': 'Planet'},
        ),
    ]