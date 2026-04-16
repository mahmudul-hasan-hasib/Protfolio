from django.db import models
from core.models import OrderedModel, TimeStampedModel


class TimelineItem(OrderedModel, TimeStampedModel):
    TYPE_CHOICES = (
        ("project", "Project"),
        ("learning", "Learning"),
        ("experience", "Experience"),
    )

    period = models.CharField(max_length=100)
    title = models.CharField(max_length=255)
    description = models.TextField()
    item_type = models.CharField(max_length=20, choices=TYPE_CHOICES, default="experience")

    def __str__(self):
        return f"{self.period} - {self.title}"

    class Meta:
        ordering = ["ordering", "-created_at"]