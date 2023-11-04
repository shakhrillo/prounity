from api.seriializers import UserInformationSerializers
from .models import Conversation, Message
from rest_framework import serializers
from api.seriializers import UserInformationSerializers


class MessageSerializer(serializers.ModelSerializer):
    sender = UserInformationSerializers(read_only=True)
    class Meta:
        model = Message
        exclude = ('conversation_id',)


class ConversationListSerializer(serializers.ModelSerializer):
    initiator = UserInformationSerializers()
    receiver = UserInformationSerializers()
    last_message = serializers.SerializerMethodField()

    class Meta:
        model = Conversation
        fields = ['id','initiator', 'receiver', 'last_message']

    def get_last_message(self, instance):
        message = instance.message_set.first()
        if message:
            return MessageSerializer(instance=message).data
        else:
            return None


class ConversationSerializer(serializers.ModelSerializer):
    initiator = UserInformationSerializers()
    receiver = UserInformationSerializers()
    message_set = MessageSerializer(many=True)

    class Meta:
        model = Conversation
        fields = ['id','initiator', 'receiver', 'message_set']
