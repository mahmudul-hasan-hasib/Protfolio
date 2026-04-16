from django.db import models
from core.models import TimeStampedModel


class Resume(TimeStampedModel):
    title = models.CharField(max_length=100, default="Current Resume")
    file = models.FileField(upload_to="resume/")
    is_active = models.BooleanField(default=True)
    download_count = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["-updated_at"]