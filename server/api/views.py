""" Django DRF Packaging """
from django.contrib.auth import authenticate
import random
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.exceptions import Throttled
from api.throttle import UserLoginRateThrottle
from api.servise import send_sms
from home.models import Product, SmsCode
from api.renderers import UserRenderers
from api.serializers import (
    UserCreateSerializer,
    UserInformationSerializers,
    UserSigInUpSerializers,
    UserSigInInSerializers,
    ProductListSerializer,
    ProductSerializer,

)


# JWT token refresh
def get_token_for_user(user):
    """ Django Authe token """
    refresh = RefreshToken.for_user(user)
    return {"refresh": str(refresh), "access": str(refresh.access_token)}


# login sms
class UserLoginViews(APIView):
    """ Login SMS """
    render_classes = [UserRenderers]

    def post(self, request):
        """ Sign In views """
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
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        """ Random sms code """
        user_objects = User.objects.filter(id=request.user.id)[0]
        sms_random = str(random.randint(10000, 99999))
        send_sms(user_objects.username, sms_random)
        code_save = SmsCode(user_id=request.user, sms_code=sms_random)
        code_save.save()
        return Response({"message": "SMS code sent"})


class CheckSmsCode(APIView):
    """ Chack SMS class """
    render_classes = [UserRenderers]
    perrmisson_class = [IsAuthenticated]

    def post(self, request):
        """ Chack sms code verification """
        sms_code = request.data["sms_code"]
        if sms_code == "":
            context = {"Code not entered"}
            return Response(context, status=status.HTTP_401_UNAUTHORIZED)
        code_objects = SmsCode.objects.latest("id")
        if int(sms_code) == int(code_objects.sms_code):
            context = {"Welcome to the system !"}
            return Response(context, status=status.HTTP_200_OK)
        return Response({"error": "SMS code error"})


# Regsiter user Google reCaptcha
class RegisterUserAPIView(APIView):
    """ reaCaptcha class views """
    serializer_class = UserCreateSerializer
    throttle_classes = (UserLoginRateThrottle,)

    def perform_create(self, serializer):
        """ POST save user """
        serializer.save()

    def throttled(self, request, wait):
        """ Captcha token verification """
        raise Throttled(
            detail={
                "message": "recaptcha_required",
            }
        )


# via JWT token autentification
class UserSigInUpViews(APIView):
    """ Login User class """
    render_classes = [UserRenderers]

    def post(self, request):
        """ POST login views """
        serializer = UserSigInUpSerializers(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserSigInViews(APIView):
    """ Register User class """
    render_classes = [UserRenderers]

    def post(self, request):
        """ POST regsiter views """
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
    """ User Pofiles classs """
    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """ User information views """
        serializer = UserInformationSerializers(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)


# Product CRUD
class ProductListview(APIView):
    """ Product GET and POST class """
    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """ Product GET views """
        queryset = Product.get_user_product(request.user)
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """ Product POST views """
        serializer = ProductListSerializer(
            data=request.data,
            context={
                "author": request.user,
            },
        )
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductDetailView(APIView):
    """ Product GET,PUT And Delete Class """
    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request, pro_ic):
        """ Product GET deteile views """
        queryset = get_object_or_404(Product, id=pro_ic)
        serializer = ProductSerializer(queryset)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pro_ic):
        """ Product Update deteile views """
        queryset = get_object_or_404(Product, id=pro_ic)
        serializer = ProductListSerializer(
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

    def delete(self, request, pro_ic):
        """ Product DELETE deteile views """
        queryset = get_object_or_404(Product, id=pro_ic)
        queryset.delete()
        return Response({"msg": "Deleted"}, status=status.HTTP_200_OK)
