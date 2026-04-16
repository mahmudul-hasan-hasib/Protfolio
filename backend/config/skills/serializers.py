from rest_framework import serializers
from .models import SkillCategory


class SkillCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillCategory
        fields = [
            "id",
            "title",
            "icon_name",
            "skills",
            "ordering",
        ]