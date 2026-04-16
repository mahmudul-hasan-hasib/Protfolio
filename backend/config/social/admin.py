from django.contrib import admin
from .models import SocialLink


@admin.register(SocialLink)
class SocialLinkAdmin(admin.ModelAdmin):
    list_display = ("name", "platform", "url", "is_active", "ordering")
    list_filter = ("platform", "is_active")
    search_fields = ("name", "url")
    ordering = ("ordering",)