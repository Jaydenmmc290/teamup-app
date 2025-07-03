from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VolunteerEventViewSet

router = DefaultRouter()
router.register(r'events', VolunteerEventViewSet)

urlpatterns = [
    path('', include(router.urls)),
]