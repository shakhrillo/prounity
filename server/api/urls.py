from django.urls import (path)
from api.views import (
    UserSigInViews,
    UserSigInUpViews,
    UserProfilesViews,
    ProductListview,
    ProductDetailView
)

urlpatterns = [
    path('user_sign_up_views/', UserSigInUpViews.as_view()),
    path('user_sign_in_views/', UserSigInViews.as_view()),
    path('user_profiles_views/', UserProfilesViews.as_view()),
    path('product_list/', ProductListview.as_view()),
    path('product_detail/<int:identify>/', ProductDetailView.as_view()),
]
