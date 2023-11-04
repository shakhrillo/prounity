""" Django DRF Packaging """
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from api.renderers import UserRenderers
from shop_news.models import (
    Drugs,
    BayDrugs,
    News,
    UserCard,
)
from shop_news.serializers import (
    NewsSerializers,
    NewsPostSerializers,
    # drugs
    DrugsSerializers,
    NewsDrugsSerializers,
    BayDrugsSerializers,
    BayDrugsCrudSerializers,
    UserCardSerializers,
)


class NewsListViews(APIView):
    """News List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """News views"""
        objects_list = News.objects.all()
        serializer = NewsSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """News POST views"""
        serializer = NewsPostSerializers(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class NewsCRUDViews(APIView):
    """News CRUD Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request, new_id):
        """News GET views"""
        objects_list = News.objects.filter(id=new_id)
        serializer = NewsSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, new_id):
        """News Update views"""
        queryset = get_object_or_404(News, id=new_id)
        serializer = NewsPostSerializers(
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

    def delete(self, request, new_id):
        """News Delete views"""
        objects_get = News.objects.get(id=new_id)
        objects_get.delete()
        return Response(
            {"message": "Delete success"}, status=status.HTTP_200_OK
        )


# Drugs
class DrugsListViews(APIView):
    """Drugs List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """Drugs views"""
        objects_list = Drugs.objects.all()
        serializer = DrugsSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """Drugs POST views"""
        serializer = NewsDrugsSerializers(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DrugsCRUDViews(APIView):
    """Drugs CRUD Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request, pk):
        """Drugs GET views"""
        objects_list = Drugs.objects.filter(id=pk)
        serializer = DrugsSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        """Drugs Update views"""
        queryset = get_object_or_404(Drugs, id=pk)
        serializer = NewsDrugsSerializers(
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
        """Drugs Delete views"""
        objects_get = Drugs.objects.get(id=pk)
        objects_get.delete()
        return Response(
            {"message": "Delete success"}, status=status.HTTP_200_OK
        )


class BayDrugsListViews(APIView):
    """BayDrugs List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """BayDrugs views"""
        objects_list = BayDrugs.objects.all()
        serializer = BayDrugsSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """BayDrugs POST views"""
        serializer = BayDrugsCrudSerializers(
            data=request.data,
            context={
                "user_id": request.user,
            },
        )
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HistoryBayDrugsListViews(APIView):
    """BayDrugs List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request, pk):
        """BayDrugs views"""
        objects_list = BayDrugs.objects.filter(user_id=pk)
        serializer = BayDrugsSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class HistoryUserBayDrugsListViews(APIView):
    """BayDrugs List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """BayDrugs views"""
        objects_list = BayDrugs.objects.filter(user_id=request.user.id)
        serializer = BayDrugsSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserCardListViews(APIView):
    """UserCard List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """UserCard views"""
        objects_list = UserCard.objects.all()
        serializer = UserCardSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


