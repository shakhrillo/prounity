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
from home.models import SmsCode, CustumUsers, PhoneCode
from authen.models import (
    Currency,
    Frequency,
    ExpeectedSalary,
    EmployemntType,
    JobLevel,
    JobFuncation,
    WorkExperience,
    EduAttinment,
    Education,
    Accocitaed,
    Projects,
    SertificationLicenses,

)
from authen.serializers import (
    UserInformationSerializers,
    UserSigInSerializers,
    ChangePasswordSerializer,
    UserUpdateSerializers,
    PhoneCodeSerializers,
    # User information
    CurrencySerializers,
    FrequencySerializers,
    ExpeectedSalarySerializers,
    ExpeectedSalaryCrudSerializers,
    JobLevelSerializers,
    JobFuncationSerializers,
    EmployemntTypeSerializers,
    WorkExperienceSerializers,
    WorkExperienceCrudSerializers,
    # education
    EduAttinmentSerializers,
    EducationSerializers,
    EducationCrudSerializers,
    # project
    AccocitaedSerializers,
    ProjectsSerializers,
    ProjectsCrudSerializers,
    # Sertification Licenses
    SertificationLicensesSerializers,
    SertificationLicensesCrudSerializers,
    FacebookSocialAuthSerializer,
    GoogleSocialAuthSerializer,

)


# JWT token refresh
def get_token_for_user(user):
    """Django Authe token"""
    refresh = RefreshToken.for_user(user)
    return {
        "refresh": str(refresh),
        "access": str(refresh.access_token)}


'''
=========
User CRUD Views
==========
'''


class GoogleSocialAuthView(APIView):

    serializer_class = GoogleSocialAuthSerializer

    def post(self, request):
        """

        POST with "auth_token"

        Send an idtoken as from google to get user information

        """

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = ((serializer.validated_data)['auth_token'])
        return Response(data, status=status.HTTP_200_OK)


class FacebookSocialAuthView(APIView):

    serializer_class = FacebookSocialAuthSerializer

    def post(self, request):
        """

        POST with "auth_token"

        Send an access token as from facebook to get user information

        """

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = ((serializer.validated_data)['auth_token'])
        return Response(data, status=status.HTTP_200_OK)


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


