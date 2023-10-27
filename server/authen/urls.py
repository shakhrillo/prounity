from django.urls import path
from authen.views import (
    UserSigInViews,
    UserSignUpViews,
    CheckSmsCode,
    UserUpdateView,
    change_password,
    UserProfilesViews,
)

urlpatterns = [
    path('user_sigin_views/', UserSigInViews.as_view()),
    path('user_signup_views/', UserSignUpViews.as_view()),
    path('check_sms_code/', CheckSmsCode.as_view()),
    path('user_update_view/', UserUpdateView.as_view()),
    path('change_password/', change_password, name='change_password'),
    path('user_profiles_views/', UserProfilesViews.as_view()),

]