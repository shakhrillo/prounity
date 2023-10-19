from django.contrib import admin
from .models import *
from chat import models

@admin.register(Product)
class PostAdmin(admin.ModelAdmin):
    list_display = ['id', 'product_name', 'created_at']

admin.site.register(models.Conversation)
admin.site.register(models.Message)
admin.site.register(SmsCode)