# institutions/serializers.py
from rest_framework import serializers
from .models import *

class CareerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Career
        fields = ['id', 'name', 'description', 'image']

class InstitutionSerializer(serializers.ModelSerializer):
    careers = CareerSerializer(many=True, read_only=True)
    class Meta:
        model = Institution
        fields = [
            'id', 'name', 'short_name', 'description',
            'image', 'logo', 'institution_type',
            'management_type', 'careers'
        ]
