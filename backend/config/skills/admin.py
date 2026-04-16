from django.contrib import admin
from .models import SkillCategory


@admin.register(SkillCategory)
class SkillCategoryAdmin(admin.ModelAdmin):
    list_display = ("title", "icon_name", "ordering")
    search_fields = ("title", "icon_name")
    ordering = ("ordering",)