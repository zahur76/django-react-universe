from django.shortcuts import HttpResponse
from django.core.serializers import serialize
from .models import Planet
import json


# Create your views here.
def home(request):
    ''' View to return all Galaxy objects'''
    all_planets = []   
    print('it working')
    all_data = Planet.objects.values('id',
        'galaxy__name', 'system__name', 'name', 'age', 'description','image', 'nickname', 'surface_area')
    print(all_data)
    for data in all_data:
        all_planets.append(data)
    print(all_planets)
    return HttpResponse(json.dumps(all_planets),
                content_type='application/json')
    