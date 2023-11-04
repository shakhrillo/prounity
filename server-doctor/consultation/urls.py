from django.urls import path
from consultation.views import (
    ConsultationListViews,
    ConsultationCrudViews,
    ConsultationHistoryListViews,
    ConsultationUSerHistoryViews,
)

urlpatterns = [
    path(
        'consultation_list_views/',
        ConsultationListViews.as_view()
    ),
    path(
        'consultation_crud_views/<int:pk>/',
        ConsultationCrudViews.as_view()
    ),
    path(
        'consultation_history_list/<int:pk>/',
        ConsultationHistoryListViews.as_view()
    ),
    path(
        'consultation_user_history_views/',
        ConsultationUSerHistoryViews.as_view()
    ),
]
