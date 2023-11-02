""" Django models libraries """
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from api.models import CustomUser


class CreasteUser(UserCreationForm):
    """User Creation Form"""

    class Meta(UserCreationForm):
        """Meta"""

        model = CustomUser
        fields = ("username", "first_name", "last_name", "password")


class ChangeUser(UserChangeForm):
    """User Change Form"""

    class Meta(UserChangeForm):
        """Meta"""

        model = CustomUser
        fields = ("first_name", "last_name", "password")
