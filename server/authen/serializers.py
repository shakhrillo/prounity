""" DJango DRF Serializers """
from rest_framework import serializers
from django.contrib.auth.models import Group
from authen.facebook import facebook
from authen.google import *
from authen.register import register_social_user
from home.models import CustumUsers, PhoneCode
import os
from rest_framework.exceptions import AuthenticationFailed

from authen.models import (
    Currency,
    Frequency,
    ExpeectedSalary,
    EmployemntType,
    JobLevel,
    JobFuncation,
    WorkExperience,
    # Education
    EduAttinment,
    Education,
    # Porject
    Accocitaed,
    Projects,
    # Sertification Licenses
    SertificationLicenses,

)


'''
=========
User CRUD Serializers
==========
'''


class FacebookSocialAuthSerializer(serializers.Serializer):
    """Handles serialization of facebook related data"""
    auth_token = serializers.CharField()

    def validate_auth_token(self, auth_token):
        user_data = facebook.Facebook.validate(auth_token)

        try:
            user_id = user_data['id']
            email = user_data['email']
            name = user_data['name']
            provider = 'facebook'
            return register_social_user(
                provider=provider,
                user_id=user_id,
                email=email,
                name=name
            )
        except Exception as identifier:

            raise serializers.ValidationError(
                'The token  is invalid or expired. Please login again.'
            )


class GoogleSocialAuthSerializer(serializers.Serializer):
    auth_token = serializers.CharField()

    def validate_auth_token(self, auth_token):
        user_data = google.Google.validate(auth_token)
        try:
            user_data['sub']
        except:
            raise serializers.ValidationError(
                'The token is invalid or expired. Please login again.'
            )

        if user_data['aud'] != os.environ.get('GOOGLE_CLIENT_ID'):

            raise AuthenticationFailed('oops, who are you?')

        user_id = user_data['sub']
        email = user_data['email']
        name = user_data['name']
        provider = 'google'

        return register_social_user(
            provider=provider, user_id=user_id, email=email, name=name)


class UserGroupsSerializers(serializers.ModelSerializer):
    """Groups User Serializers"""

    class Meta:
        """Groups User Fields"""

        model = Group
        fields = ("id", "name")


class UserInformationSerializers(serializers.ModelSerializer):
    """User Profiles Serializers"""

    groups = UserGroupsSerializers(read_only=True, many=True)

    class Meta:
        """User Model Fileds"""

        model = CustumUsers
        fields = [
            "id",
            "username",
            "first_name",
            "last_name",
            "email",
            "img",
            "summary",
            "groups"
            ]


class UserSigInSerializers(serializers.Serializer):
    """User Login Serializers"""

    username = serializers.CharField(max_length=50, min_length=2)
    password = serializers.CharField(max_length=50, min_length=1)

    class Meta:
        """User Model Fileds"""

        model = CustumUsers
        fields = ("username", "password")
        read_only_fields = "username"


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)


class UserUpdateSerializers(serializers.ModelSerializer):
    """User Profiles Serializers"""

    img = serializers.ImageField(
        max_length=None,
        allow_empty_file=False,
        allow_null=False,
        use_url=False,
        required=False,
    )

    class Meta:
        """User Model Fileds"""

        model = CustumUsers
        fields = [
            "id",
            "username",
            "first_name",
            "last_name",
            "img",
            "summary"
        ]

    def update(self, instance, validated_data):
        """Update Jobs"""
        instance.username = validated_data.get("username", instance.username)
        instance.summary = validated_data.get("summary", instance.summary)
        instance.first_name = validated_data.get(
            "first_name",
            instance.first_name
            )
        instance.last_name = validated_data.get(
            "last_name",
            instance.last_name
        )
        if instance.img is not None:
            instance.img = self.context.get("img")
        else:
            instance.img = validated_data.get("img", instance.img)
        instance.save()
        return instance


class PhoneCodeSerializers(serializers.ModelSerializer):
    """User Profiles Serializers"""

    class Meta:
        """User Model Fileds"""

        model = PhoneCode
        fields = [
            "id",
            "name",
            "dial_code",
            "emoji",
            "code",
            ]


'''
=========
User Information Serializers
==========
'''


class CurrencySerializers(serializers.ModelSerializer):
    """Currency Serializers"""

    class Meta:
        """Currency Fields"""

        model = Currency
        fields = ("id", "name")


class FrequencySerializers(serializers.ModelSerializer):
    """Frequency Serializers"""

    class Meta:
        """Frequency Fields"""

        model = Frequency
        fields = ("id", "name")


class JobLevelSerializers(serializers.ModelSerializer):
    """JobLevel Serializers"""

    class Meta:
        """JobLevel Fields"""

        model = JobLevel
        fields = ("id", "name")


class JobFuncationSerializers(serializers.ModelSerializer):
    """JobFuncation Serializers"""

    class Meta:
        """JobFuncation Fields"""

        model = JobFuncation
        fields = ("id", "name")


class EmployemntTypeSerializers(serializers.ModelSerializer):
    """EmployemntType Serializers"""

    class Meta:
        """EmployemntType Fields"""

        model = EmployemntType
        fields = ("id", "name")


