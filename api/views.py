from django.db.models import query
from django.http import response
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CitySerializer, CultureSerializer
from .models import City, Culture
from django.core import serializers
from django.http import HttpResponse
# Create your views here.

class CityViwe(generics.ListAPIView):
    queryset = City.objects.all()
    serializer_class = CitySerializer

class CultureViwe(generics.ListAPIView):
    queryset = Culture.objects.all()
    serializer_class = CultureSerializer

class GetCity(APIView):
    serializer_class = CitySerializer
    lookup_url_kwarg = 'id'

    def get (self, request, format=None):
        id = request.GET.get(self.lookup_url_kwarg)
        if id != None:
            city = City.objects.filter(id=id)
            if len(city) > 0:
                data = CitySerializer(city[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'City Not Found':'Invalid City'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request':'Cidy not found in request'}, status=status.HTTP_404_NOT_FOUND)

class GetCulture(APIView):
    serializer_class = CultureSerializer
    lookup_url_kwarg = 'id'

    def get (self, request, format=None):
        id = request.GET.get(self.lookup_url_kwarg)
        if id != None:
            cultrue = Culture.objects.filter(id=id)
            if len(cultrue) > 0:
                data = CultureSerializer(cultrue[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request':'Cultrue not found in request'}, status=status.HTTP_404_NOT_FOUND)

class GetFirstCulture(APIView):
    serializer_class = CultureSerializer
    lookup_url_kwarg = 'city'

    def get (self, request, format=None):
        city = request.GET.get(self.lookup_url_kwarg)
        if city != None:
            cultrue = Culture.objects.filter(city=city)
            if len(cultrue) > 0:
                data = CultureSerializer(cultrue[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({}, status=status.HTTP_404_NOT_FOUND)
        return Response({}, status=status.HTTP_404_NOT_FOUND)

class GetCityCulture(APIView):
    serializer_class = CultureSerializer
    lookup_url_kwarg = 'city'

    def get (self, request, format=None):
        city = request.GET.get(self.lookup_url_kwarg)
        if city != None:
            culture = Culture.objects.filter(city=city)
            if len(culture) > 0:
                data = list(culture.values())
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Cultrue Not Found':'Inval id Cultrue'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request':'Cultrue not found in request'}, status=status.HTTP_404_NOT_FOUND)

class GetCitis(APIView):
    serializer_class = CitySerializer
    lookup_url_kwarg = 'city'

    def get (self, request, format=None):
        
        citis = City.objects.all();
        if len(citis) > 0:
            data = list(citis.values())
            return Response(data, status=status.HTTP_200_OK)
        return Response({'NO CITIS':'There are no citis registered'}, status=status.HTTP_404_NOT_FOUND)

