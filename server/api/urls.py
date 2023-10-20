""" API URLS """
from django.urls import path
from api.views import (
    UserSigInUpViews,
    UserSigInViews,
    UserProfilesViews,
    ProductListview,
    ProductDetailView,
    UserLoginViews,
    CheckSmsCode,
    RegisterUserAPIView,
)

urlpatterns = [
    path('user_sign_up_views/', UserSigInUpViews.as_view()),
    path('user_sign_in_views/', UserSigInViews.as_view()),
    path('user_profiles_views/', UserProfilesViews.as_view()),
    path('product_list/', ProductListview.as_view()),
    path('product_detail/<int:pro_ic>/', ProductDetailView.as_view()),
    # sms
    path('user_login/', UserLoginViews.as_view()),
    path('check_sms_code/', CheckSmsCode.as_view()),
    path('register/', RegisterUserAPIView.as_view(), name='register'),
]
