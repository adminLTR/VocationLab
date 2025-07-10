from django.shortcuts import render
from rest_framework import generics
from .models import Institution
from .serializers import InstitutionSerializer

class InstitutionListView(generics.ListAPIView):
    queryset = Institution.objects.filter(logo__isnull=False).exclude(logo='')
    serializer_class = InstitutionSerializer
