from django.urls import path
from api.views import *

urlpatterns = [
    path('user_sigin_up_views/',UserSiginUpViews.as_view()),
    path('user_sigin_in_views/',UserSiginInViews.as_view()),
    path('user_profiles_views/',UserProfilesViews.as_view()),


]