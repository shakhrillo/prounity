
from django.contrib.auth import authenticate
from django.shortcuts import get_object_or_404, redirect, reverse
from django.db.models import Q
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view

from .models import *
from .seriializers import *
from .renderers import *
from .utils import *


def get_token_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
      "refresh": str(refresh),
      "access": str(refresh.access_token)}


class UserSigInUpViews(APIView):
    render_classes = [UserRenderers]

    def post(self, request):
        serializer = UserSigInUpSerializers(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserSigInViews(APIView):
    render_classes = [UserRenderers]

    def post(self, request):
        serializer = UserSigInInSerializers(data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            username = request.data["username"]
            password = request.data["password"]
            user = authenticate(username=username, password=password)
            if user is not None:
                tokens = get_token_for_user(user)
                return Response(
                    {"token": tokens, "message": "Welcome to the system"},
                    status=status.HTTP_200_OK,
                )
            else:
                return Response(
                    {
                        "error": {
                            "none_filed_error": [
                                "This user is not available to the system"
                            ]
                        }
                    },
                    status=status.HTTP_404_NOT_FOUND,
                )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserProfilesViews(APIView):
    render_classes = [ren.UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        serializer = ser.UserInformationSerializers(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)