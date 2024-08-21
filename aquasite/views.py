from django.shortcuts import render

def home(request):
  return render(request, 'aquasite/pages/home.html')

class userAuth:
  def auth(request):
    return render(request, 'aquasite/pages/auth.html')