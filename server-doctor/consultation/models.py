from django.db import models
from django.conf import settings


class Consultation(models.Model):
    doctor_id = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="doctor_id")
    user_id = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="user_id")
    appoint_date = models.DateField(null=True, blank=True,)
    appoint_time = models.TimeField(null=True, blank=True,)
    create_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'Consultation'
