""" Django Libraries """
from django.urls import path
from . import views

urlpatterns = [
    path('country_list_views/', views.CountryListViews.as_view()),
    path('user_sign_up_views/', views.UserSigInUpViews.as_view()),
    path('user_sign_in_views/', views.UserSigInViews.as_view()),
    path('user_profiles_views/', views.UserProfilesViews.as_view()),

    path('user_details_views/<int:id>/', views.UserDetailsViews.as_view()),

    path('user_group_doctor_views/', views.UserGroupsDoctorViews.as_view()),
    path('user_group_patient_views/', views.UserGroupsPatientViews.as_view()),

    path('user_create_views/', views.UserRegisterViews.as_view()),

    path('check_sms_code/', views.CheckSmsCode.as_view()),

    path('doctor-categories-list/', views.CategoriesList.as_view()),
    path('doctor-categories-detail/<int:id>/', views.CategoriesDetail.as_view()),

]