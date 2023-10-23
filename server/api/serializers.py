""" DJango DRF Serializers """
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import password_validation
from django.utils.translation import gettext_lazy as _
from home.models import Product


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

from home.models import *
from rest_framework import serializers


class UserInformationSerializers(serializers.ModelSerializer):
    """User Profiles Serializers"""

    class Meta:
        """User Model Fileds"""

        model = User
        fields = ["id", "username", "first_name", "last_name"]


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
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        """User Model Fileds"""

        model = User
        fields = ["id", "username", "first_name", "last_name"]
        extra_kwargs = {
            "first_name": {"required": True},
            "last_name": {"required": True},
        }

    def validate(self, attrs):
        """Validate Password"""
        if attrs["password"] != attrs["password2"]:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."}
            )
        return attrs

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
