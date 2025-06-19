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

