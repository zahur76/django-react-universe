from django.db import models


class Galaxy(models.Model):
    class Meta:
        verbose_name_plural = "Galaxy"

    name = models.CharField(max_length=254)
    age = models.CharField(max_length=254)
    description = models.CharField(max_length=254)
    image = models.ImageField()

    def __str__(self):
        return self.name


class System(models.Model):
    class Meta:
        verbose_name_plural = "System"

    name = models.CharField(max_length=254)
    age = models.CharField(max_length=254)
    description = models.CharField(max_length=254)
    image = models.ImageField()

    def __str__(self):
        return self.name


class CelestrialBody(models.Model):
    class Meta:
        verbose_name_plural = "Celestrial Body"

    name = models.CharField(max_length=254)

    def __str__(self):
        return self.name


class Entity(models.Model):
    class Meta:
        verbose_name_plural = "Entity"

    galaxy = models.ForeignKey(
        "Galaxy",
        null=False,
        blank=False,
        on_delete=models.CASCADE,
        related_name="galaxy",
    )
    system = models.ForeignKey(
        "System",
        null=False,
        blank=False,
        on_delete=models.CASCADE,
        related_name="system",
    )
    celestrial = models.ForeignKey(
        "CelestrialBody",
        null=False,
        blank=False,
        on_delete=models.CASCADE,
        related_name="celestrial",
        default=1,
    )
    name = models.CharField(max_length=254)
    nickname = models.CharField(max_length=254)
    constellation = models.CharField(max_length=254, default="cygnus")
    surface_area = models.IntegerField(default=999)
    age = models.CharField(max_length=254)
    description = models.CharField(max_length=1000)
    image = models.ImageField()

    def __str__(self):
        return self.name
