""" Django DRF Packaging """
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import update_session_auth_hash
import random
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User, Group
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from api.renderers import UserRenderers
from shop_news.models import BayDrugs
from consultation.models import *
from consultation.serializers import * 

class ConsultationListViews(APIView):
    """Consultation List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """Consultation GET views"""
        objects_list = Consultation.objects.filter(user_id=request.user.id).order_by('pk')
        serializer = ConsultationSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        """Consultation POST views"""
        serializer = ConsultationPostSerializers(
        data=request.data,
        context={
                "user_id": request.user,
            },
        )
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ConsultationHistoryListViews(APIView):
    """Consultation List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request, pk):
        """Consultation GET views"""
        objects_list = Consultation.objects.filter(user_id=pk).order_by('pk')
        serializer = ConsultationSerializers(objects_list, many=True)
        return Response({'history': serializer.data}, status=status.HTTP_200_OK)


class ConsultationUSerHistoryViews(APIView):
    """Consultation List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """Consultation GET views"""
        objects_list = Consultation.objects.filter(user_id=request.user.id).order_by('pk')
        serializer = ConsultationSerializers(objects_list, many=True)
        return Response({'history': serializer.data}, status=status.HTTP_200_OK)