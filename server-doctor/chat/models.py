from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from django.conf import settings



# Create your models here.
class Conversation(models.Model):
    initiator = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, related_name='convo_starter')
    receiver = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, related_name='convo_participant')
    # is_activate = models.BooleanField(default=False, null=True, blank=True, verbose_name='Is Activate')
    start_time = models.DateTimeField(auto_now_add=True, verbose_name='Time stamp')

    def __str__(self):
        return f'{self.initiator.first_name} {self.initiator.last_name} vs {self.receiver.first_name} {self.receiver.last_name}'


class Message(models.Model):
      sender = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, related_name='message_sender')
      text = models.CharField(max_length=200, blank=True, verbose_name='Text')
      attachment = models.FileField(blank=True, null=True, verbose_name='File Uploaded')
      conversation_id = models.ForeignKey(Conversation, on_delete=models.CASCADE, verbose_name='Conversation Identity')
      timestamp = models.DateTimeField(auto_now_add=True, verbose_name='Time stamp')

      class Meta:
            ordering = ('-timestamp',)
