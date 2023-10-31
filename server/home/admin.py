""" Django settings admin """
from django.contrib import admin
from home.resource import ReportResource
from home.models import Product, SmsCode, Jobs, JobsResum, CustumUsers, PhoneCode
from chat.models import Conversation, Message
from django.contrib.auth.admin import UserAdmin
from home.forms import CreasteUser, ChangeUser


class NewMyUser(UserAdmin):
    add_form = CreasteUser
    form = ChangeUser
    model = CustumUsers
    list_display = ["id", "username", "first_name", "last_name"]
    fieldsets = UserAdmin.fieldsets + (
        (
            None,
            {
                "fields": (
                    "img",
                    "summary",
                )
            },
        ),
    )
    add_fieldsets = (
        (
            None,
            {
                "fields": (
                    "username",
                    "password1",
                    "password2",
                )
            },
        ),
    )


admin.site.register(CustumUsers, NewMyUser)


@admin.register(Product)
class PostAdmin(admin.ModelAdmin):
    """Admin post news"""

    list_display = [
        "id",
        "product_name",
        "created_at",
    ]


admin.site.register(Conversation)
admin.site.register(Message)
admin.site.register(SmsCode)
admin.site.register(Jobs)
admin.site.register(JobsResum)
admin.site.register(PhoneCode)