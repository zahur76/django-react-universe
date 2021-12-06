from django.db import models

# Create your models here.

class Galaxy(models.Model):

    class Meta:
        verbose_name_plural = "Galaxy"

    name = models.CharField(max_length=120)
    age = models.CharField(max_length=120)    
    description = models.TextField()
    image = models.ImageField()

    def _str_(self):
        return self.title


class System(models.Model):

    class Meta:
        verbose_name_plural = "System"

    name = models.CharField(max_length=120)
    age = models.CharField(max_length=120)    
    description = models.TextField()
    image = models.ImageField()    

    def __str__(self):
        return self.name


class Planet(models.Model):

    class Meta:
        verbose_name_plural = "Planet"

    galaxy = models.ForeignKey(
            'Galaxy', null=False, blank=False, on_delete=models.CASCADE,
            related_name='planet')
    system = models.ForeignKey(
    'System', null=False, blank=False, on_delete=models.CASCADE,
    related_name='system')
    name = models.CharField(max_length=120)
    age = models.CharField(max_length=120)    
    description = models.TextField()
    image = models.ImageField()    

    def __str__(self):
        return self.name


