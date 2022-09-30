from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index, name='homepage'),
    path('signup/',views.index, name='signup'),
    path('login/',views.index,name='login')

]
# ]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)