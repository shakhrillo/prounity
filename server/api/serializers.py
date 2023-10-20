from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from home.models import *
from rest_framework import serializers


class UserInformationSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "first_name", "last_name"]


class UserSigInUpSerializers(serializers.ModelSerializer):
    username = serializers.CharField(max_length=255, min_length=5, required=True)
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password]
    )
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ["id", "username", "first_name", "last_name"]
        extra_kwargs = {
            "first_name": {"required": True},
            "last_name": {"required": True},
        }

    def validate(self, attrs):
        if attrs["password"] != attrs["password2"]:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."}
            )
        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data["username"],
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"],
        )
        user.set_password(validated_data["password"])
        user.save()
        return user


class UserSigInInSerializers(serializers.ModelSerializer):
    username = serializers.CharField(max_length=50, min_length=2)
    password = serializers.CharField(max_length=50, min_length=1)

    class Meta:
        model = User
        fields = ["username", "password"]
        read_only_fields = ("username",)


class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            "id",
            "product_name",
            "product_price",
            "author",
            "created_at",
        ]

    def create(self, validated_data):
        print()
        return []
        # create = Product.objects.create(**validated_data)
        # create.author = self.context.get("author")
        # create.save()
        # return create

    def update(self, instance, validated_data):
        for field, value in validated_data.items():
            setattr(instance, field, value)
        instance.save()
        return instance


class ProductSerializer(serializers.ModelSerializer):
    author = UserInformationSerializers(read_only=True)

    class Meta:
        model = Product
        fields = [
            "id",
            "product_name",
            "product_price",
            "author",
            "created_at",
        ]
