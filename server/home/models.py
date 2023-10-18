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

