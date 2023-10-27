""" DJango DRF Serializers """
from rest_framework import serializers
from django.contrib.auth.models import User, Group
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import password_validation
from django.utils.translation import gettext_lazy as _
from home.models import Product, Jobs, JobsResum


class UserGroupsSerializers(serializers.ModelSerializer):
    """Groups User Serializers"""

    class Meta:
        """Groups User Fields"""

        model = Group
        fields = ("id", "name")


class UserLoginCaptchaSerializers(serializers.Serializer):
    """User Login Serializers"""

    username = serializers.CharField(max_length=50, min_length=2)
    password = serializers.CharField(max_length=50, min_length=1)
    captcha = serializers.CharField()

    class Meta:
        """User Model Fileds"""

        model = User
        fields = ("username", "password")
        read_only_fields = "username"


class UserCreateSerializer(serializers.ModelSerializer):
    """Google reCaptcha"""

    class Meta:
        """User Model Fileds"""

        model = User
        fields = ("id", "username", "password")

    def validate_password(self, value):
        """Validate Password"""
        user = self.context["request"].user
        password_validation.validate_password(value, user)
        return value

    def create(self, validated_data):
        """Validate Password"""
        user = User.objects.create_user(**validated_data)
        return user


class UserInformationSerializers(serializers.ModelSerializer):
    """User Profiles Serializers"""

    groups = UserGroupsSerializers(read_only=True, many=True)

    class Meta:
        """User Model Fileds"""

        model = User
        fields = ["id", "username", "first_name", "last_name", "email", "groups"]


class UserSigInUpSerializers(serializers.ModelSerializer):
    """User Regsiter Serializers"""

    username = serializers.CharField(
        max_length=255,
        min_length=5,
        required=True,
    )
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password]
    )

    class Meta:
        """User Model Fileds"""

        model = User
        fields = ["id", "username", "first_name", "last_name", "password"]
        extra_kwargs = {
            "first_name": {"required": True},
            "last_name": {"required": True},
        }

    def create(self, validated_data):
        """User Create"""
        user = User.objects.create(
            username=validated_data["username"],
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"],
        )
        user.set_password(validated_data["password"])
        user.save()
        return user


class UserSigInInSerializers(serializers.Serializer):
    """User Login Serializers"""

    username = serializers.CharField(max_length=50, min_length=2)
    password = serializers.CharField(max_length=50, min_length=1)

    class Meta:
        """User Model Fileds"""

        model = User
        fields = ("username", "password")
        read_only_fields = "username"


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)


class UserUpdateSerializers(serializers.ModelSerializer):
    """User Profiles Serializers"""

    class Meta:
        """User Model Fileds"""

        model = User
        fields = ["id", "username", "first_name", "last_name"]

    def update(self, instance, validated_data):
        """Update Jobs"""
        instance.username = validated_data.get("username", instance.username)
        instance.first_name = validated_data.get("first_name", instance.first_name)
        instance.last_name = validated_data.get("last_name", instance.last_name)
        instance.save()
        return instance


class ProductListSerializer(serializers.ModelSerializer):
    """Product Serializers"""

    class Meta:
        """Product Model Fields"""

        model = Product
        fields = [
            "id",
            "product_name",
            "product_price",
            "author",
            "created_at",
        ]

    def create(self, validated_data):
        """Create Product"""

        create = Product.objects.create(**validated_data)
        create.author = self.context.get("author")
        create.save()
        return create

    def update(self, instance, validated_data):
        """Update Product"""
        for field, value in validated_data.items():
            setattr(instance, field, value)
        instance.save()
        return instance


class ProductSerializer(serializers.ModelSerializer):
    """Product Serializers"""

    author = UserInformationSerializers(read_only=True)

    class Meta:
        """Product Model Fields"""

        model = Product
        fields = (
            "id",
            "product_name",
            "product_price",
            "author",
            "created_at",
        )


# Jobs Serializer
class JobsSerializer(serializers.ModelSerializer):
    """Jobs Serializers"""

    class Meta:
        """Jobs Model Fields"""

        model = Jobs
        fields = (
            "id",
            "name",
            "company",
            "address",
            "phone",
            "content",
            "eye",
            "author_id",
            "date",
        )


class JobsCreateSerializer(serializers.ModelSerializer):
    """Jobs Serializers"""

    class Meta:
        """Jobs Model Fields"""

        model = Jobs
        fields = (
            "id",
            "name",
            "company",
            "address",
            "phone",
            "content",
            "author_id",
            "date",
        )

    def create(self, validated_data):
        """Create Jobs"""

        create = Jobs.objects.create(**validated_data)
        create.author_id = self.context.get("author_id")
        create.save()
        return create

    def update(self, instance, validated_data):
        """Update Jobs"""
        instance.name = validated_data.get("name", instance.name)
        instance.company = validated_data.get("company", instance.company)
        instance.address = validated_data.get("address", instance.address)
        instance.phone = validated_data.get("phone", instance.phone)
        instance.content = validated_data.get("content", instance.content)
        instance.save()
        return instance


class JobsResumeSerializer(serializers.ModelSerializer):
    """Jobs Serializers"""

    class Meta:
        """Jobs Model Fields"""

        model = JobsResum
        fields = (
            "id",
            "user_id",
            "job_id",
            "resume",
            "date",
        )

    def create(self, validated_data):
        """Create Jobs"""

        create = JobsResum.objects.create(**validated_data)
        create.user_id = self.context.get("user_id")
        create.save()
        return create

    def update(self, instance, validated_data):
        """Update Jobs"""
        instance.resume = validated_data.get("resume", instance.resume)
        instance.save()
        return instance
