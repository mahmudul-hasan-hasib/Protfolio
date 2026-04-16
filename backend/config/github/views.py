from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import GitHubStats
from .serializers import GitHubStatsSerializer


class GitHubStatsAPIView(APIView):
    def get(self, request):
        stats = GitHubStats.objects.filter(is_active=True).first()
        if not stats:
            return Response({"detail": "GitHub stats not found."}, status=status.HTTP_404_NOT_FOUND)

        serializer = GitHubStatsSerializer(stats)
        return Response(serializer.data)