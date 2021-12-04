from django.db import models

# Create your models here.
class City(models.Model):
    name = models.CharField(max_length=30,null=False)
    state = models.CharField(max_length=20,null=False)

class Culture(models.Model):
    city = models.ForeignKey(
        'City',
        on_delete=models.CASCADE,
    )
    type = models.CharField(max_length=20,default="")
    title = models.CharField(max_length=100,null=False)
    history = models.CharField(max_length=10000,null=False)
    picture = models.CharField(max_length=100,default="")
    lat = models.CharField(max_length=50,default="")
    lng = models.CharField(max_length=50,default="")
    