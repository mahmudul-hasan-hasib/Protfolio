from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Profile
from .serializers import ProfileSerializer


class ProfileAPIView(APIView):
    def get(self, request):
        profile = Profile.objects.first()
        if not profile:
            return Response({"detail": "Profile not found."}, status=status.HTTP_404_NOT_FOUND)

        serializer = ProfileSerializer(profile, context={"request": request})
        return Response(serializer.data)
from django.conf import settings
from django.http import JsonResponse
import os
def media_debug(request):
    test_path = settings.MEDIA_ROOT / "profile" / "profile.png"

    return JsonResponse({
        "media_url": settings.MEDIA_URL,
        "media_root": str(settings.MEDIA_ROOT),
        "test_file_path": str(test_path),
        "file_exists": os.path.exists(test_path),
    })