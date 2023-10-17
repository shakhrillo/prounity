from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework_simplejwt.tokens import RefreshToken
from .renderers import UserRenderers
from .serializers import *
from home.models import *


def get_token_for_user(user):
  refresh = RefreshToken.for_user(user)
  return {
    'refresh': str(refresh),
    'accsess': str(refresh.access_token)
  }


class UserSiginUpViews(APIView):
  render_classes = [UserRenderers]

  def post(self, request):
    serializers = UserSiginUpSerializers(data=request.data)
    if serializers.is_valid(raise_exception=True):
      serializers.save()
      return Response(serializers.data, status=status.HTTP_201_CREATED)
    return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)


class UserSiginInViews(APIView):
  render_classes = [UserRenderers]

  def post(self, request, format=None):
    serializers = UserSiginInSerializers(data=request.data, partial=True)
    if serializers.is_valid(raise_exception=True):
      username = request.data['username']
      password = request.data['password']
      user = authenticate(username=username, password=password)
      if user is not None:
        tokens = get_token_for_user(user)
        return Response({'token': tokens, 'message': 'Welcome to the system'}, status=status.HTTP_200_OK)
      else:
        return Response({'error': {'none_filed_error': ['This user is not available to the system']}},
                        status=status.HTTP_404_NOT_FOUND)
    return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)


class UserProfilesViews(APIView):
  render_classes = [UserRenderers]
  perrmisson_class = [IsAuthenticated]

  def get(self, request, format=None):
    serializer = UserInformationSerializers(request.user)
    return Response(serializer.data, status=status.HTTP_200_OK)


class ProductListview(APIView):
  render_classes = [UserRenderers]
  perrmisson_class = [IsAuthenticated]

  def get(self, request, format=None):
    queryset = Product.get_user_product(request.user)
    serializers = ProductDeatilSerializer(queryset, many=True)
    return Response(serializers.data, status=status.HTTP_200_OK)

  def post(self, request, format=None):
    serializer = ProductListSerializer(
      data=request.data,
      context={
        'author': request.user,
      })
    if serializer.is_valid(raise_exception=True):
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductDetailView(APIView):
  render_classes = [UserRenderers]
  perrmisson_class = [IsAuthenticated]

  def get(self, request, id, format=None):
    queryset = get_object_or_404(Product, id=id)
    serializers = ProductDeatilSerializer(queryset)
    return Response(serializers.data, status=status.HTTP_200_OK)

  def put(self, request, id, format=None):
    queryset = get_object_or_404(Product, id=id)
    serializers = ProductListSerializer(
      instance=queryset,
      data=request.data,
      partial=True, )
    if serializers.is_valid(raise_exception=True):
      serializers.save()
      return Response(serializers.data, status=status.HTTP_200_OK)
    return Response({'error': 'update error data'}, status=status.HTTP_400_BAD_REQUEST)

  def delete(self, request, id, format=None):
    queryset = get_object_or_404(Product, id=id).delete()
    return Response({'msg': 'Deleted'}, status=status.HTTP_200_OK)
