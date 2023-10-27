""" API URLS """
from django.urls import path
from api.views import (
    # UserSigInUpViews,
    # UserSigInViews,
    # UserProfilesViews,
    # change_password,
    # UserUpdateView,
    ProductListview,
    ProductDetailView,
    # UserLoginViews,
    # CheckSmsCode,
    # RegisterUserAPIView,
    # CaptchaView,
    JobsListview,
    JobsDetailView,
    JobsSendResumeview,
)

urlpatterns = [
    # path('user_sign_up_views/', UserSigInUpViews.as_view()),
    # path('user_sign_in_views/', UserSigInViews.as_view()),
    # path('user_profiles_views/', UserProfilesViews.as_view()),
    # path('change_password/', change_password, name='change_password'),
    # path('user_update_view/', UserUpdateView.as_view()),
    path('product_list/', ProductListview.as_view()),
    path('product_detail/<int:pro_ic>/', ProductDetailView.as_view()),
    # sms
    # path('user_login/', UserLoginViews.as_view()),
    # path('check_sms_code/', CheckSmsCode.as_view()),
    # path('register/', RegisterUserAPIView.as_view(), name='register'),
    # path('captcha/', CaptchaView.as_view(), name='captcha'),
    # Jobs Urls
    path('jobs_list_view/', JobsListview.as_view()),
    path('jobs_detail_view/<int:job_id>/', JobsDetailView.as_view()),
    path('jobs_send_resume_view/', JobsSendResumeview.as_view()),
    
]
