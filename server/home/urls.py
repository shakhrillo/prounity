from django.urls import path
from home.views import *

urlpatterns = [
    path('',sigin_in,name='sigin_in'),
    path('sigin_up/',sigin_up,name='sigin_up'),
    path('logout_user/',logout_user,name='logout_user'),
    path('home/',home,name='home'),
    path('create_product/',create_product,name='create_product'),
    path('delete_product/<int:pk>/',delete_product,name='delete_product'),
    path('update_product/<int:pk>/',update_product,name='update_product'),
]