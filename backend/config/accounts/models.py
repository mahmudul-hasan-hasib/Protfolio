from django.db import models
from core.models import TimeStampedModel


class Profile(TimeStampedModel):
    full_name = models.CharField(max_length=255)
    headline = models.CharField(max_length=255)
    short_intro = models.TextField()

    profile_image = models.ImageField(upload_to="profile/", blank=True, null=True)

    availability_status = models.CharField(max_length=100, blank=True)
    footer_text = models.CharField(max_length=255, blank=True)
    contact_cta_text = models.CharField(max_length=255, blank=True)

    email = models.EmailField(blank=True)
    location = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name = "Profile"
        verbose_name_plural = "Profile"