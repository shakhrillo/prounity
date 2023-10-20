from rest_framework import serializers

from home.models import *


class PayTariffsListSerializer(serializers.ModelSerializer):

    class Meta:
        model = PaymentTariffs
        fields = '__all__'
