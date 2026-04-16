from rest_framework import serializers
from .models import GitHubStats, TopRepository


class TopRepositorySerializer(serializers.ModelSerializer):
    class Meta:
        model = TopRepository
        fields = [
            "id",
            "name",
            "url",
            "description",
            "stars",
            "tech_stack",
            "ordering",
        ]


class GitHubStatsSerializer(serializers.ModelSerializer):
    top_repositories = TopRepositorySerializer(many=True, read_only=True)

    class Meta:
        model = GitHubStats
        fields = [
            "id",
            "contributions_count",
            "repositories_count",
            "stars_count",
            "top_repositories",
            "updated_at",
        ]