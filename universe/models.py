from django.db import models

# Create your models here.

class Galaxy(models.Model):

    class Meta:
        verbose_name_plural = "Galaxy"

    name = models.CharField(max_length=120)
    age = models.CharField(max_length=120)
    constellation = models.CharField(max_length=120)
    description = models.TextField()
    image = models.ImageField()

    def _str_(self):
        return self.title
