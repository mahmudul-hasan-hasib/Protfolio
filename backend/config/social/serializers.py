from rest_framework import serializers
from .models import SocialLink


class SocialLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLink
        fields = [
            "id",
            "name",
            "platform",
            "url",
            "is_active",
            "ordering",
        ]