""" Django urls settings """
from django.urls import path
from home.views import (
    sign_in,
    sign_up,
    logout_user,
    home,
    create_product,
    delete_product,
    update_product,
    user_profiles,
    user_update,
    username_update,
    password_update,
    recaptcha_view,
)

urlpatterns = [
    path("", sign_in, name="sigin_in"),
    path("sign_up/", sign_up, name="sigin_up"),
    path("logout_user/", logout_user, name="logout_user"),
    path("home/", home, name="home"),
    path("create_product/", create_product, name="create_product"),
    path("delete_product/<int:pr_id>/", delete_product, name="delete_product"),
    path("update_product/<int:pr_id>/", update_product, name="update_product"),
    path("user_profiles/", user_profiles, name="user_profiles"),
    path("user_update/", user_update, name="user_update"),
    path("username_update/", username_update, name="user_username_update"),
    path("password_update/", password_update, name="user_password_update"),
    path("recaptcha_view/", recaptcha_view, name="recaptcha_view"),
]
