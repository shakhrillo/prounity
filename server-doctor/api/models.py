""" Django models settings """
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings


class DoctorCategories(models.Model):
    name = models.CharField(max_length=150, null=True, blank=True)
    user = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='users_categories', null=True, blank=True)


class CustomUser(AbstractUser):
    price = models.IntegerField(default=0, null=True, blank=True)
    reviews = models.FloatField(default=0, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    categories_id = models.ForeignKey(DoctorCategories, on_delete=models.CASCADE, null=True, blank=True)
    avatar = models.ImageField(upload_to='avatar/', null=True, blank=True)


class SmsCode(models.Model):
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='users')
    sms_code = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True)