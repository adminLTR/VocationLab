# admin/resources.py
from import_export import resources
from import_export.widgets import ForeignKeyWidget
from .models import Career, Area, Institution
from location.models import Region, City, District, Address
from import_export.fields import Field

class InstitutionResource(resources.ModelResource):
    nro = Field(column_name='Nro')
    program = Field(column_name='Programa')
    universidad = Field(column_name='Universidad')
    departamento = Field(column_name='Departamento')
    provincia = Field(column_name='Provincia')
    distrito = Field(column_name='Distrito')
    direccion = Field(column_name='Dirección del local')
    tipo = Field(column_name='Tipo de gestión')
    nivel = Field(column_name='Nivel académico')
    modalidad = Field(column_name='Modalidad de estudio')

    def before_import_row(self, row, row_number=None, **kwargs):
        if row['Nivel académico'].strip().lower() != 'carrera profesional':
            raise Exception("Ignorado: No es Carrera Profesional")
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

        # Previene que la importación intente duplicar
        row['id'] = institution.id
        return super().before_import_row(row, row_number, **kwargs)

    class Meta:
        model = Institution
        # import_id_fields = ('name',)
        fields=[field.name for field in Institution._meta.fields]
        skip_unchanged = True
        report_skipped = True
