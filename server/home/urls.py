""" Django urls settings """
from django.urls import path
from home.views import recaptcha_view

urlpatterns = [
    path("recaptcha_view/", recaptcha_view, name="recaptcha_view"),
]
