from django.urls import path
from . import views


urlpatterns = [
  path('', views.home, name='home'),
  path('about-us/', views.aboutUs, name='about-us'),
  path('contact/', views.contact, name='contact'),

  path('authentication/', views.userAuth.auth, name='auth'),
  path('login/', views.userAuth.login, name='login'),
  path('verification/', views.userAuth.userRegister.verification, name='verification'),
  path('register/', views.userAuth.userRegister.register, name='register'),

  path('dashboard/', views.userDashboard.dashboard, name='dashboard'),
  path('dashboard/module/<str:moduleId>/', views.userDashboard.module, name='module'),
  path('dashboard/account/', views.userDashboard.account, name='account'),
]