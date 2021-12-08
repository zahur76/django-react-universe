from django.urls import path
from . import views
# for media files setting
from django.conf import settings

urlpatterns = [
    path('', views.home, name='home'),
    path('/login', views.login, name='login'),
    path('/logout', views.logout, name='logout'),
]
