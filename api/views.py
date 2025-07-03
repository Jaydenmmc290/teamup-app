from rest_framework import viewsets
from .models import VolunteerEvent
from .serializers import VolunteerEventSerializer

class VolunteerEventViewSet(viewsets.ModelViewSet):
    queryset = VolunteerEvent.objects.all().order_by('-date')
    serializer_class = VolunteerEventSerializer