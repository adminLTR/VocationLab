from django.db import models

# Create your models here.
class Area(models.Model):
    name = models.CharField(max_length=100, verbose_name="Nombre")
    description = models.TextField(verbose_name="Descripción", null=True, blank=True)
    image = models.ImageField(null=True, blank=True, upload_to='areas')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Área"
        verbose_name_plural = "Áreas"

class Career(models.Model):
    name = models.CharField(max_length=100, verbose_name="Nombre")
    description = models.TextField(verbose_name="Descripción", null=True, blank=True)
    image = models.ImageField(null=True, blank=True, upload_to='careers')
    area = models.ForeignKey(Area, on_delete=models.PROTECT, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Carrera"
        verbose_name_plural = "Carreras"

class Institution(models.Model):
    UNIVERSITY = 'university'
    INSTITUTE = 'institute'

    INSTITUTION_TYPE_CHOICES = [
        (UNIVERSITY, 'Universidad'),
        (INSTITUTE, 'Instituto'),
    ]

    name = models.CharField(max_length=100, verbose_name="Nombre")
    short_name = models.CharField(max_length=20, verbose_name="Acrónimo", null=True, blank=True)
    description = models.TextField(verbose_name="Descripción", null=True, blank=True)
    image = models.ImageField(null=True, blank=True, upload_to='institutions/images', verbose_name="Imagen")
    logo = models.ImageField(null=True, blank=True, upload_to='institutions/logos', verbose_name="Logo")
    address = models.ForeignKey('location.Address', on_delete=models.CASCADE, verbose_name="Dirección")
    careers = models.ManyToManyField('Career')
    institution_type = models.CharField(
        max_length=20,
        choices=INSTITUTION_TYPE_CHOICES,
        default=UNIVERSITY,
        verbose_name="Tipo de institución"
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Institución"
        verbose_name_plural = "Instituciones"
    