from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Project, CaseStudy
from .serializers import ProjectSerializer, CaseStudySerializer


class ProjectListAPIView(generics.ListAPIView):
    queryset = Project.objects.all().order_by("ordering", "-created_at")
    serializer_class = ProjectSerializer

    def get_serializer_context(self):
        return {"request": self.request}


class FeaturedProjectListAPIView(generics.ListAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        return Project.objects.filter(featured=True).order_by("ordering", "-created_at")

    def get_serializer_context(self):
        return {"request": self.request}


class ProjectDetailAPIView(generics.RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    lookup_field = "slug"

    def get_serializer_context(self):
        return {"request": self.request}


class ActiveCaseStudyAPIView(generics.GenericAPIView):
    serializer_class = CaseStudySerializer

    def get(self, request, *args, **kwargs):
        case_study = CaseStudy.objects.filter(is_active=True).first()
        if not case_study:
            return Response(None)

        serializer = self.get_serializer(case_study, context={"request": request})
        return Response(serializer.data)