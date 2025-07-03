from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'message')
    list_filter = ("user", "created_at")

@admin.register(CategoryAnswer)
class CategoryAnswerAdmin(admin.ModelAdmin):
    list_display = ("id", "category")

@admin.register(PossibleAnswers)
class PossibleAnswersAdmin(admin.ModelAdmin):
    list_display = ("id", "category", "get_answer")
    list_filter = ("category",)

    @admin.display(description="Respuesta")
    def get_answer(self, obj):
        return obj.answer if len(obj.answer) < 20 else obj.answer[:20]
