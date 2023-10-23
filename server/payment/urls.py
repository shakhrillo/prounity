from django.urls import path
from .views import ProductPreview, CreateCheckOutSession, stripe_webhook_view, successView, PaymentTarifsList, PaymantCard
from django.views.decorators.csrf import csrf_exempt

urlpatterns=[
    path('payment_tariff/', PaymentTarifsList.as_view()),
    path('stripe_webhook/', stripe_webhook_view, name='stripe-webhook'),
    path('sucess_view/', successView, name='sucess_view'),
    path('product/<int:pk>/', ProductPreview.as_view(), name="product"),
    path('create-checkout-session/<pk>/', csrf_exempt(CreateCheckOutSession.as_view()), name='checkout_session'),
    path('payment-with-stripe/', PaymantCard.as_view())
    ]
