
from django.contrib import admin
from django.urls import path, include

from django.conf.urls.static import static
from django.conf import settings

from rest_framework_simplejwt import views as jwt_views
from django.views.generic import TemplateView
from drf_spectacular.views import SpectacularAPIView


urlpatterns = [
    path("schema/", SpectacularAPIView.as_view(), name="schema"),
    path('admin/', admin.site.urls),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),

    path('docs/', TemplateView.as_view(
        template_name='doc.html',
        extra_context={'schema_url':'api_schema'}
        ), name='swagger-ui'),


    path('v1/api/', include('api.urls')),
    path('v1/chat/', include('chat.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

