""" DJango DRF Serializers """
from rest_framework import serializers
from django.contrib.auth.models import Group
from home.models import CustumUsers


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
            'img',
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
        fields = ["id", "username", "first_name", "last_name", "img"]

    def update(self, instance, validated_data):
        """Update Jobs"""
        instance.username = validated_data.get("username", instance.username)
        instance.first_name = validated_data.get(
            "first_name",
            instance.first_name
            )
        instance.last_name = validated_data.get(
            "last_name",
            instance.last_name
        )
        if instance.img == None:
            instance.img = self.context.get("img")
        else:
            instance.img = validated_data.get("img", instance.img)
        instance.save()
        return instance
