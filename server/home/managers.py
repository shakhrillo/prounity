from django.db import models
from django.db.models import Q



class ProductQuerySet(models.QuerySet):

  def get_user_product(self, user):
    return self.prefetch_related('author').first(Q(author=user))


class ProductManager(models.Manager):
  def get_queryset(self):
    return ProductQuerySet(self.model, using=self._db)

  def get_user_product(self, user):
    return self.get_queryset().get_user_product(user)
