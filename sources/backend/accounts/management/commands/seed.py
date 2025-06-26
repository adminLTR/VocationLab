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

        saludos = [
            "¡Hola! ¿En qué puedo ayudarte hoy?",
            "¡Buenos días! ¿Cómo te puedo ayudar?",
            "¡Hola! 😊 ¿Qué necesitas?",
            "¡Buenas tardes! Estoy aquí para ayudarte.",
            "¡Qué gusto saludarte! ¿En qué te puedo asistir?",
            "¡Hola, hola! ¿Cómo estás?",
            "¡Bienvenido! ¿En qué te puedo colaborar?",
            "¡Hola! ¿Tienes alguna pregunta?",
            "¡Un gusto saludarte! ¿Qué deseas consultar?",
            "¡Hola! Estoy listo para ayudarte.",
            "¡Encantado de hablar contigo! ¿Cómo puedo ayudarte?",
            "¡Hola humano! 😄 ¿En qué te puedo servir hoy?",
            "¡Buenas! ¿Sobre qué tema quieres conversar?",
            "¡Hola! Dime, ¿cómo te puedo ayudar?",
            "¡Hola! Soy tu asistente, pregúntame lo que necesites.",
        ]

        collection.add(
            documents=saludos,
            ids=[f'saludo_{i+1}' for i in range(len(saludos))],
        )
