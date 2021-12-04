from django.urls import path
from .views import CityViwe, CultureViwe, GetCitis, GetCity, GetCityCulture, GetCulture, GetFirstCulture

urlpatterns = [
    path('city', CityViwe.as_view()),
    path('culture', CultureViwe.as_view()),
    path('get-city',GetCity.as_view()),
    path('get-first-culture',GetFirstCulture.as_view()),
    path('get-city-culture',GetCityCulture.as_view()),
    path('get-citis', GetCitis.as_view()),
    path('get-culture', GetCulture.as_view())
]