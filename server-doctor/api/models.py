from django.db import models
from django.contrib.auth.models import User

class SmsCode(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    sms_code = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True)