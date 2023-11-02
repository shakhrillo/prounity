from rest_framework import serializers
from shop_news.models import *
from api.models import CustomUser
from datetime import datetime
from django.db.models import Q


class UserListSerializers(serializers.ModelSerializer):
    """User Serializers"""

    class Meta:
        """User Fields"""

        model = CustomUser
        fields = (
            "id",
            "username",
            "first_name",
            "last_name",
        )


class NewsSerializers(serializers.ModelSerializer):
    """News Serializers"""

    class Meta:
        """News Model Fileds"""
        model = News
        fields = '__all__'


class NewsPostSerializers(serializers.ModelSerializer):
    """News Serializers"""
    img = serializers.ImageField(max_length=None, allow_empty_file=False,allow_null=False,use_url=False,required=False)

    class Meta:
        """News Model Fileds"""
        model = News
        fields = '__all__'
    
    def create(self, validated_data):
        """News ExpeectedSalary"""
        create = News.objects.create(**validated_data)
        create.save()
        return create
    def update(self, instance, validated_data):
        """Update ExpeectedSalary"""
        instance.title = validated_data.get("title", instance.title)
        instance.content = validated_data.get("content", instance.content)
        if instance.img == None:
            instance.img = self.context.get('img')
        else:
            instance.img = validated_data.get('img',instance.img)
        instance.save()
        return instance


# Drugs
class DrugsSerializers(serializers.ModelSerializer):
    """Drugs Serializers"""

    class Meta:
        """Drugs Model Fileds"""
        model = Drugs
        fields = '__all__'


class NewsDrugsSerializers(serializers.ModelSerializer):
    """Drugs Serializers"""
    img = serializers.ImageField(max_length=None, allow_empty_file=False,allow_null=False,use_url=False,required=False)

    class Meta:
        """Drugs Model Fileds"""
        model = Drugs
        fields = '__all__'
    
    def create(self, validated_data):
        """Drugs Create"""
        create = Drugs.objects.create(**validated_data)
        create.save()
        return create
    
    def update(self, instance, validated_data):
        """Update Drugs"""
        instance.name = validated_data.get("name", instance.name)
        instance.price = validated_data.get("price", instance.price)
        instance.company = validated_data.get("company", instance.company)
        instance.content = validated_data.get("content", instance.content)
        instance.quantity = validated_data.get("quantity", instance.quantity)

        if instance.img == None:
            instance.img = self.context.get('img')
        else:
            instance.img = validated_data.get('img',instance.img)
        instance.save()
        return instance


class BayDrugsSerializers(serializers.ModelSerializer):
    """BayDrugs Serializers"""
    user_id = UserListSerializers(read_only=True)
    class Meta:
        """BayDrugs Model Fileds"""
        model = BayDrugs
        fields = '__all__'


class BayDrugsCrudSerializers(serializers.ModelSerializer):
    """BayDrugs Serializers"""
    class Meta:
        """BayDrugs Model Fileds"""
        model = BayDrugs
        fields = '__all__'
    
    def create(self, validated_data):
        """BayDrugs Create"""
        s=0
        for item in validated_data['drugs_id']:
            s+=(item['price'] * item['quantity'])
            drugs = Drugs.objects.filter(id=item['id'])
            for i in drugs:
                i.quantity = i.quantity - item['quantity']
                i.save()
        create = BayDrugs.objects.create(**validated_data)
        create.user_id = self.context.get("user_id")
        create.price = validated_data['price'] + s
        create.save()
        return create