from django.shortcuts import render
from .serializers import *
from main.models import *
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions


# Create your views here.
@api_view(['GET','POST'])
@permission_classes((permissions.AllowAny,))
def getProduct(request):
    items = Products.objects.all()
    serializer = ProductSerializer(items, many=True)
    return Response(serializer.data)