from django.urls import path
from .views import *

urlpatterns = [
    # path('', chat_view, name='chat'),
    path('', vocacional_chat, name='chat')
]