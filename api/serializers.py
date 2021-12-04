from rest_framework import serializers
from .models import City, Culture

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ('id','name','state')

class CultureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Culture
        fields = ('id','city','type','title','history','picture','lat','lng')