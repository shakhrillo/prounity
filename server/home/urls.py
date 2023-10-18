from django.urls import path
from home.views import (
    sigin_in,
    sigin_up,
    logout_user,
    home,
    create_product,
    delete_product,
    update_product,
    user_profiles,
    user_update,
    user_username_update,
    user_password_update,

)

urlpatterns = [
    path("", sigin_in, name="sigin_in"),
    path("sigin_up/", sigin_up, name="sigin_up"),
    path("logout_user/", logout_user, name="logout_user"),
    path("home/", home, name="home"),
    path("create_product/", create_product, name="create_product"),
    path("delete_product/<int:Id>/", delete_product, name="delete_product"),
    path("update_product/<int:pk>/", update_product, name="update_product"),
    path('user_profiles/',user_profiles,name='user_profiles'),
    path('user_update/',user_update,name='user_update'),
    path('user_username_update/',user_username_update,name='user_username_update'),
    path('user_password_update/',user_password_update,name='user_password_update'),

]
