from django.db import models
from accounts.models import UserProfile

# Create your models here.
class Message(models.Model):
    message = models.CharField(max_length=1000, verbose_name="Mensaje")
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, null=True)

    class Meta:
        verbose_name = "Mensaje"
        verbose_name_plural = "Mensajes"

class CategoryAnswer(models.Model):
    category = models.CharField(max_length=100, verbose_name="Categoría", null=True)
    
    def __str__(self):
        return self.category
    
    class Meta:
        verbose_name = "Categoría de respuesta"
        verbose_name_plural = "Categorías de respuesta"

class Question(models.Model):
    question = models.CharField(max_length=500, verbose_name="Pregunta")
    category = models.ForeignKey(CategoryAnswer, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.category}: {self.question}"
    
    class Meta:
        verbose_name = "Pregunta",
        verbose_name_plural = "Preguntas"