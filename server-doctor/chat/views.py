from django.shortcuts import render
from .models import Conversation
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from django.contrib.auth.models import User
from .serializers import ConversationListSerializer, ConversationSerializer
from django.db.models import Q
from django.shortcuts import redirect, reverse
from api.renderers import UserRenderers
from api.models import CustomUser


class StartConversationView(APIView):
    render_classes = [UserRenderers]
    perrmisson_class = [IsAuthenticated]
    def post(self, request):
        data = request.data

        # get doctor username here
        username = data['username']

        # check the user is or not in databases
        try:
            participant = CustomUser.objects.get(username=username)
            print(participant)
        except CustomUser.DoesNotExist:
            return Response({'message': 'You cannot chat with a non existent user'})
        # ------------------------------------
        # we are checked (Patient and Doctor) or (Doctor and Patient) chat group has or not
        conversation = Conversation.objects.filter(Q(initiator=request.user, receiver=participant) |
                                                   Q(initiator=participant, receiver=request.user))
        # -----------------------------------
        # We are check groups is have or not, and if room is does not we will create new room
        if conversation.exists():
            return redirect(reverse('get_conversation', args=(conversation[0].id,)))
        else:
            conversation = Conversation.objects.create(initiator=request.user, receiver=participant)
            return Response(ConversationSerializer(instance=conversation).data)


@api_view(['GET'])
def get_conversation(request, convo_id):
    conversation = Conversation.objects.filter(id=convo_id)
    if not conversation.exists():
        return Response({'message': 'Conversation does not exist'})
    else:
        serializer = ConversationSerializer(instance=conversation[0])
        return Response(serializer.data)


@api_view(['GET'])
def conversations(request):
    conversation_list = Conversation.objects.filter(Q(initiator=request.user) |
                                                    Q(receiver=request.user))
    serializer = ConversationListSerializer(instance=conversation_list, many=True)
    return Response(serializer.data)
