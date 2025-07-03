# myapp/management/commands/seed.py
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from faker import Faker
from accounts.models import *
import os
import chromadb

fake = Faker()
class Command(BaseCommand):
    help = 'Seed initial data, including admin user'

    def handle(self, *args, **kwargs):
        # os.remove("chroma")
        User.objects.all().delete()

        self.create_users()
        self.seed_chroma()
        
    def create_users(self, num_users=10):
        if not User.objects.filter(username='admin').exists():
            User.objects.create_superuser(
                username='admin',
                password='1234'
            )
        for _ in range(10):
            username = fake.user_name()
            email = fake.email()
            if not User.objects.filter(username=username).exists():
                user = User.objects.create_user(
                    username=username,
                    email=email,
                    password='test1234'
                )
                UserProfile.objects.create(
                    user=user,
                    birth_date=fake.date_of_birth() 
                )
        self.stdout.write(self.style.SUCCESS('✅ 10 usuarios falsos creados'))

    def seed_chroma(self):
        chroma_client = chromadb.PersistentClient(path=os.getenv("CHROMA_PATH"))
        collection = chroma_client.get_or_create_collection(name="VocationLab")

      
        data = {
            "saludos" : {
                "documents" : [
                    "Hola, necesito ayuda",
                    "Buenos dias. ¿Cómo te llamas?",
                    "Buenas tardes. Te saludo.",
                    "Esto es un saludo. Te mando saludos",
                    "¿Cómo funciona este bot?",
                    "Hola. Explicame cómo funcionas",
                    "¿Qué es esto? ¿Cómo funcionas?",
                ],
            },

        }

        collection.add(
            documents=saludos,
            ids=[f'saludo_{i+1}' for i in range(len(saludos))],
        )