class PhoneCodeViews(APIView):
    """User Pofiles classs"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """User information views"""
        objects_list = PhoneCode.objects.all().order_by('pk')
        serializer = PhoneCodeSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


'''
=========
User Information Views
==========
'''


class CurrencyListViews(APIView):
    """Currency List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """Currency views"""
        objects_list = Currency.objects.all().order_by('pk')
        serializer = CurrencySerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class FrequencyListViews(APIView):
    """Frequency List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """Frequency views"""
        objects_list = Frequency.objects.all().order_by('pk')
        serializer = FrequencySerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class EmployemntTypeListViews(APIView):
    """Employemnt Type List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """Employemnt Type views"""
        objects_list = EmployemntType.objects.all().order_by('pk')
        serializer = EmployemntTypeSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class JobLevelListViews(APIView):
    """Job Level List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """Job Level views"""
        objects_list = JobLevel.objects.all().order_by('pk')
        serializer = JobLevelSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class JobFuncationListViews(APIView):
    """Job Funcation List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """Job Funcation views"""
        objects_list = JobFuncation.objects.all().order_by('pk')
        serializer = JobFuncationSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class EduAttinmentListViews(APIView):
    """Education Attinmentn List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """Education Attinmentn views"""
        objects_list = EduAttinment.objects.all().order_by('pk')
        serializer = EduAttinmentSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class AccocitaedListViews(APIView):
    """Accocitaed List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """Accocitaed views"""
        objects_list = Accocitaed.objects.all().order_by('pk')
        serializer = AccocitaedSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ExpeectedSalaryListViews(APIView):
    """Expected Salary List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """Expected Salary views"""
        objects_list = ExpeectedSalary.objects.filter(user_id=request.user.id)
        serializer = ExpeectedSalarySerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """Expected POST views"""
        serializer = ExpeectedSalaryCrudSerializers(
            data=request.data,
            context={
                "user_id": request.user,
            },
        )
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ExpeectedSalaryCRUDViews(APIView):
    """Expected Salary CRUD Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request, exs_id):
        """Expected Salary GET views"""
        objects_list = ExpeectedSalary.objects.filter(
            id=exs_id,
            user_id=request.user.id
        )
        serializer = ExpeectedSalarySerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, exs_id):
        """Expected Salary Update views"""
        queryset = get_object_or_404(ExpeectedSalary, id=exs_id)
        serializer = ExpeectedSalaryCrudSerializers(
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

    def delete(self, request, exs_id):
        """Expeected Salary Delete views"""
        objects_get = ExpeectedSalary.objects.get(id=exs_id)
        objects_get.delete()
        return Response(
            {"message": "Delete success"},
            status=status.HTTP_200_OK
        )


class WorkExperienceListViews(APIView):
    """Work Experience List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """Work Experience views"""
        objects_list = WorkExperience.objects.filter(user_id=request.user.id)
        serializer = WorkExperienceSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """Work Experience POST views"""
        serializer = WorkExperienceCrudSerializers(
            data=request.data,
            context={
                "user_id": request.user,
            },
        )
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class WorkExperienceCrudViews(APIView):
    """Work Experience CRUD Classs"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request, ex_id):
        """Work Experience GET views"""
        objects_list = WorkExperience.objects.filter(
            id=ex_id,
            user_id=request.user.id
        )
        serializer = WorkExperienceSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, ex_id):
        """Work Experience Update views"""
        queryset = get_object_or_404(WorkExperience, id=ex_id)
        serializer = WorkExperienceCrudSerializers(
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

    def delete(self, request, ex_id):
        """Work Experience Delete Views"""
        objects_get = WorkExperience.objects.get(id=ex_id)
        objects_get.delete()
        return Response(
            {"message": "Delete success"},
            status=status.HTTP_200_OK
        )


# Education
class EducationListViews(APIView):
    """Education List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """Education views"""
        objects_list = Education.objects.filter(user_id=request.user.id)
        serializer = EducationSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """Education POST Views"""
        serializer = EducationCrudSerializers(
            data=request.data,
            context={
                "user_id": request.user,
            },
        )
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EducationCrudViews(APIView):
    """Education CRUD Classs"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request, edu_id):
        """Education GET views"""
        objects_list = Education.objects.filter(
            id=edu_id,
            user_id=request.user.id
        )
        serializer = EducationSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, edu_id):
        """Work Experience Update views"""
        queryset = get_object_or_404(Education, id=edu_id)
        serializer = EducationCrudSerializers(
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

    def delete(self, request, edu_id):
        """Education Delete Views"""
        objects_get = Education.objects.get(id=edu_id)
        objects_get.delete()
        return Response(
            {"message": "Delete success"},
            status=status.HTTP_200_OK
        )


# Projects
class ProjectsListViews(APIView):
    """Projects List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """Projects views"""
        objects_list = Projects.objects.filter(user_id=request.user.id)
        serializer = ProjectsSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """Project POST Views"""
        serializer = ProjectsCrudSerializers(
            data=request.data,
            context={
                "user_id": request.user,
            },
        )
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProjectCrudViews(APIView):
    """Project CRUD Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request, porject_id):
        """Project GET views"""
        objects_list = Projects.objects.filter(
            id=porject_id,
            user_id=request.user.id
        )
        serializer = ProjectsSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, porject_id):
        """Project Update views"""
        queryset = get_object_or_404(Projects, id=porject_id)
        serializer = ProjectsCrudSerializers(
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

    def delete(self, request, porject_id):
        """Projects Delete Views"""
        objects_get = Projects.objects.get(id=porject_id)
        objects_get.delete()
        return Response(
            {
                "message": "Delete success"
            },
            status=status.HTTP_200_OK
        )


# Sertification Licenses
class SertificationLicensesViews(APIView):
    """Sertification Licenses List Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request):
        """Sertification Licenses views"""
        objects_list = SertificationLicenses.objects.filter(
            user_id=request.user.id
        )
        serializer = SertificationLicensesSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """Sertification Licenses POST Views"""
        serializer = SertificationLicensesCrudSerializers(
            data=request.data,
            context={
                "user_id": request.user,
            },
        )
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SertificationLicensesCrudViews(APIView):
    """Sertification Licenses CRUD Class"""

    render_classes = [UserRenderers]
    permission = [IsAuthenticated]

    def get(self, request, ser_id):
        """Sertification Licenses GET views"""
        objects_list = SertificationLicenses.objects.filter(
            id=ser_id,
            user_id=request.user.id
        )
        serializer = SertificationLicensesSerializers(objects_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, ser_id):
        """Sertification Licenses Update views"""
        queryset = get_object_or_404(Projects, id=ser_id)
        serializer = SertificationLicensesCrudSerializers(
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

    def delete(self, request, ser_id):
        """Sertification Licenses Delete Views"""
        objects_get = SertificationLicenses.objects.get(id=ser_id)
        objects_get.delete()
        return Response(
            {
                "message": "Delete success"
            },
            status=status.HTTP_200_OK
        )
