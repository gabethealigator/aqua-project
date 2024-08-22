from django.shortcuts import render, redirect

from django.http import HttpResponseRedirect

from django.core.mail import send_mail

from decouple import config

import pyrebase, random, string

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

userId = None

def home(request):
  return render(request, 'aquasite/pages/home.html')

class userAuth:
  def auth(request):
    return render(request, 'aquasite/pages/auth.html')
  
  def login(request):
    global userId
    email = request.POST.get('login-email')
    password = request.POST.get('login-password')
    try:
      user = auth.sign_in_with_email_and_password(email, password)
      userId = user['localId']
      return redirect('dashboard')
    except:
      return redirect('auth')
    
  class userRegister:
    def codeGenerator(length=5, caracteres=string.digits):
      return ''.join(random.choice(caracteres) for _ in range(length))

    name = None
    email = None
    password = None
    code = codeGenerator()
    
    def verification(request):
      if request.META.get('HTTP_REFERER', '').endswith('/authentication/'):
        userAuth.userRegister.name = request.POST.get('register-name')
        userAuth.userRegister.email = request.POST.get('register-email')
        userAuth.userRegister.password = request.POST.get('register-password')
        send_mail(
          'AQUA - Código de verificação de email',
          f'Opa, {userAuth.userRegister.name}! \nSeu código de verificação é: {userAuth.userRegister.code}',
          'aquaseaware@gmail.com',
          [userAuth.userRegister.email],
          fail_silently=False,
        )
      return render(request, 'aquasite/pages/verification.html')

    def register(request):
      global userId
      inputCode = request.POST.get('verification-code-input')
      emailCode = userAuth.userRegister.code
      if inputCode == emailCode:
        try:
          user = auth.create_user_with_email_and_password(
            userAuth.userRegister.email, 
            userAuth.userRegister.password
            )
          userId = user['localId']
          userData = {
            'name': userAuth.userRegister.name,
            'email': userAuth.userRegister.email
          }
          database.child('UsersData').child(userId).update(userData)
          return redirect('dashboard')
        except:
          return redirect('verification')
      elif inputCode != emailCode:
        return redirect('verification')
  
def dashboard(request):
  user = database.child('UsersData').child(userId)
  modules = {
    'modules': user.child('modules').get().val()
  }

  

  return render(request, 'aquasite/pages/dashboard.html', modules)