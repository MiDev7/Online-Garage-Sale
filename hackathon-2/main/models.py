from ast import Or
from django.conf import settings
from django.db import models
from django.contrib.auth.models import User
from numpy import product
import pandas
import torch 
import os

# # Model
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
        return self.name + self.id

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
class ShippingDetails(models.Model):
    class Meta:
        verbose_name_plural = "ShippingDetails"
    customer = models.ForeignKey(Customers, on_delete=models.SET_NULL, null=True)
    address = models.CharField(max_length=200, null=False)
    city = models.CharField(max_length=200, null=False)
    country = models.CharField(max_length=200, null=False)
    zipcode = models.CharField(max_length=200, null=False)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.address


class OrderItem(models.Model):
    class Meta:
        verbose_name_plural = "OrderItems"

    product = models.ForeignKey(Products, on_delete=models.SET_NULL, null=True)
    quantity = models.IntegerField(default=0, null=True,blank=True)
    ordered = models.BooleanField(default=False,null=True,blank=True)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.quantity} of {self.product.name}"

    def get_total_item_price(self):
        return self.quantity * self.product.price

    def get_final_price(self):
        return self.get_total_item_price()
    


class Order(models.Model):
    class Meta:
        verbose_name_plural = "Orders"
    customer = models.ForeignKey(Customers, on_delete= models.SET_NULL,blank=True, null=True)
    orders = models.ManyToManyField(OrderItem)
    date_ordered = models.DateTimeField(auto_now_add=True)
    ordered = models.BooleanField(default=False, null=True, blank=False)
    transaction_id = models.CharField(max_length=200, null=True)
    shipping_address = models.ForeignKey(
        ShippingDetails, related_name='shipping_address', on_delete=models.SET_NULL, blank=True, null=True)
    

    def __str__(self):
        return str(self.id)

    
    def get_total(self):
        total = 0
        for order_item in self.orders.all():
            total += order_item.get_final_price()
        return total

    @classmethod
    def add_item_to_cart(cls,customer, item):
        currentUser = User.objects.get(username = customer)
        currentCustomer = Customers.objects.get(user=currentUser)
        print(currentCustomer)
        order_qs, created = Order.objects.get_or_create(ordered=False, customer=customer)

        product = Products.objects.get(id=item)
        orderItem, created = order_qs.orders.get_or_create(product=product)   
        orderItem.quantity += 1
        orderItem.save()

    @classmethod
    def total_item_count(cls, customer):
        currentUser = User.objects.get(username = customer)
        currentCustomer = Customers.objects.get(user=currentUser)
        order_qs, created = Order.objects.get_or_create(ordered=False, customer=currentCustomer)
        count = 0
        total_item = order_qs.orders.all()
        for product in total_item:
            count += product.quantity

        return count











