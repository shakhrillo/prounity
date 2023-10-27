from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from home.models import CustumUsers


class CreasteUser(UserCreationForm):
    class Meta(UserCreationForm):
        model = CustumUsers
        fields = (
            'username',
            'first_name',
            'last_name',
            'email',
            'password'
            )


class ChangeUser(UserChangeForm):
    class Meta(UserChangeForm):
        model = CustumUsers
        fields = (
            'username',
            'first_name',
            'last_name',
            'email',
            'img',
            'password'
        )
        