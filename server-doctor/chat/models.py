from django.db import models
from django.conf import settings
from django.contrib.auth.models import User


# Create your models here.
class Conversation(models.Model):
  initiator = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name='convo_starter')
  receiver = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name='convo_participant')
  start_time = models.DateTimeField(auto_now_add=True, verbose_name='Time stamp')


class Message(models.Model):
  sender = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name='message_sender')
  text = models.CharField(max_length=200, blank=True, verbose_name='Text')
  attachment = models.FileField(blank=True, null=True, verbose_name='File Uploaded')
  conversation_id = models.ForeignKey(Conversation, on_delete=models.CASCADE, verbose_name='Conversation Identity')
  timestamp = models.DateTimeField(auto_now_add=True, verbose_name='Time stamp')

  class Meta:
    ordering = ('-timestamp',)
