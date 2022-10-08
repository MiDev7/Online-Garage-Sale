from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index, name='homepage'),
    path('signup/',views.index, name='signup'),
    path('login/',views.index,name='login'),
    path('shop/',views.index,name='shop'),
    path('aboutus/',views.index,name='aboutus'),
    path('contactus/',views.index,name='contactus'),
    path('checkout/', views.index, name='checkout'),
    path('adminPanel/', views.index, name='admin'),
    path('adminPanel/Products', views.index, name='addProducts'),
    path('cart/', views.index, name='cart'),

]
# ]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)