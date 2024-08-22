from django.urls import path
from . import views

urlpatterns = [
  path('', views.home, name='home'),
  path('authentication/', views.userAuth.auth, name='auth'),
  path('login/', views.userAuth.login, name='login'),
  path('dashboard/', views.dashboard, name='dashboard'),
]