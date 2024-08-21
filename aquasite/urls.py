from django.urls import path
from . import views

urlpatterns = [
  path('', views.home, name='home'),
  path('authentication/', views.userAuth.auth, name='auth'),
]