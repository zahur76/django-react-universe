from django.shortcuts import HttpResponse


# Create your views here.
def home(request):
    ''' View to return all Todo objects'''

    print('working')

    return HttpResponse(status=200)