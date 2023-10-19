from django.urls import path
import api.views as views
from api.login_sms import *

urlpatterns = [
    path('user_sign_up_views/', views.UserSigInUpViews.as_view()),
    path('user_sign_in_views/', views.UserSigInViews.as_view()),
    path('user_profiles_views/', views.UserProfilesViews.as_view()),
    path('product_list/', views.ProductListview.as_view()),
    path('product_detail/<int:pk>/', views.ProductDetailView.as_view()),

    #sms
    path('user_login/',UserSignInViews.as_view()),
    path('check_sms_code/',CheckSmsCode.as_view()),

     path('register/',
         views.RegisterUserAPIView.as_view(), name='register'),
]
