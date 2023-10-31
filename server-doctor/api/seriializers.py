""" DJango DRF Serializers """
from rest_framework import serializers
from django.contrib.auth.models import Group, User
from django.contrib.auth.password_validation import validate_password
from .models import SmsCode, DoctorCategories

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
        fields = ["id", "username", "first_name", "last_name", "password", "password2"]
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


class DoctorCategoriesListSerializers(serializers.ModelSerializer):

    class Meta:
        model = DoctorCategories
        fields = ['id', 'name', 'user']

    def create(self, validated_data):
        create = DoctorCategories.objects.create(**validated_data)
        for i in self.context['get_list']:
            create.user.add(i)
        create.save()
        return create

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        for i in self.context.get('get_list'):
            instance.user.add(i)
        instance.save()
        return instance


class DoctorCategoriesDetailSerializers(serializers.ModelSerializer):
    user = UserInformationSerializers(read_only=True, many=True)

    class Meta:
        model = DoctorCategories
        fields = ['id', 'name', 'user']
