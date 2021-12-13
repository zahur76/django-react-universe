from django.contrib import admin

from .models import CelestrialBody, Entity, Galaxy, System


class GalaxyAdmin(admin.ModelAdmin):
    list_display = ("id", "name")


class CelestrialBodyAdmin(admin.ModelAdmin):
    list_display = ("id", "name")


class SystemAdmin(admin.ModelAdmin):
    list_display = ("id", "name")


class EntityAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "galaxy", "system")


# Register your models here.
admin.site.register(Galaxy, GalaxyAdmin)
admin.site.register(System, SystemAdmin)
admin.site.register(Entity, EntityAdmin)
admin.site.register(CelestrialBody, CelestrialBodyAdmin)
