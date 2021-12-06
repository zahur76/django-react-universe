# Generated by Django 3.2.9 on 2021-12-06 09:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Galaxy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('age', models.CharField(max_length=120)),
                ('constellation', models.CharField(max_length=120)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='')),
            ],
            options={
                'verbose_name_plural': 'Universe',
            },
        ),
    ]
