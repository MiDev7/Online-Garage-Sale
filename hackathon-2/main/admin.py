from django.contrib import admin
from .models import *
# Register your models here.
class UsersAdmin(admin.ModelAdmin):
    list_display = ['user', 'first_name','last_name']

class ProductsAdmin(admin.ModelAdmin):
    list_display = ['id', 'name','image','seller','price','qty','description']

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']

admin.site.register(Customers,UsersAdmin)
admin.site.register(Products,ProductsAdmin)

admin.site.register(ShippingDetails)
admin.site.register(OrderItem)
admin.site.register(Order)
admin.site.register(Categories,CategoryAdmin)