class EduAttinmentSerializers(serializers.ModelSerializer):
    """Education Attinment Serializers"""

    class Meta:
        """Education Attinment Fields"""

        model = EduAttinment
        fields = ("id", "name")


class AccocitaedSerializers(serializers.ModelSerializer):
    """Accocitaed Serializers"""

    class Meta:
        """Accocitaed Fields"""

        model = Accocitaed
        fields = ("id", "name")


class ExpeectedSalarySerializers(serializers.ModelSerializer):
    """ExpeectedSalary Serializers"""

    currcency_id = CurrencySerializers(read_only=True)
    frequency_id = FrequencySerializers(read_only=True)
    user_id = UserInformationSerializers(read_only=True)

    class Meta:
        """ExpeectedSalary Fields"""
        model = ExpeectedSalary
        fields = (
            "id",
            "min_summ",
            "max_summ",
            "currcency_id",
            "frequency_id",
            "user_id",
            "create_date"
        )


class ExpeectedSalaryCrudSerializers(serializers.ModelSerializer):
    """Expeected Salary CRUD Serializers"""

    class Meta:
        """ExpeectedSalary Fields"""
        model = ExpeectedSalary
        fields = (
            "min_summ",
            "max_summ",
            "currcency_id",
            "frequency_id",
        )

    def create(self, validated_data):
        """Create ExpeectedSalary"""

        create = ExpeectedSalary.objects.create(**validated_data)
        create.user_id = self.context.get("user_id")
        create.save()
        return create

    def update(self, instance, validated_data):
        """Update ExpeectedSalary"""
        instance.min_summ = validated_data.get("min_summ", instance.min_summ)
        instance.max_summ = validated_data.get("max_summ", instance.max_summ)
        instance.currcency_id = validated_data.get(
            "currcency_id",
            instance.currcency_id
        )
        instance.frequency_id = validated_data.get(
            "frequency_id",
            instance.frequency_id
        )
        instance.save()
        return instance


class WorkExperienceSerializers(serializers.ModelSerializer):
    """WorkExperience Serializers"""

    currcency_id = CurrencySerializers(read_only=True)
    frequency_id = FrequencySerializers(read_only=True)
    employemnt_type = EmployemntTypeSerializers(read_only=True)
    job_level = JobLevelSerializers(read_only=True)
    job_funcation = JobFuncationSerializers(read_only=True)
    user_id = UserInformationSerializers(read_only=True)

    class Meta:
        """WorkExperience Fields"""
        model = WorkExperience
        fields = (
            "id",
            "job_title",
            "company",
            "location",
            "salary",
            "files",
            "from_date",
            "to_date",
            "description",
            "currcency_id",
            "frequency_id",
            "employemnt_type",
            "job_level",
            "job_funcation",
            "user_id",
            "create_date",
        )


class WorkExperienceCrudSerializers(serializers.ModelSerializer):
    """Work Experience CRUD Serializers"""
    files = serializers.FileField(
        max_length=None,
        allow_empty_file=False,
        allow_null=False,
        use_url=False,
        required=False,
    )

    class Meta:
        """Work Experience CRUD Fields"""
        model = WorkExperience
        fields = (
            "id",
            "job_title",
            "company",
            "location",
            "salary",
            "files",
            "from_date",
            "to_date",
            "description",
            "currcency_id",
            "frequency_id",
            "employemnt_type",
            "job_level",
            "job_funcation",
            "user_id",
            "create_date",
        )

    def create(self, validated_data):
        """Create Work Experience"""

        create = WorkExperience.objects.create(**validated_data)
        create.user_id = self.context.get("user_id")
        create.save()
        return create

    def update(self, instance, validated_data):
        """Update Work Experience"""
        instance.job_title = validated_data.get(
            "job_title", instance.job_title)
        instance.company = validated_data.get("company", instance.company)
        instance.location = validated_data.get("location", instance.location)
        instance.salary = validated_data.get("salary", instance.salary)
        instance.from_date = validated_data.get(
            "from_date", instance.from_date)
        instance.to_date = validated_data.get("to_date", instance.to_date)
        instance.description = validated_data.get(
            "description", instance.description)
        instance.employemnt_type = validated_data.get(
            "employemnt_type", instance.employemnt_type)
        instance.job_level = validated_data.get(
            "job_level", instance.job_level)
        instance.job_funcation = validated_data.get(
            "job_funcation", instance.job_funcation)
        instance.currcency_id = validated_data.get(
            "currcency_id",
            instance.currcency_id
        )
        instance.frequency_id = validated_data.get(
            "frequency_id",
            instance.frequency_id
        )
        if instance.files is not None:
            instance.img = self.context.get("files")
        else:
            instance.img = validated_data.get("files", instance.img)
        instance.save()
        return instance


# Education
class EducationSerializers(serializers.ModelSerializer):
    """Education Serializers"""

    edu_attainment = EduAttinmentSerializers(read_only=True)
    user_id = UserInformationSerializers(read_only=True)

    class Meta:
        """Education Fields"""
        model = Education
        fields = (
            "id",
            "edu_attainment",
            "course",
            "school",
            "from_date",
            "to_date",
            "is_graduated",
            "gpa",
            "scale",
            "description",
            "user_id",
            "create_date",
        )


