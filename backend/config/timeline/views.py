from rest_framework import generics
from .models import TimelineItem
from .serializers import TimelineItemSerializer


class TimelineItemListAPIView(generics.ListAPIView):
    queryset = TimelineItem.objects.all().order_by("ordering", "-created_at")
    serializer_class = TimelineItemSerializer