from django.contrib import admin
from .models import Galaxy

class GalaxyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

# Register your models here.

admin.site.register(Galaxy), GalaxyAdmin)