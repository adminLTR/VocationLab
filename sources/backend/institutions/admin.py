from django.contrib import admin
from .models import *
from import_export.admin import ImportExportModelAdmin
from .resources import InstitutionResource
from django.utils.html import format_html

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
class InstitutionAdmin(ImportExportModelAdmin):
    resource_class = InstitutionResource
    list_display = ('id', 'get_thumbnail', 'name', 'short_name', 'institution_type', 'get_address', 'get_careers_count')
    list_filter = ('institution_type', 'careers', 'address__district__city__region', 'address__district__city', 'address__district')
    search_fields = ('name', 'short_name', 'description', 'address__address')

    @admin.display(description="Dirección")
    def get_address(self, obj):
        return obj.address

    @admin.display(description="Cantidad de carreras")
    def get_careers_count(self, obj):
        return obj.careers.count()
    
    @admin.display(description="Logo")
    def get_thumbnail(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="width:50px;"/>' if obj.logo else '-', obj.logo.url)
        return "-"