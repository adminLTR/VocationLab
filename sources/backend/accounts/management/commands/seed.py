# myapp/management/commands/seed.py
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from faker import Faker
from accounts.models import *
import os
from chat.models import CategoryAnswer, Question
import csv
import uuid
import time

fake = Faker()
class Command(BaseCommand):
    help = 'Seed initial data, including admin user'

    def handle(self, *args, **kwargs):
        # os.remove("chroma")
        User.objects.all().delete()

        self.create_users()
        
    def create_users(self, num_users=10):
        User.objects.all().delete()
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
