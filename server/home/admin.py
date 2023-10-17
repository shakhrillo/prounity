from django.contrib import admin
from .models import *


@admin.register(Product)
class PostAdmin(admin.ModelAdmin):
    list_display = ['id', 'product_name', 'created_at']
