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
            "¡Hola! Soy IvAn, tu asistente virtual. 😊 ¿Cuál es tu nombre?",
            "¡Hola! Soy IvAn. Para ayudarte mejor, cuéntame cómo te llamas y qué estás estudiando.",
            "¡Buenos días! Soy IvAn. ¿Puedes contarme un poco sobre ti? Tu nombre, dónde estudias o trabajas, etc.",
            "¡Hola humano! 😄 Me llamo IvAn. ¿Cuál es tu nombre y qué carrera estás considerando?",
            "¡Un gusto conocerte! Soy IvAn, tu guía vocacional. ¿Cómo te llamas y qué te interesa estudiar?",
            "¡Hola! Soy IvAn. ¿Dónde estás estudiando o planeas estudiar? ¿Y cuál es tu nombre?",
            "¡Bienvenido a VocationLab! Soy IvAn. Antes de empezar, dime tu nombre y qué temas te interesan.",
            "¡Encantado de conocerte! Soy IvAn. ¿Podrías contarme dónde vives y qué carrera te llama la atención?",
            "¡Hola, hola! Soy IvAn. 😊 Para comenzar, dime cómo te llamas y qué te apasiona.",
            "¡Qué alegría saludarte! Soy IvAn, tu asistente. ¿Cuál es tu nombre y en qué etapa de tu formación estás?",
            "¡Hola! Me llamo IvAn. ¿Puedes contarme un poco sobre ti? Por ejemplo, tu colegio, universidad o intereses.",
            "¡Hola! Soy IvAn. Cuéntame tu nombre, edad y qué carrera tienes en mente, si ya lo sabes.",
            "¡Buenas! Soy IvAn, tu orientador virtual. ¿Cómo te llamas y qué te gustaría lograr en tu futuro profesional?",
            "¡Hola! 😊 Soy IvAn. Me encantaría conocerte mejor. ¿Cuál es tu nombre y qué estudias o quisieras estudiar?",
            "¡Bienvenido! Soy IvAn. ¿Podrías decirme tu nombre y qué esperas obtener de esta conversación?"
        ]

        collection.add(
            documents=saludos,
            ids=[f'saludo_{i+1}' for i in range(len(saludos))],
        )
