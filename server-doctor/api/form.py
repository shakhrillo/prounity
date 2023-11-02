from django.contrib.auth.forms import UserCreationForm,UserChangeForm
from .models import *


class CreasteUser(UserCreationForm):
   class Meta(UserCreationForm):
        model = CustomUser
        fields = ('username','first_name','last_name','password')


class ChangeUser(UserChangeForm):
    class Meta(UserChangeForm):
        model = CustomUser
        fields = ('first_name','last_name','password')