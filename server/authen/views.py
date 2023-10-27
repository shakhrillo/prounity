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
from authen.renderers import UserRenderers
from authen.servise import send_sms
from home.models import SmsCode, CustumUsers
from authen.serializers import (
    UserInformationSerializers,
    UserSigInSerializers,
    ChangePasswordSerializer,
    UserUpdateSerializers,
)


# JWT token refresh
def get_token_for_user(user):
    """Django Authe token"""
    refresh = RefreshToken.for_user(user)
    return {
        "refresh": str(refresh),
        "access": str(refresh.access_token)}


class UserSigInViews(APIView):
    render_classes = [UserRenderers]

    def post(self, request):
        """Sign In views"""
        serializers = UserSigInSerializers(data=request.data, partial=True)
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
            user_objects = CustumUsers.objects.get(id=request.user.id)
        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        sms_random = str(random.randint(10000, 99999))
        send_sms(user_objects.username, sms_random)
        code_save = SmsCode(user_id=request.user, sms_code=sms_random)
        code_save.save()
        return Response({"message": "SMS code sent"})


class UserSignUpViews(APIView):
    """Login User class"""

    render_classes = [UserRenderers]

    def post(self, request):
        """POST login views"""
        username = request.data["username"]
        email = request.data["email"]
        password = request.data["password"]
        first_name = request.data["first_name"]
        last_name = request.data["last_name"]
        if username == "":
            context = {"Tel Raqam Kiritilmadi"}
            return Response(context, status=status.HTTP_401_UNAUTHORIZED)
        user_name = CustumUsers.objects.filter(username=username)
        if len(user_name) != 0:
            return Response(
                {"error": "Bunday foydalanuvchi mavjud"},
                status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION,
            )
        user_email = CustumUsers.objects.filter(email=email)
        if len(user_email) != 0:
            return Response(
                {"error": "Bunday E-mail foydalanuvchi mavjud"},
                status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION,
            )
        my_user = CustumUsers.objects.create(
            username=username,
            first_name=first_name,
            last_name=last_name,
            email=email,
        )
        my_user.set_password(password)
        my_user.save()
        gr = Group.objects.get(name='users')
        my_user.groups.add(gr)
        token = get_token_for_user(my_user)
        return Response({"msg": token}, status=status.HTTP_200_OK)

    def put(self, request):
        """Random sms code"""
        user_objects = CustumUsers.objects.filter(id=request.user.id)[0]
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


class UserUpdateView(APIView):
    """User PUT Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def put(self, request):
        """User Update views"""
        queryset = get_object_or_404(CustumUsers, id=request.user.id)
        serializer = UserUpdateSerializers(
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


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def change_password(request):
    if request.method == 'POST':
        serializer = ChangePasswordSerializer(data=request.data)
        if serializer.is_valid():
            user = request.user
            if user.check_password(serializer.data.get('old_password')):
                user.set_password(serializer.data.get('new_password'))
                user.save()
                update_session_auth_hash(request, user)
                return Response(
                    {'message': 'Password changed successfully.'},
                    status=status.HTTP_200_OK
                )
            return Response(
                {'error': 'Incorrect old password.'},
                status=status.HTTP_400_BAD_REQUEST
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
        