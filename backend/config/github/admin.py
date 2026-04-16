from django.contrib import admin
from .models import GitHubStats, TopRepository


class TopRepositoryInline(admin.TabularInline):
    model = TopRepository
    extra = 1


@admin.register(GitHubStats)
class GitHubStatsAdmin(admin.ModelAdmin):
    list_display = ("contributions_count", "repositories_count", "stars_count", "is_active", "updated_at")
    list_filter = ("is_active",)
    inlines = [TopRepositoryInline]


@admin.register(TopRepository)
class TopRepositoryAdmin(admin.ModelAdmin):
    list_display = ("name", "stars", "ordering")
    search_fields = ("name", "description")
    ordering = ("ordering",)