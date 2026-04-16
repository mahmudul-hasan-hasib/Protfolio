from django.db import models
from core.models import OrderedModel


class SocialLink(OrderedModel):
    PLATFORM_CHOICES = (
        ("github", "GitHub"),
        ("linkedin", "LinkedIn"),
        ("email", "Email"),
        ("portfolio", "Portfolio"),
        ("other", "Other"),
    )

    name = models.CharField(max_length=100)
    platform = models.CharField(max_length=50, choices=PLATFORM_CHOICES, default="other")
    url = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["ordering", "name"]