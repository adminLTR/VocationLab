from django.db import models

# Create your models here.
class Region(models.Model):
    name = models.CharField(max_length=100, verbose_name="Nombre")

    class Meta:
        verbose_name = "Región"
        verbose_name_plural = "Regiones"

class City(models.Model):
    name = models.CharField(max_length=100, verbose_name="Nombre")
    region = models.ForeignKey(Region, on_delete=models.CASCADE, verbose_name="Región")

    class Meta:
        verbose_name = "Ciudad"
        verbose_name_plural = "Ciudades"

class District(models.Model):
    name = models.CharField(max_length=100, verbose_name="Nombre")
    city = models.ForeignKey(Region, on_delete=models.CASCADE, verbose_name="Ciudad")

    class Meta:
        verbose_name = "Distrito"
        verbose_name_plural = "Distritos"

class Adress(models.Model):
    adress = models.CharField(max_length=500, verbose_name="Dirección")
    longitude = models.FloatField(null=True, blank=True, verbose_name="Longitud")
    latitude = models.FloatField(null=True, blank=True, verbose_name="Latitude")
    
    class Meta:
        verbose_name = "Dirección"
        verbose_name_plural = "Direcciones"