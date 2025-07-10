# institutions/serializers.py
from rest_framework import serializers
from .models import *

class CareerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Career
        fields = ['id', 'name', 'description', 'image']

    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        elif obj.image:
            return obj.image.url
        return None

class InstitutionSerializer(serializers.ModelSerializer):
    careers = serializers.SerializerMethodField()

    class Meta:
        model = Institution
        fields = [
            'id', 'name', 'short_name', 'description',
            'image', 'logo', 'institution_type',
            'management_type', 'careers'
        ]

    def get_logo(self, obj):
        request = self.context.get('request')
        if obj.logo and request:
            return request.build_absolute_uri(obj.logo.url)
        elif obj.logo:
            return obj.logo.url
        return None

    def get_careers(self, obj):
        careers_with_image = obj.careers.filter(image__isnull=False).exclude(image='')
        return CareerSerializer(careers_with_image, many=True).data
