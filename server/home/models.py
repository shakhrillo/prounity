""" Django modles settings """
from django.db import models
from django.contrib.auth.models import User


class Product(models.Model):
    """Product models"""

    product_name = models.CharField(
        max_length=255, null=True, blank=True, verbose_name="Product name"
    )
    product_price = models.FloatField(
        default=0, null=True, blank=True, verbose_name="Product Price"
    )
    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="author",
        verbose_name="Author",
    )
    created_at = models.DateField(
        auto_now_add=True,
        verbose_name="Create date"
    )


class SmsCode(models.Model):
    """Sms check code models"""

    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    sms_code = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True)


class CaptchaStore(models.Model):
    """Captcha models"""

    hashkey = models.CharField(max_length=350)
    verify = models.CharField(max_length=350, null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True)