""" Django models libraries """
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings


class CountryList(models.Model):
    name = models.CharField(max_length=100)
    dial_code = models.CharField(max_length=50)
    emoji = models.CharField(max_length=50)
    code = models.CharField(max_length=50)


class DoctorCategories(models.Model):
    """ Doctor Categories Table """
    name = models.CharField(max_length=150, null=True, blank=True)
    user = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        related_name='users_categories',
        null=True, blank=True)


class CustomUser(AbstractUser):
    """ Custom Users Table """
    price = models.IntegerField(
        default=0, null=True, blank=True)
    reviews = models.FloatField(
        default=0, null=True, blank=True)
    description = models.TextField(
        null=True, blank=True)
    categories_id = models.ForeignKey(
        DoctorCategories,
        on_delete=models.CASCADE,
        null=True, blank=True)
    avatar = models.ImageField(
        upload_to='avatar/',
        null=True, blank=True
    )
    online_status = models.BooleanField(
        default=False,
        null=True, blank=True,
        verbose_name='Is online or not'
    )


class SmsCode(models.Model):
    """ SMS Code Table"""
    user_id = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='users')
    sms_code = models.IntegerField()
    date = models.DateTimeField(
        auto_now_add=True)
