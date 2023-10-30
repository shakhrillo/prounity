""" Django App settings """
from django.apps import AppConfig


class HomeConfig(AppConfig):
    """ Home app cofig """
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'home'

    def ready(self):

        import api.signals  # Add this line to import the signals.py