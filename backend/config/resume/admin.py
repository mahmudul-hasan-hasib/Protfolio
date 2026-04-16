from django.contrib import admin
from .models import Resume


@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):
    list_display = ("title", "is_active", "download_count", "updated_at")
    list_filter = ("is_active",)
    search_fields = ("title",)