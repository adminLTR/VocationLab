from django.contrib import admin
from .models import *

@admin.register(Region)
class RegionAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)


@admin.register(City)
class CityAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'region')
    search_fields = ('name', 'region__name')
    list_filter = ('region',)


@admin.register(District)
class DistrictAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'get_ciudad', 'get_region')
    search_fields = ('name', 'city__name', 'city__region__name')
    list_filter = ('city',)

    @admin.display(description="Ciudad")
    def get_ciudad(self, obj):
        return obj.city.name
    
    @admin.display(description="Región")
    def get_region(self, obj):
        return obj.city.region


@admin.register(Address)
class AddressAdmin(admin.ModelAdmin):
    list_display = ('id', 'address', 'get_district', 'get_city', 'get_region', 'latitude', 'longitude')
    search_fields = ('address', 'district__name', 'district__city__name', 'district__city__region__name')
    list_filter = ('district', 'district__city')

    @admin.display(description="Distrito")
    def get_district(self, obj):
        return obj.district.name
    
    @admin.display(description="Ciudad")
    def get_city(self, obj):
        return obj.district.city.name

    @admin.display(description="Región")
    def get_region(self, obj):
        return obj.district.city.region
