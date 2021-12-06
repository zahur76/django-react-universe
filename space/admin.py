from django.contrib import admin
from .models import Galaxy, System, Planet

class GalaxyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')


class SystemAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

class PlanetAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'galaxy', 'system')

# Register your models here.
admin.site.register(Galaxy, GalaxyAdmin)
admin.site.register(System, SystemAdmin)
admin.site.register(Planet, PlanetAdmin)
