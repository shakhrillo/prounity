from django.urls import path
from . import views

urlpatterns = [
    path('start/', views.StartConversationView.as_view(), name='start_convo'),
    path('conversation/<int:convo_id>/', views.get_conversation, name='get_conversation'),

    path('doctor_conversation/<int:pk>/', views.GetDoctorConversations.as_view()),
    path('patient_conversation/<int:pk>/', views.GetPatientConversations.as_view()),

    path('message_delete/<int:pk>/', views.DeleteChatSMSView.as_view()),

    path('', views.conversations, name='conversations')
]