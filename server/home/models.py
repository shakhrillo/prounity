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


class PaymentHistory(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )
    product = models.ForeignKey(
        Product,
        on_delete=models.SET_NULL,
        blank=True,
        null=True
    )
    date = models.DateTimeField(auto_now_add=True)
    payment_status = models.BooleanField()

    class PyamentObject(object):
        def __init__(self, product):
            self.name = product.name


class PaymentTariffs(models.Model):
    tariff_name = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name="Tariffs name"
    )
    tariff_price = models.IntegerField(
        default=0,
        null=True,
        blank=True,
        verbose_name='Tariffs price'
    )
    description = models.TextField(
        null=True,
        blank=True,
        verbose_name='Description'
    )

    class PyamentObject(object):
        def __init__(self, tariff_name):
            self.name = tariff_name


class PaymentTariffsGet(models.Model):
    tariff = models.ForeignKey(
        PaymentTariffs,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        verbose_name='Payment Tarif',
        related_name='tariff'
    )
    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        verbose_name='Author',
        related_name='user_tarif'
    )
    tarifs_day = models.IntegerField(
        default=3,
        null=False,
        blank=True,
        verbose_name='Tarifs day'
    )
    tarifs_day_is_activate = models.BooleanField(
        default=True,
        null=True,
        blank=True,
        verbose_name='Tarifs day is activate'
    )
    created_at = models.DateField(
        auto_now_add=True,
        verbose_name="Create date"
    )
    activate_day = models.DateField(
        auto_now=False,
        verbose_name='Updated date'
    )

    class PyamentObject(object):
        def __init__(self, tariff):
            self.name = tariff.tariff_name


class Jobs(models.Model):
    name = models.CharField(max_length=250)
    company = models.CharField(max_length=250)
    address = models.CharField(max_length=250)
    phone = models.CharField(max_length=100)
    content = models.TextField()
    author_id = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        null=True,
        blank=True
        )
    date = models.DateTimeField(auto_now_add=True)
    