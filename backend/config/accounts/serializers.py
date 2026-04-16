from rest_framework import serializers
from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    profile_image = serializers.SerializerMethodField()

    class Meta:
        model = Profile
        fields = [
            "id",
            "full_name",
            "headline",
            "short_intro",
            "profile_image",
            "availability_status",
            "footer_text",
            "contact_cta_text",
            "email",
            "location",
        ]

    def get_profile_image(self, obj):
        request = self.context.get("request")
        if obj.profile_image:
            if request:
                return request.build_absolute_uri(obj.profile_image.url)
            return obj.profile_image.url
        return None