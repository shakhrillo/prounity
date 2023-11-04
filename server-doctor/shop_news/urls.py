from django.urls import path
from shop_news.views import (
    NewsListViews,
    NewsCRUDViews,
    DrugsListViews,
    DrugsCRUDViews,
    BayDrugsListViews,
    HistoryBayDrugsListViews,
    HistoryUserBayDrugsListViews,
    UserCardListViews,
    # banner
    BannerLoginListViews,
    BannerLoginCrudViews,
    BannerLoginAppViews,
    BannerMainListViews,
    BannerMainCrudViews,
    BannerMainAppViews,
)


urlpatterns = [
    path("news_list_views/", NewsListViews.as_view()),
    path("news_crud_views/<int:new_id>/", NewsCRUDViews.as_view()),
    # drugs
    path("drugs_list_views/", DrugsListViews.as_view()),
    path("drugs_crud_views/<int:pk>/", DrugsCRUDViews.as_view()),
    path("bay_drugs_list_views/", BayDrugsListViews.as_view()),
    path(
        "history_bay_drugs_list_views/<int:pk>/",
        HistoryBayDrugsListViews.as_view()
    ),
    path(
        "history_user_bay_drugs_list/",
        HistoryUserBayDrugsListViews.as_view()
    ),
    path("user_card_list_views/", UserCardListViews.as_view()),
    # banner
    path('banner_login_list_views/', BannerLoginListViews.as_view()),
    path('banner_login_crud_views/<int:pk>/', BannerLoginCrudViews.as_view()),
    path('banner_login_app_views/', BannerLoginAppViews.as_view()),
    path('banner_main_list_views/', BannerMainListViews.as_view()),
    path('banner_main_crud_views/<int:pk>/', BannerMainCrudViews.as_view()),
    path('banner_main_app_views/', BannerMainAppViews.as_view()),
]
