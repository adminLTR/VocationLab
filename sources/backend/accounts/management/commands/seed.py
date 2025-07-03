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
            "abiertas" : {
                "documents" : [
                    "Me llamo Asthri, tengo 16 años, soy de Perú y estudio en un colegio privado.",
                    "Soy Jose, mi edad es 17.",
                    "Mi nombre es Joanne. 13 años de colegio público en Lima.",
                    "Lucius, 14, Cajamarca, privado.",
                    "¡Hola! Me llamo María y tengo 15 años. Soy de Cajamarca, una ciudad súper bonita con montañas y vacas por todos lados jaja. Estudio en un cole público",
                    "Me llamo Luis tengo 14 años soy de Ayacucho. Estoy en un colegio público.",
                    "Soy Camila, creo que tengo 16 (sí, 16 jaja). Vivo en Lima, en San Juan de Lurigancho. Estudio en un colegio privado  o bueno, creo que es particular  sí.",
                    "Soy André, tengo 17 años, soy de Piura y estudio en un colegio privado.",
                    "Ola, me yamó Jhoni, tengo 13 añitos, soii de Puno y voi a un cole pùblicoo.",
                ],
            },

        }

        collection.add(
            documents=saludos,
            ids=[f'saludo_{i+1}' for i in range(len(saludos))],
        )

    def seed_questions(self):
        pass