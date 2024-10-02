from django.contrib.auth.models import User
from django.db import models

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    occupation = models.CharField(max_length=100)
    rate_card = models.FileField(upload_to='rate_cards/', null=True, blank=True)
    social_media_links = models.JSONField(default=dict)
    contact_email = models.EmailField()

    def __str__(self):
        return self.user.username
