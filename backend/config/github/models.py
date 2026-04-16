from django.db import models
from core.models import TimeStampedModel, OrderedModel


class GitHubStats(TimeStampedModel):
    contributions_count = models.PositiveIntegerField(default=0)
    repositories_count = models.PositiveIntegerField(default=0)
    stars_count = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return "GitHub Stats"

    class Meta:
        verbose_name = "GitHub Stats"
        verbose_name_plural = "GitHub Stats"


class TopRepository(OrderedModel):
    github_stats = models.ForeignKey(
        GitHubStats,
        on_delete=models.CASCADE,
        related_name="top_repositories",
    )
    name = models.CharField(max_length=255)
    url = models.URLField(blank=True)
    description = models.TextField(blank=True)
    stars = models.PositiveIntegerField(default=0)
    tech_stack = models.JSONField(default=list, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["ordering", "name"]
        verbose_name_plural = "Top Repositories"