from django.db import models

# Create your models here.
class UserProfile(models.Model):
    profile_picture = models.ImageField(null=True, blank=True, upload_to='users')
    birth_date = models.DateField()