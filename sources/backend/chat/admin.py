from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'message')
    list_filter = ("user", "created_at")
