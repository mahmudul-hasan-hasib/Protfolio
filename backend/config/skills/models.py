from django.db import models
from core.models import OrderedModel


class SkillCategory(OrderedModel):
    title = models.CharField(max_length=100)
    icon_name = models.CharField(max_length=100, help_text="Frontend will map this icon name.")
    skills = models.JSONField(default=list, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["ordering", "title"]
        verbose_name_plural = "Skill Categories"