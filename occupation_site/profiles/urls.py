from django.urls import path
from .views import UserProfileView, ContactView

urlpatterns = [
    path('profiles/', UserProfileView.as_view(), name='profiles'),
    path('contact/', ContactView.as_view(), name='contact'),
]
