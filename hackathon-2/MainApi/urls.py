from django.urls import path
from . import  views
from rest_framework_simplejwt.views import (
    TokenRefreshView
)

urlpatterns = [
    path('products/', views.getProduct, name='getProduct'),
    path('users/', views.getUser, name='user'),
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('test/', views.testEndPoint, name='test'),
    path('addProduct/', views.addProduct, name='AddProduct'),
    path('', views.getRoutes),
    path('addToCart/', views.addToCartView, name= 'add-to-cart'),
    path('cartCount/', views.cartCountView, name='cartCount'),
    path('cart/', views.cartView, name='cartView'),
    path('category/', views.categoriesView,name='category'),
    path('saveProduct/', views.saveProduct, name='saveProduct'),
]