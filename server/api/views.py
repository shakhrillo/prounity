""" Django DRF Packaging """
from django.contrib.auth import authenticate
import random
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User, Group
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.exceptions import Throttled
from api.pagination import StandardResultsSetPagination
from api.renderers import UserRenderers
from captcha.models import CaptchaStore
from captcha.helpers import captcha_image_url
from api.throttle import UserLoginRateThrottle
from api.servise import send_sms
from home.models import Product, SmsCode, Jobs
from api.serializers import (
    UserCreateSerializer,
    UserInformationSerializers,
    UserSigInInSerializers,
    ProductListSerializer,
    ProductSerializer,
    UserLoginCaptchaSerializers,
    JobsSerializer,
    JobsCreateSerializer,
)


# JWT token refresh
def get_token_for_user(user):
    """Django Authe token"""
    refresh = RefreshToken.for_user(user)
    return {"refresh": str(refresh), "access": str(refresh.access_token)}


class CaptchaView(APIView):
    """Captcha class"""

    def get(self, request):
        """GET token"""
        captcha = CaptchaStore.generate_key()
        captcha_url = captcha_image_url(captcha)
        return Response({"captcha_key": captcha, "captcha_url": captcha_url})

    def post(self, request):
        """Login captcha"""
        serializer = UserLoginCaptchaSerializers(data=request.data)
        if serializer.is_valid():
            username = request.data["username"]
            password = request.data["password"]
            captcha_key = serializer.validated_data["captcha"]
            try:
                captcha = CaptchaStore.objects.get(hashkey=captcha_key)
                user = authenticate(username=username, password=password)
                if captcha.hashkey == serializer.validated_data["captcha"]:
                    tokens = get_token_for_user(user)
                    return Response(
                        {
                            "success": "CAPTCHA verified successfully",
                            "token": tokens,
                        },
                        status=status.HTTP_200_OK,
                    )
                else:
                    return Response(
                        {"error": "CAPTCHA verification failed."},
                        status=status.HTTP_400_BAD_REQUEST,
                    )
            except CaptchaStore.DoesNotExist:
                return Response(
                    {"error": "CAPTCHA key not found."},
                    status=status.HTTP_400_BAD_REQUEST,
                )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# SMS Sign In
class UserLoginViews(APIView):
    render_classes = [UserRenderers]

    def post(self, request):
        """Sign In views"""
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
        """Random sms code"""
        try:
            user_objects = User.objects.get(id=request.user.id)
        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        sms_random = str(random.randint(10000, 99999))
        send_sms(user_objects.username, sms_random)
        code_save = SmsCode(user_id=request.user, sms_code=sms_random)
        code_save.save()
        return Response({"message": "SMS code sent"})


class CheckSmsCode(APIView):
    """Chack SMS class"""

    render_classes = [UserRenderers]
    perrmisson_class = [IsAuthenticated]

    def post(self, request):
        """Chack sms code verification"""

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


# Regsiter user Google reCaptcha
class RegisterUserAPIView(APIView):
    """reaCaptcha class views"""

    serializer_class = UserCreateSerializer
    throttle_classes = (UserLoginRateThrottle,)

    def perform_create(self, serializer):
        """POST save user"""
        serializer.save()

    def throttled(self, request, wait):
        """Captcha token verification"""
        raise Throttled(
            detail={
                "message": "recaptcha_required",
            }
        )


# via JWT token autentification
class UserSigInUpViews(APIView):
    """Login User class"""

    render_classes = [UserRenderers]

    def post(self, request):
        """POST login views"""
        username = request.data["username"]
        password = request.data["password"]
        first_name = request.data["first_name"]
        last_name = request.data["last_name"]
        if username == "":
            context = {"Tel Raqam Kiritilmadi"}
            return Response(context, status=status.HTTP_401_UNAUTHORIZED)
        us = User.objects.filter(username=username)
        if len(us) != 0:
            return Response(
                {"error": "Bunday foydalanuvchi mavjud"},
                status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION,
            )
        my_user = User.objects.create(
            username=username, first_name=first_name, last_name=last_name
        )
        my_user.set_password(password)
        my_user.save()
        gr = Group.objects.get(name='users')
        my_user.groups.add(gr)
        token = get_token_for_user(my_user)
        return Response({"msg": token}, status=status.HTTP_200_OK)

    def put(self, request):
        """Random sms code"""
        user_objects = User.objects.filter(id=request.user.id)[0]
        sms_random = str(random.randint(10000, 99999))
        send_sms(user_objects.username, sms_random)
        code_save = SmsCode(user_id=request.user, sms_code=sms_random)
        code_save.save()
        return Response({"message": "SMS code sent"})


class UserSigInViews(APIView):
    """Register User class"""

    render_classes = [UserRenderers]

    def post(self, request):
        """POST regsiter views"""
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
                        "none_filed_error": ["This user is not available to the system"]
                    }
                },
                status=status.HTTP_404_NOT_FOUND,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserProfilesViews(APIView):
    """User Pofiles classs"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """User information views"""
        serializer = UserInformationSerializers(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)


# Product CRUD
class ProductListview(APIView):
    """Product GET and POST class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """Product GET views"""
        queryset = Product.objects.all()
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """Product POST views"""
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
    """Product GET,PUT And Delete Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request, pro_ic):
        """Product GET deteile views"""
        queryset = get_object_or_404(Product, id=pro_ic)
        serializer = ProductSerializer(queryset)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pro_ic):
        """Product Update deteile views"""
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
        """Product DELETE deteile views"""
        queryset = get_object_or_404(Product, id=pro_ic)
        queryset.delete()
        return Response({"msg": "Deleted"}, status=status.HTTP_200_OK)


# Jobs CRUD
class JobsListview(APIView):
    """Product GET and POST class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]
    pagination_class = StandardResultsSetPagination
    serializer_class = JobsSerializer

    @property
    def paginator(self):
        if not hasattr(self, "_paginator"):
            if self.pagination_class is None:
                self._paginator = None
            else:
                self._paginator = self.pagination_class()
        else:
            pass
        return self._paginator

    def paginate_queryset(self, queryset):
        if self.paginator is None:
            return None
        return self.paginator.paginate_queryset(queryset, self.request, view=self)

    def get_paginated_response(self, data):
        assert self.paginator is not None
        return self.paginator.get_paginated_response(data)

    def get(self, request):
        instance = Jobs.objects.all().order_by("pk")
        page = self.paginate_queryset(instance)
        if page is not None:
            serializer = self.get_paginated_response(
                self.serializer_class(page, many=True).data
            )
        else:
            serializer = self.serializer_class(instance, many=True)
        return Response(
            {"data": serializer.data, "page_number": self.paginator.page_size},
            status=status.HTTP_200_OK,
        )

    def post(self, request):
        """Jobs POST views"""
        serializer = JobsCreateSerializer(
            data=request.data,
            context={
                "author_id": request.user,
            },
        )
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class JobsDetailView(APIView):
    """Jobs GET,PUT And Delete Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request, job_id):
        """Jobs GET deteile views"""
        queryset = get_object_or_404(Jobs, id=job_id)
        serializer = JobsSerializer(queryset)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, job_id):
        """Product Update views"""
        queryset = get_object_or_404(Jobs, id=job_id)
        serializer = JobsCreateSerializer(
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

    def delete(self, request, job_id):
        objects_get = Jobs.objects.get(id=job_id)
        objects_get.delete()
        return Response({"message": "Delete success"}, status=status.HTTP_200_OK)
