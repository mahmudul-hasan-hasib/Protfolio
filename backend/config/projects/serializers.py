from rest_framework import serializers
from .models import Project, CaseStudy


class ProjectSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "slug",
            "short_description",
            "full_description",
            "image",
            "tech_stack",
            "github_link",
            "live_link",
            "featured",
            "category",
            "ordering",
            "created_at",
            "updated_at",
        ]

    def get_image(self, obj):
        request = self.context.get("request")
        if obj.image:
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None


class CaseStudySerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = CaseStudy
        fields = [
            "id",
            "badge",
            "title",
            "description",
            "image",
            "metrics",
            "sections",
            "tech_stack",
            "result",
            "live_link",
            "github_link",
            "is_active",
            "created_at",
            "updated_at",
        ]

    def get_image(self, obj):
        request = self.context.get("request")
        if obj.image:
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None