""" Django Libraries """
from django.contrib.auth import authenticate
from django.shortcuts import get_object_or_404, redirect, reverse
from django.db.models import Q
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination

from .models import *
from .seriializers import *
from .renderers import *
from .utils import *
from .pagination import *

import random, datetime


def get_token_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
      "refresh": str(refresh),
      "access": str(refresh.access_token)}


class UserSigInUpViews(APIView):
    """ Views """
    render_classes = [UserRenderers]

    def post(self, request):
        serializer = UserSigInUpSerializers(data=request.data, context={'avatar' : request.FILES.get('avatar', None)})
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserRegisterViews(APIView):
    """ Views """
    render_classes = [UserRenderers]
    perrmisson_class = [IsAuthenticated]

    def post(self, request):
        serializer = UserSigInUpSerializers(data=request.data, context={'avatar' : request.FILES.get('avatar', None)})
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserSigInViews(APIView):
    """ Views """
    render_classes = [UserRenderers]

    def post(self, request):
        serializer = UserSigInInSerializers(data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            username = request.data["username"]
            password = request.data["password"]
            user = authenticate(username=username, password=password)
            if user is not None:
                tokens = get_token_for_user(user)
                # sms_random = str(random.randint(10000, 99999))
                # send_sms(user.username, sms_random)
                # code_save = SmsCode(user_id=request.user, sms_code=sms_random)
                # code_save.save()
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


class CheckSmsCode(APIView):
    """ Views """
    render_classes = [UserRenderers]
    perrmisson_class = [IsAuthenticated]

    def post(self, request):
        sms_code = request.data["sms_code"]
        if sms_code == "":
            context = {"Code not entered"}
            return Response(context, status=status.HTTP_401_UNAUTHORIZED)
        code_objects = SmsCode.objects.latest("id")
        if int(sms_code) == int(code_objects.sms_code):
            context = {"Welcome to the system !"}
            return Response(context, status=status.HTTP_200_OK)
        return Response(
            {"error": "SMS code error"},
            status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION,
        )


class UserProfilesViews(APIView):
    """ Views """
    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        serializer = UserInformationSerializers(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserDetailsViews(APIView):
    """ Views """
    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request, id):
        queryset = get_object_or_404(CustomUser, id=id)
        serializers = UserInformationSerializers(queryset)
        return Response(serializers.data, status=status.HTTP_200_OK)

    def put(self, request, id):
        queryset = get_object_or_404(CustomUser, id=id)
        serializers = UserSigInUpSerializers(instance=queryset, data=request.data, partial=True, context={'avatar':request.FILES.get('avatar', None)})
        if serializers.is_valid(raise_exception=True):
            serializers.save()
            return Response(serializers.data, status=status.HTTP_200_OK)
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        queryset = get_object_or_404(CustomUser, id=id).delete()
        return Response({'msg': 'User Deleted'}, status=status.HTTP_202_ACCEPTED)


class BasicPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 1000


class UserGroupsDoctorViews(APIView, PaginationHandlerMixin):
    """ Views """
    pagination_class = BasicPagination
    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request, format=None, *args, **kwargs):
        instance = CustomUser.objects.prefetch_related('groups').filter(groups__name__in=['Doctor'])
        page = self.paginate_queryset(instance)
        if page is not None:
            serializer = self.get_paginated_response(UserInformationSerializers(page, many=True).data)
        else:
            serializer = UserInformationSerializers(instance, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserGroupsPatientViews(APIView, PaginationHandlerMixin):
    """ Views """
    render_classes = [UserRenderers]
    permission = [IsAuthenticated]
    pagination_class = BasicPagination

    def get(self, request, format=None, *args, **kwargs):
        instance = CustomUser.objects.prefetch_related('groups').filter(groups__name__in=['Patient'])
        page = self.paginate_queryset(instance)
        if page is not None:
            serializer = self.get_paginated_response(UserInformationSerializers(page, many=True).data)
        else:
            serializer = UserInformationSerializers(instance, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CategoriesList(APIView):
    """ Views """
    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        queryset = DoctorCategories.objects.all()
        serializers = DoctorCategoriesDetailSerializers(queryset, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializers = DoctorCategoriesListSerializers(data=request.data)
        if serializers.is_valid(raise_exception=True):
            serializers.save()
            return Response(serializers.data, status=status.HTTP_201_CREATED)
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)


class CategoriesDetail(APIView):
    """ Views """
    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request, id):
        queryset = get_object_or_404(DoctorCategories, id=id)
        serializers = DoctorCategoriesDetailSerializers(queryset)
        return Response(serializers.data, status=status.HTTP_200_OK)

    def put(self, request, id):
        queryset = get_object_or_404(DoctorCategories, id=id)
        serializers = DoctorCategoriesListSerializers(instance=queryset, data=request.data, partial=True)
        if serializers.is_valid(raise_exception=True):
            serializers.save()
            return Response(serializers.data, status=status.HTTP_200_OK)
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        queryset = get_object_or_404(DoctorCategories, id=id)
        queryset.delete()
        return Response({'msg':'Category deleted'},status=status.HTTP_200_OK)