from rest_framework import generics
from .models import SocialLink
from .serializers import SocialLinkSerializer


class SocialLinkListAPIView(generics.ListAPIView):
    serializer_class = SocialLinkSerializer

    def get_queryset(self):
        return SocialLink.objects.filter(is_active=True).order_by("ordering", "name")