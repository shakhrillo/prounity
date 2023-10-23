''' Django settings admin '''
from django.contrib import admin
from home.models import Product, SmsCode
from chat.models import Conversation, Message


@admin.register(Product)
class PostAdmin(admin.ModelAdmin):
    ''' Admin post news '''
    list_display = ['id', 'product_name', 'created_at']


admin.site.register(Conversation)
admin.site.register(Message)
admin.site.register(SmsCode)