class EducationCrudSerializers(serializers.ModelSerializer):
    """Education CRUD Serializers"""
    files = serializers.FileField(
        max_length=None,
        allow_empty_file=False,
        allow_null=False,
        use_url=False,
        required=False,
    )

    class Meta:
        """Education Fields"""
        model = Education
        fields = (
            "edu_attainment",
            "course",
            "school",
            "from_date",
            "to_date",
            "is_graduated",
            "gpa",
            "scale",
            "description",
            "user_id",
        )

    def create(self, validated_data):
        """Create Education"""

        create = Education.objects.create(**validated_data)
        create.user_id = self.context.get("user_id")
        create.save()
        return create

    def update(self, instance, validated_data):
        """Update Education"""
        instance.edu_attainment = validated_data.get(
            "edu_attainment", instance.edu_attainment)
        instance.course = validated_data.get("course", instance.course)
        instance.school = validated_data.get("school", instance.school)
        instance.from_date = validated_data.get(
            "from_date", instance.from_date
        )
        instance.to_date = validated_data.get(
            "to_date", instance.to_date
        )
        instance.is_graduated = validated_data.get(
            "is_graduated", instance.is_graduated
        )
        instance.gpa = validated_data.get(
            "gpa", instance.gpa)
        instance.description = validated_data.get(
            "description", instance.description)
        if instance.files is not None:
            instance.img = self.context.get("files")
        else:
            instance.img = validated_data.get("files", instance.img)
        instance.save()
        return instance


# Projects
class ProjectsSerializers(serializers.ModelSerializer):
    """Projects Serializers"""

    associated_id = AccocitaedSerializers(read_only=True)
    user_id = UserInformationSerializers(read_only=True)

    class Meta:
        """Projects Fields"""
        model = Projects
        fields = (
            "id",
            "project_name",
            "role",
            "from_date",
            "to_date",
            "is_current",
            "description",
            "project_url",
            "associated_id",
            "user_id",
            "create_date"
        )


class ProjectsCrudSerializers(serializers.ModelSerializer):
    """Projects CRUD Serializers"""

    class Meta:
        """Projects Fields"""
        model = Projects
        fields = (
            "project_name",
            "role",
            "from_date",
            "to_date",
            "is_current",
            "description",
            "project_url",
            "associated_id",
            "user_id",
        )

    def create(self, validated_data):
        """Create Project"""

        create = Projects.objects.create(**validated_data)
        create.user_id = self.context.get("user_id")
        create.save()
        return create

    def update(self, instance, validated_data):
        """Update Project"""
        instance.project_name = validated_data.get(
            "project_name", instance.project_name)
        instance.role = validated_data.get(
            "role", instance.role
        )
        instance.from_date = validated_data.get(
            "from_date", instance.from_date
        )
        instance.to_date = validated_data.get(
            "to_date", instance.to_date
        )
        instance.is_current = validated_data.get(
            "is_current", instance.is_current
        )
        instance.description = validated_data.get(
            "description", instance.description
        )
        instance.project_url = validated_data.get(
            "project_url", instance.project_url
        )
        instance.associated_id = validated_data.get(
            "associated_id", instance.associated_id
        )
        instance.save()
        return instance


# Sertification Licenses
class SertificationLicensesSerializers(serializers.ModelSerializer):
    """Sertification Licenses Serializers"""

    user_id = UserInformationSerializers(read_only=True)

    class Meta:
        """Sertification Licenses Fields"""
        model = SertificationLicenses
        fields = (
            "id",
            "title",
            "organization",
            "issue_date",
            "expration_date",
            "is_active",
            "credential_id",
            "credential_url",
            "user_id",
            "create_date",
        )


class SertificationLicensesCrudSerializers(serializers.ModelSerializer):
    """Sertification Licenses CRUD Serializers"""

    class Meta:
        """Sertification Licenses Fields"""
        model = SertificationLicenses
        fields = (
            "title",
            "organization",
            "issue_date",
            "expration_date",
            "is_active",
            "credential_id",
            "credential_url",
            "user_id",
        )

    def create(self, validated_data):
        """Create Sertification Licenses"""

        create = SertificationLicenses.objects.create(**validated_data)
        create.user_id = self.context.get("user_id")
        create.save()
        return create

    def update(self, instance, validated_data):
        """Update Project"""
        instance.title = validated_data.get(
            "title", instance.title)
        instance.organization = validated_data.get(
            "organization", instance.organization
        )
        instance.issue_date = validated_data.get(
            "issue_date", instance.issue_date
        )
        instance.expration_date = validated_data.get(
            "expration_date", instance.expration_date
        )
        instance.is_active = validated_data.get(
            "is_active", instance.is_active
        )
        instance.credential_id = validated_data.get(
            "credential_id", instance.credential_id
        )
        instance.credential_url = validated_data.get(
            "credential_url", instance.credential_url
        )
        instance.save()
        return instance
