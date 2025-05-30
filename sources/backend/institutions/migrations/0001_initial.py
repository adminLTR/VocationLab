# Generated by Django 5.2 on 2025-05-14 22:24

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('location', '0003_address_delete_adress_alter_district_city_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Career',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Nombre')),
                ('description', models.TextField(blank=True, null=True, verbose_name='Descripción')),
                ('image', models.ImageField(blank=True, null=True, upload_to='media/careers')),
            ],
            options={
                'verbose_name': 'Carrera',
                'verbose_name_plural': 'Carreras',
            },
        ),
        migrations.CreateModel(
            name='Institution',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Nombre')),
                ('short_name', models.CharField(blank=True, max_length=20, null=True, verbose_name='Acrónimo')),
                ('description', models.TextField(blank=True, null=True, verbose_name='Descripción')),
                ('image', models.ImageField(blank=True, null=True, upload_to='media/institutions/images', verbose_name='Imagen')),
                ('logo', models.ImageField(blank=True, null=True, upload_to='media/institutions/logos', verbose_name='Logo')),
                ('address', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='location.address', verbose_name='Dirección')),
                ('careers', models.ManyToManyField(to='institutions.career')),
            ],
        ),
    ]
