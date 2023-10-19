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

class UserSignInViews(APIView):
    render_classes = [UserRenderers]
    def post(self, request, format=None):
        serializers = UserSigInInSerializers(data=request.data, partial=True)
        if serializers.is_valid(raise_exception=True):
            username = request.data["username"]
            password = request.data["password"]
            user = authenticate(username=username, password=password)
            if user is not None:
                tokens = get_token_for_user(user)
                return Response(
                    {"token": tokens, "message": "Welcome to the system !"},
                    status=status.HTTP_200_OK,
                )
            else:
                return Response(
                    {
                        "error": {
                            "none_filed_error": [
                                "No such user exists"
                            ]
                        }
                    },
                    status=status.HTTP_404_NOT_FOUND,
                )
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        user = User.objects.filter(id=request.user.id)[0]
        code_s = str(random.randint(10000, 99999))
        print(code_s)
        send_sms(user.username, code_s)
        us = SmsCode(user_id=request.user, sms_code=code_s)
        us.save()
        return Response({"message": "SMS code sent"})

class CheckSmsCode(APIView):
    render_classes = [UserRenderers]
    perrmisson_class = [IsAuthenticated]

    def post(self, request):
        sms_code = request.data["sms_code"]
        if sms_code == "":
            context = {"Code not entered"}
            return Response(context, status=status.HTTP_401_UNAUTHORIZED)
        user = SmsCode.objects.latest("id")
        if int(sms_code) == int(user.sms_code):
            context = {"Welcome to the system !"}
            return Response(context, status=status.HTTP_200_OK)
        else:
            return Response({"error": "SMS code error"})
