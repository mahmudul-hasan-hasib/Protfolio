from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path

from accounts.views import ProfileAPIView
from projects.views import (
    ProjectListAPIView,
    FeaturedProjectListAPIView,
    ProjectDetailAPIView,
    ActiveCaseStudyAPIView,
)
from skills.views import SkillCategoryListAPIView
from timeline.views import TimelineItemListAPIView
from contact.views import ContactMessageCreateAPIView
from resume.views import ActiveResumeAPIView
from social.views import SocialLinkListAPIView
from github.views import GitHubStatsAPIView

urlpatterns = [
    path("admin/", admin.site.urls),

    path("api/profile/", ProfileAPIView.as_view(), name="api-profile"),

    path("api/projects/", ProjectListAPIView.as_view(), name="api-projects"),
    path("api/projects/featured/", FeaturedProjectListAPIView.as_view(), name="api-featured-projects"),
    path("api/projects/<slug:slug>/", ProjectDetailAPIView.as_view(), name="api-project-detail"),
    path("api/case-study/", ActiveCaseStudyAPIView.as_view(), name="api-case-study"),

    path("api/skills/", SkillCategoryListAPIView.as_view(), name="api-skills"),
    path("api/timeline/", TimelineItemListAPIView.as_view(), name="api-timeline"),
    path("api/contact/", ContactMessageCreateAPIView.as_view(), name="api-contact"),
    path("api/resume/", ActiveResumeAPIView.as_view(), name="api-resume"),
    path("api/social-links/", SocialLinkListAPIView.as_view(), name="api-social-links"),
    path("api/github/", GitHubStatsAPIView.as_view(), name="api-github"),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)