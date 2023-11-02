from django.urls import path
from consultation.views import *

urlpatterns = [
    path('consultation_list_views/', ConsultationListViews.as_view()),
    path('consultation_history_list/<int:pk>/', ConsultationHistoryListViews.as_view()),
    path('consultation_user_history_views/', ConsultationUSerHistoryViews.as_view()),
]
