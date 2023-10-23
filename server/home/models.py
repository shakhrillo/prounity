from django.db import models
from django.contrib.auth.models import User
from home.managers import ProductManager

class Product(models.Model):
    product_name = models.CharField(
        max_length=255, null=True, blank=True, verbose_name="Product name"
    )
    product_price = models.FloatField(
        default=0, null=True, blank=True, verbose_name="Product Price"
    )
    author = models.ForeignKey(
        User,on_delete=models.CASCADE,
        null=True,blank=True,
        related_name="author",
        verbose_name="Author",
    )
    created_at = models.DateField(auto_now_add=True, verbose_name="Create date")

    objects = models.Manager()
    get_user_product = ProductManager()


class SmsCode(models.Model):
    user_id = models.ForeignKey(User,on_delete=models.CASCADE)
    sms_code = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True)


class PaymentHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True)
    payment_status = models.BooleanField()

    def __str__(self):
      return self.product.name


class PaymentTariffs(models.Model):
    tariff_name = models.CharField(max_length=255, null=True, blank=True, verbose_name="Tariffs name")
    tariff_price = models.IntegerField(default=0, null=True, blank=True, verbose_name='Tariffs price')
    description = models.TextField(null=True, blank=True, verbose_name='Description')

    def __str__(self):
      return self.tariff_name


class PaymentTariffsGet(models.Model):
    tariff = models.ForeignKey(PaymentTariffs, on_delete=models.CASCADE, blank=True, null=True, verbose_name='Payment Tarif', related_name='tariff')
    author = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True, verbose_name='Author', related_name='user_tarif')
    tarifs_day = models.IntegerField(default=3, null=False, blank=True, verbose_name='Tarifs day')
    tarifs_day_is_activate = models.BooleanField(default=True, null=True, blank=True, verbose_name='Tarifs day is activate')
    created_at = models.DateField(auto_now_add=True, verbose_name="Create date")
    activate_day = models.DateField(auto_now=False, verbose_name='Updated date')

    def __str__(self):
      return self.tariff.tariff_name

