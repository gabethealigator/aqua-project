from django.urls import re_path

from . import consumers


ws_urlpatterns = [
  re_path(r'dashboard/module/(?P<moduleId>\w+)/$', consumers.ModuleConsumer.as_asgi())
]