from django.urls import path
import api.views as views

urlpatterns = [
    path('user_sign_up_views/', views.UserSigInUpViews.as_view()),
    path('user_sign_in_views/', views.UserSigInViews.as_view()),
    path('user_profiles_views/', views.UserProfilesViews.as_view()),
    path('product_list/', views.ProductListview.as_view()),
    path('product_detail/<int:identify>/', views.ProductDetailView.as_view()),
]
