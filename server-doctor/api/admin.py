from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *
from .form import *


class NewMyUser(UserAdmin):
    add_form = CreasteUser
    form = ChangeUser
    model = CustomUser
    list_display = ['username', 'first_name', 'last_name', 'id',]
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('price', 'reviews', 'description', 'categories_id', 'avatar')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('price', 'reviews', 'description', 'categories_id', 'avatar')}),
    )

admin.site.register(CustomUser, NewMyUser)

@admin.register(DoctorCategories)
class SectorAdmin(admin.ModelAdmin):
    list_display = ('name','id')


@admin.register(SmsCode)
class SectorAdmin(admin.ModelAdmin):
    list_display = ('sms_code','date','id','user_id')
