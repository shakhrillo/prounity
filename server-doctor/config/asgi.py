import os

from channels.routing import URLRouter, ProtocolTypeRouter
from channels.security.websocket import AllowedHostsOriginValidator  # new
from django.core.asgi import get_asgi_application
import chat.routing
from .tokenauth_middleware import TokenAuthMiddleware  # new

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AllowedHostsOriginValidator(  # new
        TokenAuthMiddleware(URLRouter(chat.routing.websocket_urlpatterns)))
})