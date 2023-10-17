from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from api.renderers import UserRenderers
from api.serializers import *

def get_token_for_user(user):
  refresh = RefreshToken.for_user(user)
  return {
    'refresh': str(refresh),
    'accsess': str(refresh.access_token)
  }

''' User sig_in and sigin_up '''
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
    def post(self,request,format=None):
        serializers = UserSiginInSerializers(data=request.data, partial=True)
        if serializers.is_valid(raise_exception=True):
            username = request.data['username']
            password = request.data['password']
            user = authenticate(username=username,password=password)
            if user is not None:
                tokens = get_token_for_user(user)
                return Response({'token':tokens,'message':'Welcome to the system'},status=status.HTTP_200_OK)
            else:
                return Response({'error':{'none_filed_error':['This user is not available to the system']}},status=status.HTTP_404_NOT_FOUND)
        return Response(serializers.errors,status=status.HTTP_400_BAD_REQUEST)

class UserProfilesViews(APIView):
    render_classes = [UserRenderers]
    perrmisson_class = [IsAuthenticated]
    def get(self,request,format=None):  
        serializer = UserInformationSerializers(request.user)
        return Response(serializer.data,status=status.HTTP_200_OK)