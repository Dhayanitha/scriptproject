from django.shortcuts import render

# Create your views here.

def mathadd(request):
    context= {}
    return render(request, 'mathapp/mathadd.html',context)

def mathvolumeofcylinder(request):
    context= {}
    return render(request, 'mathapp/mathvolumeofcylinder.html',context)

def matharea(request):
    context= {}
    return render(request, 'mathapp/matharea.html',context)
