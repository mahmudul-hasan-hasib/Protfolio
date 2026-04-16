from rest_framework import serializers
from .models import Resume


class ResumeSerializer(serializers.ModelSerializer):
    file = serializers.SerializerMethodField()

    class Meta:
        model = Resume
        fields = [
            "id",
            "title",
            "file",
            "is_active",
            "download_count",
            "updated_at",
        ]

    def get_file(self, obj):
        request = self.context.get("request")
        if obj.file:
            if request:
                return request.build_absolute_uri(obj.file.url)
            return obj.file.url
        return None