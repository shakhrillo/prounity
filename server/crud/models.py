from django.db import models
from django.contrib.auth.models import *


class Posts(models.Model):
  title = models.CharField(max_length=255, null=True, blank=True, verbose_name='Title')
  question = models.TextField(null=True, blank=True, verbose_name='Question')
  codes = models.TextField(null=True, blank=True, verbose_name='Codes')
  views = models.IntegerField(default=0, null=True, blank=True, verbose_name='Count views')
  author = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, related_name='author_post')
  created_at = models.DateField(auto_now_add=True, verbose_name='Date of creation')
  updated_at = models.DateField(auto_now=False, verbose_name='Date of update')

  def __str__(self):
    return self.title

  class Meta:
    verbose_name = "POST"
    verbose_name_plural = "Posts"
