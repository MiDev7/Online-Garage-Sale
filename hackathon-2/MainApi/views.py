from distutils.command.upload import upload
from django.shortcuts import render, get_object_or_404, redirect
from numpy import product
from .serializers import *
from main.models import *
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions
from django.contrib.auth.models import User
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework.views import APIView
from django import forms
from django.http import JsonResponse
import torch
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.utils import timezone
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST


# Create your views here.
@api_view(['GET','POST'])
@permission_classes((permissions.AllowAny,))
def getProduct(request):
    items = Products.objects.all()
    serializer = ProductSerializer(items, many=True)
    return Response(serializer.data)

@api_view(['GET','POST'])
@permission_classes((permissions.AllowAny,))
def getUser(request):
    users = User.objects.all()
    userSerializer = UserSerializer(users, many=True)
    return Response(userSerializer.data)

class CreateProducts(APIView):
    serializer_class = AddProductSerializer

    def post(self, request, format=None):
        pass

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    permission_classes = (AllowAny,)

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/'
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = request.POST.get('text')
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)

class ImageUpload(forms.Form):
    img = forms.FileField()

def addProduct(request):
    if request.method == 'POST':
        
        # ImageUpload(request.POST, request.FILES)
        image= request.FILES['image']
        print(image)
        print(type(image))
        print('test')
        model = torch.hub.load('ultralytics/yolov5', 'yolov5s')
        try: 
            path = default_storage.save('tmp/lol.png', ContentFile(image.read()))
            tmp_file = os.path.join(settings.MEDIA_ROOT, path)
            results = model(tmp_file)
            df = results.pandas().xyxy[0].sort_values(by=['confidence'], ascending=False)

    
            name = df[['name','confidence']].loc[0]['name']
            return JsonResponse({"result": name} , safe=False)
        except :
            name = 'unknown'
            return JsonResponse({"result": name} , safe=False)
          
    elif request.method == 'GET':
        pass



    return JsonResponse('Payment complete!' , safe=False)

# ADD TO CART FUNCTION
@login_required
class AddToCartView(APIView):

    def post(self, request, *args,**kawrgs):
        slug = request.data.get('slug', None)
        if slug is None:
            return Response({"message": "Invalid reuqest"}, status=HTTP_400_BAD_REQUEST)
        item = get_object_or_404(Products, slug=slug)
        order_item, created = OrderItem.objects.get_or_create(
            productitemitem=item,
            user=request.user,
            ordered=False
        )
        order_qs = Order.objects.filter(user=request.user, ordered=False)
        if order_qs.exists():
            order = order_qs[0]
            # check if the order item is in the order
            if order.items.filter(item__slug=item.slug).exists():
                order_item.quantity += 1
                order_item.save()
                return Response(status=HTTP_200_OK)

            else:
                order.items.add(order_item)
                return Response(status=HTTP_200_OK)
        else:
            ordered_date = timezone.now()
            order = Order.objects.create(
                user=request.user, ordered_date=ordered_date)
            order.items.add(order_item)
            return Response(status=HTTP_200_OK)