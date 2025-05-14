from django.contrib import admin
from .models import *



# Register your models here.
@admin.register(Area)
class AreaAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description')
    search_fields = ('name', 'description')

@admin.register(Career)
class CareerAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'area__name')
    search_fields = ('name', 'description')
    list_filter = ('area',)

@admin.register(Institution)
class InstitutionAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'short_name', 'institution_type', 'get_address', 'get_careers_count')
    list_filter = ('institution_type', 'careers', 'address')
    search_fields = ('name', 'short_name', 'description', 'address__address')

    @admin.display(description="Dirección")
    def get_address(self, obj):
        return obj.address

    @admin.display(description="Cantidad de carreras")
    def get_careers_count(self, obj):
        return obj.careers.count()