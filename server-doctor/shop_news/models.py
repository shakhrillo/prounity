from django.db import models
from django.conf import settings


class News(models.Model):
    title = models.CharField(max_length=250)
    content = models.TextField()
    img = models.ImageField(upload_to="news/")
    date = models.DateTimeField(auto_now_add=True)


class Drugs(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    price = models.FloatField(null=True, blank=True)
    company = models.CharField(max_length=100, null=True, blank=True)
    img = models.ImageField(upload_to="drugs/", null=True, blank=True)
    content = models.TextField(null=True, blank=True)
    quantity = models.IntegerField(null=True, blank=True)
    create_date = models.DateTimeField(auto_now_add=True)


class BayDrugs(models.Model):
    drugs_id = models.JSONField(null=True, blank=True)
    user_id = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    count_drugs = models.IntegerField(null=True, blank=True)
    price = models.FloatField(null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True)


class UserCard(models.Model):
    number_card = models.IntegerField()
    exp_date = models.DateField()
    summ = models.FloatField()
    user_id = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
