from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import UserProfile
from .serializers import UserProfileSerializer
from django.core.mail import send_mail

class UserProfileView(APIView):
    def post(self, request):
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        profiles = UserProfile.objects.all()
        serializer = UserProfileSerializer(profiles, many=True)
        return Response(serializer.data)

class ContactView(APIView):
    def post(self, request):
        subject = "Contact Inquiry"
        message = request.data['message']
        recipient = request.data['recipient']
        
        if not recipient or not message:
            return Response({'error': 'Recipient and message are required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            send_mail(subject, message, 'noreply@occupationsite.com', [recipient])
            return Response({'status': 'email sent'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
