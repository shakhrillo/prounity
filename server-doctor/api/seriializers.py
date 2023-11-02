""" DJango DRF Serializers """
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import Group, User
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import authenticate
from django.conf import settings
from .models import SmsCode, DoctorCategories, CustomUser


class UserSigInUpSerializers(serializers.ModelSerializer):
    username = serializers.CharField(max_length=255, min_length=5, required=True,
                                     validators=[UniqueValidator(queryset=CustomUser.objects.all())])
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password]
    )
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = CustomUser
        fields = ["id", "username", "first_name", "last_name", "price", "reviews", "description", "categories_id", "avatar", 'password', 'password2','groups']
        extra_kwargs = {
            "first_name": {"required": True},
            "last_name": {"required": True},
        }

    def create(self, validated_data):
        user = CustomUser.objects.create(
            username=validated_data["username"],
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"],
            price=validated_data['price'],
            description=validated_data['description'],
        )
        user.set_password(validated_data["password"])
        for i in validated_data.pop('groups'):
            user.groups.add(i)

        user.avatar = self.context.get('avatar')
        user.save()
        return user

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.username = validated_data.get('username', instance.username)
        instance.price = validated_data.get('price', instance.price)
        instance.reviews = validated_data.get('reviews', instance.reviews)
        instance.description = validated_data.get('description', instance.description)
        if self.context.get('avatar') == None:
            instance.avatar = instance.avatar
        else:
            instance.avatar = self.context.get('avatar')
        instance.save()
        return instance


class UserSigInInSerializers(serializers.ModelSerializer):
    username = serializers.CharField(max_length=50, min_length=2)
    password = serializers.CharField(max_length=50, min_length=1)

    class Meta:
        model = CustomUser
        fields = ["username", "password"]
        read_only_fields = ("username",)

class UserInformationSerializerss(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["id", "username", "first_name", "last_name", "price", "reviews", "description", "categories_id", "avatar"]



class DoctorCategoriesListSerializers(serializers.ModelSerializer):

    class Meta:
        model = DoctorCategories
        fields = ['id', 'name', 'user']

    def create(self, validated_data):
        create = DoctorCategories.objects.create(**validated_data)
        create.save()
        return create

    def update(self, instance, validated_data):
        for i in validated_data.pop('user'):
            instance.user.add(i.id)
            update = CustomUser.objects.filter(id=i.id).update(categories_id=instance.id)
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance


class DoctorCategoriesDetailSerializers(serializers.ModelSerializer):
    user = UserInformationSerializerss(read_only=True, many=True)

    class Meta:
        model = DoctorCategories
        fields = ['id', 'name', 'user']


class GroupSerializers(serializers.ModelSerializer):

    class Meta:
        model = Group
        fields = '__all__'


class UserInformationSerializers(serializers.ModelSerializer):
    categories_id = DoctorCategoriesDetailSerializers(read_only=True)
    groups = GroupSerializers(read_only=True, many=True)

    class Meta:
        model = CustomUser
        fields = ["id", 'username', "first_name", "last_name", "price", "reviews", "description", "categories_id", "avatar", 'groups']
