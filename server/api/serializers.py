from rest_framework import serializers
from django.contrib.auth.models import User,Group
from django.contrib.auth.hashers import make_password
import django.contrib.auth.password_validation as validators
from django.contrib.auth.password_validation import validate_password



''' User Serializers '''
class UserInformationSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','first_name','last_name'] 

class UserSiginUpSerializers(serializers.ModelSerializer):
    username = serializers.CharField(max_length=255, min_length=5, required=True)
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    class Meta:
        model = User
        fields = ['id','username','first_name','last_name']
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }
    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs
    
    def create(self, validated_data):
        user = User.objects.create(
          username=validated_data['username'],
          first_name=validated_data['first_name'],
          last_name=validated_data['last_name']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class UserSiginInSerializers(serializers.ModelSerializer):
    username = serializers.CharField(max_length=50, min_length=2)
    password = serializers.CharField(max_length=50, min_length=1)
    class Meta:
      model = User
      fields = ['username', 'password']
      read_only_fields = ('username',)
