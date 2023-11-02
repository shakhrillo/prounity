from rest_framework import serializers
from consultation.models import Consultation
from shop_news.models import BayDrugs
from django.conf import settings
from datetime import datetime
from django.db.models import Q


class UserListSerializers(serializers.ModelSerializer):
    """User Serializers"""

    class Meta:
        """User Fields"""

        model = settings.AUTH_USER_MODEL
        fields = (
            "id",
            "username",
            "first_name",
            "last_name",
        )


class ConsultationSerializers(serializers.ModelSerializer):
    """Consultation Serializers"""
    
    class Meta:
        """Consultation Fields"""

        model = Consultation
        fields = "__all__"


class ConsultationPostSerializers(serializers.ModelSerializer):
    """Consultation POST Serializers"""
    
    class Meta:
        """Consultation Fields"""

        model = Consultation
        fields = '__all__'

    def create(self, validated_data):
        check_date = Consultation.objects.select_related('doctor_id').filter(
            doctor_id = validated_data['doctor_id']
        ).filter(Q(
            appoint_date__day = validated_data['appoint_date'].strftime("%Y")) |
            Q(appoint_date__day = validated_data['appoint_date'].strftime("%m")) |
            Q(appoint_date__day = validated_data['appoint_date'].strftime("%d"))
        ).filter(Q(
            appoint_time__hour = validated_data['appoint_time'].strftime('%H'
        ))  )
        
        if bool(check_date):
            raise serializers.ValidationError("The doctor is busy at the moment")
        else:
            create = Consultation.objects.create(**validated_data)
            create.user_id = self.context.get("user_id")
            create.save()
        return create


class BayDrugsSerializers(serializers.ModelSerializer):
    """BayDrugs Serializers"""
    class Meta:
        """BayDrugs Model Fileds"""
        model = BayDrugs
        fields = '__all__'