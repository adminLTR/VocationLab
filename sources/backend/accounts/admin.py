# accounts/admin.py
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *
from django.utils.html import format_html

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('id', 'username', 'email', 'first_name', 'last_name', 'is_staff', 'profile_photo_thumbnail')

    fieldsets = UserAdmin.fieldsets + (
        ('Perfil', {'fields': ('profile_photo',)}),
    )

    def profile_photo_thumbnail(self, obj):
        if obj.profile_photo:
            return format_html('<img src="{}" style="width:40px; height:40px; object-fit: cover; border-radius: 5px;" />', obj.profile_photo.url)
        return "-"
    profile_photo_thumbnail.short_description = 'Foto'

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "comment")
    list_filter = ("user", )

admin.site.register(CustomUser, CustomUserAdmin)