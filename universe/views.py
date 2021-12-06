from django.shortcuts import HttpResponse
from django.core.serializers import serialize
from .models import Galaxy 


# Create your views here.
def home(request):
    ''' View to return all Galaxy objects'''    
    print('it working')
    data = serialize('json', Galaxy.objects.all().order_by('id'))

    return HttpResponse(data,
                content_type='application/json')
    