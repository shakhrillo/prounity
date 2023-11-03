""" Django DRF Packaging """
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from api.renderers import UserRenderers
from consultation.models import Consultation
from consultation.serializers import (
    ConsultationSerializers,
    ConsultationPostSerializers,
)


class ConsultationListViews(APIView):
    """Consultation List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """Consultation GET views"""
        objects_list = Consultation.objects.filter(user_id=request.user.id)
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


class ConsultationCrudViews(APIView):
    """Consultation CRUD Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request, pk):
        """Consultation GET views"""
        objects_list = Consultation.objects.filter(
            id=pk
        )
        serializer = ConsultationSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        """Consultation Update views"""
        queryset = get_object_or_404(Consultation, id=pk)
        serializer = ConsultationPostSerializers(
            instance=queryset,
            data=request.data,
            partial=True,
        )
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(
            {"error": "update error data"}, status=status.HTTP_400_BAD_REQUEST
        )

    def delete(self, request, pk):
        """Expeected Salary Delete views"""
        objects_get = Consultation.objects.get(id=pk)
        objects_get.delete()
        return Response(
            {"message": "Delete success"},
            status=status.HTTP_200_OK
        )


class ConsultationHistoryListViews(APIView):
    """Consultation List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request, pk):
        """Consultation GET views"""
        objects_list = Consultation.objects.filter(user_id=pk).order_by("pk")
        serializer = ConsultationSerializers(objects_list, many=True)
        return Response(
            {"history": serializer.data},
            status=status.HTTP_200_OK
        )


class ConsultationUSerHistoryViews(APIView):
    """Consultation List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """Consultation GET views"""
        objects_list = Consultation.objects.filter(user_id=request.user.id)
        serializer = ConsultationSerializers(objects_list, many=True)
        return Response(
            {"history": serializer.data},
            status=status.HTTP_200_OK
        )
