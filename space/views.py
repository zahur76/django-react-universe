from django.shortcuts import HttpResponse
from django.core.serializers import serialize
from .models import Planet
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth import authenticate, login, logout, get_user_model


# Create your views here.
def home(request):
    ''' View to return all Galaxy objects'''
    all_planets = []
    print('it working')
    all_data = Planet.objects.values('id',
        'galaxy__name', 'system__name', 'name', 'age', 'description','image', 'nickname', 'surface_area')
    for data in all_data:
        all_planets.append(data)
    return HttpResponse(json.dumps(all_planets),
                content_type='application/json')

@require_POST
@csrf_exempt
def login(request):
    ''' View to authenticate login'''
    
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data['username']
        password = data['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            data = {'login': True}
            return HttpResponse(json.dumps(data),
                    content_type='application/json')
        data = {'login': False}
        return HttpResponse(json.dumps(data),
                    content_type='application/json')

def logout(request):
    ''' View to authenticate login'''
    data = {'login': False}

    return HttpResponse(json.dumps(data),
                content_type='application/json')


@require_POST
@csrf_exempt
def add_planet(request):
    ''' View to add planet'''
    print('im here')
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data)

    return HttpResponse(status=200)
    