from django.db import models

class VolunteerEvent(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    sport_type = models.CharField(max_length=50)
    location = models.CharField(max_length=100)
    date = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
        