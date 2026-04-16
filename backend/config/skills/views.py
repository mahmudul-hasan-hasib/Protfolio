from rest_framework import generics
from .models import SkillCategory
from .serializers import SkillCategorySerializer


class SkillCategoryListAPIView(generics.ListAPIView):
    queryset = SkillCategory.objects.all().order_by("ordering", "title")
    serializer_class = SkillCategorySerializer