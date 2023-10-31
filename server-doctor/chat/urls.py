from django.urls import path
from . import views

urlpatterns = [
    path('start/', views.StartConversationView.as_view(), name='start_convo'),
    path('<int:convo_id>/', views.get_conversation, name='get_conversation'),
    path('', views.conversations, name='conversations')
]