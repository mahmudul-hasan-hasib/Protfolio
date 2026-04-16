from django.contrib import admin
from .models import Project, CaseStudy


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "featured", "ordering", "created_at")
    list_filter = ("featured", "category")
    search_fields = ("title", "short_description", "full_description", "slug")
    prepopulated_fields = {"slug": ("title",)}
    ordering = ("ordering", "-created_at")


@admin.register(CaseStudy)
class CaseStudyAdmin(admin.ModelAdmin):
    list_display = ("title", "badge", "is_active", "updated_at")
    list_filter = ("is_active",)
    search_fields = ("title", "description", "result")