from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    profile_photo = models.ImageField(upload_to='profiles/', null=True, blank=True, verbose_name="Foto de perfil")

    def __str__(self):
        return self.username
    
    class Meta:
        verbose_name = "Usuario"
        verbose_name_plural = "Usuarios"

class Comment(models.Model):
    comment = models.TextField(verbose_name="Comentario")
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, verbose_name="Usuario")

    def __str__(self):
        return f"{self.user.username}: {self.comment[:10] + '...' if len(self.comment)>10 else self.comment}"