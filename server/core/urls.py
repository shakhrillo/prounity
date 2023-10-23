from django.contrib import admin
from django.urls import path, include, re_path
from django.views.static import serve
from django.conf.urls.static import static
from django.conf import settings
from rest_framework_simplejwt import views as jwt_views
from django.views.generic import TemplateView
from drf_spectacular.views import SpectacularAPIView
from captcha import urls as captcha_urls


urlpatterns = [
    path("schema/", SpectacularAPIView.as_view(), name="schema"),
    path('docs/', TemplateView.as_view(
        template_name='doc.html',
        extra_context={'schema_url': 'api_schema'}
        ), name='swagger-ui'),
    path('api/captcha/', include(captcha_urls)),
    path('admin/', admin.site.urls),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('', include('home.urls')),
    path('api/', include('api.urls')),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += [re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT, }), ]