from rest_framework import serializers
from .models import VolunteerEvent

class VolunteerEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = VolunteerEvent
        fields = '__all__'