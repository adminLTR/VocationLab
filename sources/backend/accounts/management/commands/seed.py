# myapp/management/commands/seed.py
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from faker import Faker
from accounts.models import *
import os
import chromadb
from sources.backend.chat.models import CategoryAnswer, Question

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

      
        data = [
            {
                "document" : "",
                "label" : True
            },
            {
                "document" : "",
                "label" : True
            },
        ]

        collection.add(
            documents=[document["document"] for document in data],
            ids=[f'{i+1}' for i in range(len(data))],
            metadatas = [{'label': document["label"]} for document in data]
        )


    def seed_questions(self):
        categories_with_questions = {
            "Realista": [
                "¿Has hecho alguna vez algo con tus propias manos que te haya hecho sentir orgulloso? ¿Cómo fue la experiencia?.",
                "¿Disfrutas arreglar cosas en casa, como una bicicleta, una radio o algún mueble?",
                "¿Te gusta estar en movimiento, haciendo cosas físicas o al aire libre? ¿Qué tipo de actividades haces?",
                "¿Has ayudado en alguna tarea que implique construir o instalar cosas? ¿Cómo te sentiste?",
                "¿Prefieres actividades prácticas más que teóricas? ¿Por qué?",
            ],
            "Investigador": [
                "¿Qué tipo de cosas te generan mucha curiosidad? ¿Hay algo que hayas investigado por tu cuenta?",
                "¿Te gusta hacer experimentos, resolver acertijos o entender cómo funciona algo? ¿Puedes contarme un ejemplo?",
                "¿Qué asignaturas disfrutas más en el colegio? ¿Por qué?",
                "¿Alguna vez resolviste un problema complicado? ¿Cómo lo hiciste?",
                "Si tuvieras tiempo libre para aprender algo nuevo, ¿qué elegirías?",
            ],
            "Artistico": [
                "¿Has hecho algo creativo que te haya hecho sentir bien contigo mismo? ¿Qué fue?",
                "¿Cómo te expresas cuando estás feliz, triste o emocionado?",
                "¿Te gusta escribir historias, dibujar, hacer música o editar videos? ¿Qué haces exactamente?",
                "¿Qué actividad artística harías aunque no te pagaran por ello?",
                "¿Sientes que necesitas tener libertad para expresarte a tu manera? ¿En qué cosas lo notas?",
            ],
            "Social": [
                "¿Has ayudado a alguien en una situación difícil? ¿Qué hiciste?",
                "¿Cómo te sientes cuando explicas algo y la otra persona te entiende?",
                "¿Te gusta trabajar en equipo o prefieres hacerlo solo? ¿Por qué?",
                "¿Has participado en actividades de apoyo social, tutoría, voluntariado, cuidado de personas?",
                "¿Qué piensas cuando ves que alguien necesita ayuda y nadie actúa?",
            ],
            "Emprendedor": [
                "¿Alguna vez organizaste una actividad o lideraste un grupo? ¿Qué aprendiste de eso?",
                "¿Te gusta proponer ideas nuevas o motivar a los demás a hacer algo?",
                "¿Has pensado en tener tu propio negocio o proyecto? ¿Cuál sería?",
                "¿Qué sientes cuando alguien te dice que no puedes lograr algo? ¿Qué haces?",
                "¿Te gusta debatir o defender tus ideas? ¿En qué situaciones lo haces?",
            ],
            "Convencional": [
                "¿Te gusta planificar tus tareas o tener todo bien organizado? ¿Cómo lo haces?",
                "¿Te ha tocado ordenar información, documentos o materiales? ¿Te gusta?",
                "¿Prefieres saber exactamente qué tienes que hacer, o improvisar sobre la marcha? ¿Por qué?",
                "¿Has usado herramientas digitales como Excel, planificadores o aplicaciones para organizarte? ¿Cómo fue?",
                "¿Cómo te sientes cuando alguien te pide algo con urgencia y todo está en su sitio?",
            ]
        }
            
        for category_name, questions in categories_with_questions.items():
            category, created = CategoryAnswer.objects.get_or_create(category=category_name)
            for q in questions:
                Question.objects.get_or_create(question=q, category=category)

        self.stdout.write(self.style.SUCCESS('✅ Preguntas y categorías pobladas con éxito'))
