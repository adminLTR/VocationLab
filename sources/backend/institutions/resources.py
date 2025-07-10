# admin/resources.py
from import_export import resources
from import_export.widgets import ForeignKeyWidget
from .models import Career, Area, Institution
from location.models import Region, City, District, Address
from import_export.fields import Field

class InstitutionResource(resources.ModelResource):

    def before_import_row(self, row, **kwargs):
        if row['Nivel académico'].strip().lower() != 'carrera profesional':
            return super().before_import_row(row, **kwargs)
        try:
            region, _ = Region.objects.get_or_create(name=row['Departamento'])
            city, _ = City.objects.get_or_create(name=row['Provincia'], region=region)
            district, _ = District.objects.get_or_create(name=row['Distrito'], city=city)
            address, _ = Address.objects.get_or_create(address=row['Dirección del local'], district=district)

            # Career
            career, _ = Career.objects.get_or_create(name=row['Programa'])

            # Institution
            institution, _ = Institution.objects.get_or_create(name=row['Universidad'], defaults={
                'address': address,
                'institution_type' : Institution.UNIVERSITY,
                'management_type': Institution.PUBLIC if row['Tipo de gestión'] == 'Público' else Institution.PRIVATE
            })

            institution.careers.add(career)
        except:
            return super().before_import_row(row, **kwargs)
        # Previene que la importación intente duplicar
        # row['id'] = institution.id
        return super().before_import_row(row, **kwargs)

    class Meta:
        model = Institution
        # import_id_fields = ('name',)
        fields=[field.name for field in Institution._meta.fields]
        skip_unchanged = True
        report_skipped = True
