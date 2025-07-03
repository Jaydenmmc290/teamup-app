# backend/api/admin.py

from django.contrib import admin
from .models import VolunteerEvent

admin.site.register(VolunteerEvent)
