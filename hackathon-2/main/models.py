from platform import mac_ver
from statistics import mode
from tabnanny import verbose
from tokenize import blank_re
from unicodedata import category
from django.db import models
from django.contrib.auth.models import User
import pandas
import torch 
import os

# Model
model = torch.hub.load('ultralytics/yolov5', 'yolov5s')



class Categories(models.Model):
    class Meta:
        verbose_name_plural = "Categories"
    name = models.CharField(max_length = 150 , blank=True, null=True)

    def __str__(self):
        return self.name
# Images


# Create your models here.
class Customers(models.Model):
    class Meta:
        verbose_name_plural = "Customers"
    user = models.OneToOneField(User, null=True,on_delete=models.CASCADE,blank=False,unique=True, related_name="customer")
    first_name = models.CharField(max_length=150, null=True)
    last_name = models.CharField(max_length = 150, null=True)
    

    def __str__(self):
        return self.last_name

class Products(models.Model):
    class Meta:
        verbose_name_plural = "Products"
    name = models.CharField(max_length=100, blank=True, null=True)
    image = models.ImageField(upload_to='Products/')
    seller = models.ForeignKey(User,on_delete=models.SET_NULL, null=True, blank=True)
    price = models.DecimalField(max_digits=15, decimal_places= 2)
    qty= models.IntegerField(default=1, null=True,blank=True)
    description = models.TextField(max_length=2000, null=True, blank=True)
    category = models.ManyToManyField(Categories, related_name='category')

    
    def __str__(self):
        return self.name

    @property
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url

    

    def save(self, *args, **kwargs):
        directory = os.getcwd()

        print(directory)
        super(Products, self).save(*args, **kwargs)
        print()
        print(self.image.url)
        dir = os.getcwd() + '/main/static/image'
        imgs = [dir + self.image.url]  # batch of images

        # Inference
        try: 
            results = model(imgs)
            df = results.pandas().xyxy[0].sort_values(by=['confidence'], ascending=False)

        
            self.name = df[['name','confidence']].loc[0]['name']

        except:
            pass
            #self.name = 'undefined'

        super(Products, self).save(*args, **kwargs)
        
# class Order(models.Model):
#     user = models.ForeignKey(users, on_delete=models.SET_NULL,null=True,blank=True)

class Order(models.Model):
    class Meta:
        verbose_name_plural = "Orders"
    customer = models.ForeignKey(Customers, on_delete= models.SET_NULL,blank=True, null=True)
    date_ordered = models.DateTimeField(auto_now_add=True)
    orderhost = models.CharField(null=True, blank=False, max_length=400)
    complete = models.BooleanField(default=False, null=True, blank=False)
    transaction_id = models.CharField(max_length=200, null=True)

    def __str__(self):
        return str(self.id)

    @property
    def get_cart_total(self):
        orderitems = self.orderitem_set.all()
        total = sum([item.get_total for item in orderitems])

        return total

    @property
    def get_cart_items(self):
        orderitems = self.orderitem_set.all()
        total = sum([item.quantity for item in orderitems])

        return total



class OrderItem(models.Model):
    class Meta:
        verbose_name_plural = "OrderItems"
    product = models.ForeignKey(Products, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL,null=True)
    quantity = models.IntegerField(default=0, null=True,blank=True)
    date_added = models.DateTimeField(auto_now_add=True)

    @property
    def get_total(self):
        total = self.product.price * self.quantity
        return total


class ShippingDetails(models.Model):
    class Meta:
        verbose_name_plural = "ShippingDetails"
    customer = models.ForeignKey(Customers, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    address = models.CharField(max_length=200, null=False)
    city = models.CharField(max_length=200, null=False)
    country = models.CharField(max_length=200, null=False)
    zipcode = models.CharField(max_length=200, null=False)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.address


