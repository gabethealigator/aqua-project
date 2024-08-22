from django.shortcuts import render, redirect

from decouple import config

import pyrebase

firebaseConfig = {
  'apiKey': config('FIREBASE_API_KEY'),
  'authDomain': config('FIREBASE_AUTH_DOMAIN'),
  'databaseURL': config('FIREBASE_DATABASE_URL'),
  'projectId': config('FIREBASE_PROJECT_ID'),
  'storageBucket': config('FIREBASE_STORAGE_BUCKET'),
  'messagingSenderId': config('FIREBASE_MESSAGING_SENDER_ID'),
  'appId': config('FIREBASE_APP_ID')
}

firebase = pyrebase.initialize_app(firebaseConfig)
database = firebase.database()
auth = firebase.auth()

def home(request):
  return render(request, 'aquasite/pages/home.html')

class userAuth:
  def auth(request):
    return render(request, 'aquasite/pages/auth.html')
  
  def login(request):
    email = request.POST.get('login-email')
    password = request.POST.get('login-password')
    try:
      user = auth.sign_in_with_email_and_password(email, password)
      return redirect('dashboard')
    except:
      return redirect('auth')
  
def dashboard(request):
  return render(request, 'aquasite/pages/dashboard.html')