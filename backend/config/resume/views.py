from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Resume
from .serializers import ResumeSerializer


class ActiveResumeAPIView(APIView):
    def get(self, request):
        resume = Resume.objects.filter(is_active=True).first()
        if not resume:
            return Response({"detail": "Active resume not found."}, status=status.HTTP_404_NOT_FOUND)

        serializer = ResumeSerializer(resume, context={"request": request})
        return Response(serializer.data)