# for media files setting
from django.conf import settings
from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("/login", views.login, name="login"),
    path("/logout", views.logout, name="logout"),
    path("/add_planet", views.add_planet, name="add_planet"),
    path("/delete_planet/<int:entity_id>", views.delete_planet, name="delete_planet"),
    path("/galaxy/<str:galaxy>", views.galaxy, name="galaxy"),
    path("/system/<str:system>", views.system, name="system"),
]
