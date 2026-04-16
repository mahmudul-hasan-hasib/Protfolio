from rest_framework import serializers
from .models import TimelineItem


class TimelineItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimelineItem
        fields = [
            "id",
            "period",
            "title",
            "description",
            "item_type",
            "ordering",
            "created_at",
            "updated_at",
        ]