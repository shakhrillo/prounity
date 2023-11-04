""" Django Libraries """
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from api.models import CustomUser, DoctorCategories, SmsCode, CountryList
from api.form import ChangeUser, CreasteUser


class NewMyUser(UserAdmin):
    """ New User """
    add_form = CreasteUser
    form = ChangeUser
    model = CustomUser
    list_display = [
        "username",
        "first_name",
        "last_name",
        "id",
    ]
    fieldsets = UserAdmin.fieldsets + (
        (
            None,
            {"fields": (
                "price",
                "reviews",
                "description",
                "categories_id",
                "avatar",
                "online_status"
            )},
        ),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        (
            None,
            {"fields": (
                "price",
                "reviews",
                "description",
                "categories_id",
                "avatar",
                "online_status"
            )},
        ),
    )


admin.site.register(CustomUser, NewMyUser)


@admin.register(DoctorCategories)
class DoctorCategoriesAdmin(admin.ModelAdmin):
    """ Doctor Categories """
    list_display = ("name", "id")


@admin.register(SmsCode)
class SmsCodeAdmin(admin.ModelAdmin):
    """ SMS Code """
    list_display = ("sms_code", "date", "id", "user_id")


@admin.register(CountryList)
class CountryListAdmin(admin.ModelAdmin):
    """ SMS Code """
    list_display = ("id", "name", "dial_code")
