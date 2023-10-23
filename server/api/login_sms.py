from django.contrib.auth import authenticate
from django.shortcuts import get_object_or_404
from rest_framework import status
from django.contrib.auth.models import User
import random
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from api.renderers import UserRenderers
from api.serializers import UserSigInInSerializers
from api.servise import send_sms
from eskiz_sms import EskizSMS
from home.models import SmsCode

def get_token_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {"refresh": str(refresh), "access": str(refresh.access_token)}


