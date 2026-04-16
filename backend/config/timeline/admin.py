from django.contrib import admin
from .models import TimelineItem


@admin.register(TimelineItem)
class TimelineItemAdmin(admin.ModelAdmin):
    list_display = ("period", "title", "item_type", "ordering")
    list_filter = ("item_type",)
    search_fields = ("period", "title", "description")
    ordering = ("ordering",)