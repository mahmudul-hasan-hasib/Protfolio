from django.db import models
from core.models import TimeStampedModel, OrderedModel


class Project(TimeStampedModel, OrderedModel):
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)

    short_description = models.TextField()
    full_description = models.TextField(blank=True)

    image = models.ImageField(upload_to="projects/", blank=True, null=True)
    tech_stack = models.JSONField(default=list, blank=True)

    github_link = models.URLField(blank=True)
    live_link = models.URLField(blank=True)

    featured = models.BooleanField(default=False)
    category = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["ordering", "-created_at"]


class CaseStudy(TimeStampedModel):
    badge = models.CharField(max_length=100, blank=True)
    title = models.CharField(max_length=255)

    description = models.TextField()
    image = models.ImageField(upload_to="case_studies/", blank=True, null=True)

    metrics = models.JSONField(default=dict, blank=True)
    sections = models.JSONField(default=dict, blank=True)
    tech_stack = models.JSONField(default=list, blank=True)

    result = models.TextField(blank=True)

    live_link = models.URLField(blank=True)
    github_link = models.URLField(blank=True)

    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["-updated_at"]