from django.contrib import admin
from .models import *


@admin.register(Posts)
class PostAdmin(admin.ModelAdmin):
    list_display = ['id','title','created_at']
