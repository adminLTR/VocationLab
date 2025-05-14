from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(Region)
class RegionAdmin(admin.ModelAdmin):
    pass

@admin.register(City)
class CityAdmin(admin.ModelAdmin):
    pass

@admin.register(District)
class DistrictAdmin(admin.ModelAdmin):
    pass

@admin.register(Adress)
class AdressAdmin(admin.ModelAdmin):
    pass