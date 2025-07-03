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

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ("id", "category", "question")
    list_filter = ("category",)

    @admin.display(description="Question")
    def get_question(self, obj):
        return obj.question if len(obj.question) < 40 else obj.question[:40] + "..."
